from flask import Flask, render_template, request, redirect, url_for, Blueprint
from flask_cors import CORS
import os
import datetime
from keras.models import load_model  # TensorFlow is required for Keras to work
from PIL import Image, ImageOps  # Install pillow instead of PIL
import numpy as np
import pymysql
############# DB connect
host = 'k8d202.p.ssafy.io'
port = 3306
user = 'root'
password = 'skyeye12'
database = 'd202'

# MariaDB 연결
conn = pymysql.connect(
    host=host,
    port=port,
    user=user,
    password=password,
    database=database
)
cursor = conn.cursor()
# Connection이 잘 되었는지 확인
if conn:
    print("MariaDB에 접속되었습니다.")
else:
    print("MariaDB에 접속할 수 없습니다.")



bp = Blueprint('main', __name__, url_prefix='/api')
######################## Tensorflow Classifier model Loading
np.set_printoptions(suppress=True)

# Load the model
model = load_model("/usr/app/keras_model.h5", compile=False)


class_names = open("/usr/app/labels.txt", "r").readlines()
# model = load_model("keras_model.h5", compile=False)


# class_names = open("labels.txt", "r").readlines()

data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)


@bp.route('/ai')
def index():
    return render_template('index.html')

@bp.route('/upload', methods=['POST'])
def upload():
        
    folderId = request.form.get('folder_id')   # 폴더 아이디 
    folderId=int(folderId)
    # 폴더 이름 
#    os.mkdir(folderName)
    
    # 업로드된 파일 가져오기
    files = request.files.getlist('files')   
    print(request.files)

    # 파일 저장 경로 설정
    
    filenames = []
    print('filename: ',filenames)
    for file in request.files.getlist('file'):
        # 파일 이름 받아서 ' . ' 점 기준으로 뒤가 확장자
        # jpg, jpeg, png 세 개 아니면 에러 반환
        # 확장자 보존 now 뒤에 확장자 까지 붙여서
        extension = file.filename.rsplit('.', 1)[1].lower()
        
        # if extension not in ['jpg', 'jpeg', 'png']:
        #     return "Error: Invalid file format."
        now = datetime.datetime.now().strftime('{}{}{}{}{}{}'.format('%Y','%m','%d','%H','%M','%S%f')) 
        filename = f"images/{now}.{extension}"
        # print('filename1: ',file)
        file.save(filename)
        filenames.append(filename)
        image = Image.open(f"/usr/app/images/{now}.{extension}").convert("RGB")
        # image = Image.open(f"images/{now}.{extension}").convert("RGB")
        storedFileName=  f"images/{now}"

        size = (224, 224)
        image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)


        image_array = np.asarray(image)


        normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1


        data[0] = normalized_image_array
        sql = "select image_id from image order by image_id desc limit 1"
        cursor.execute(sql)
        
        # image_id
        image_id=cursor.fetchall()[0][0]
        print(image_id)
        

        prediction = model.predict(data)
        index = np.argmax(prediction)
        class_name = class_names[index]
        confidence_score = prediction[0][index]
        
       

        crackType = class_name[2:].rsplit('\n')[0]
        # print(crackType)#  크랙 종류
        sql="insert into crack (crack_type, folder_id, image_id,crack_position) values (%s, %s, %s,%s)"
        val= (crackType,folderId,image_id,'floor')
        cursor.execute(sql,val)
        # print("Class:", crackType , end="")
        # print("Confidence Score:", confidence_score)
    # print(filenames)
    conn.commit()
    # 파일 업로드 성공 메시지 반환
    return redirect(url_for('main.uploaded_file', filenames=filenames))


@bp.route('/uploads/cf')
def uploaded_file():
    return 'Uploaded file Upload Success'



app = Flask(__name__)
app.register_blueprint(bp)
CORS(app)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)
