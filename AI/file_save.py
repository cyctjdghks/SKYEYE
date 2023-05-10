from flask import Flask, render_template, request, redirect, url_for, Blueprint
from flask_cors import CORS
import os 
import datetime
from keras.models import load_model  # TensorFlow is required for Keras to work
from PIL import Image, ImageOps  # Install pillow instead of PIL
import numpy as np

bp = Blueprint('main', __name__, url_prefix='/api')
######################## Tensorflow Classifier model Loading
np.set_printoptions(suppress=True)

# Load the model
model = load_model("keras_Model.h5", compile=False)


class_names = open("labels.txt", "r").readlines()


data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)


@bp.route('/ai')
def index():
    return render_template('index.html')

@bp.route('/upload', methods=['POST'])
def upload():
    # 업로드된 파일 가져오기
    files = request.files.getlist('files')
    print(request.files)

    # 파일 저장 경로 설정
    
    filenames = []
    print('filename: ',filenames)
    for file in request.files.getlist('file'):
        now = datetime.datetime.now().strftime('{}{}{}{}{}{}'.format('%Y','%m','%d','%H','%M','%S%f'))
        filename = f"images/{now}.jpg"
        print('filename1: ',file)
        file.save(filename)
        filenames.append(filename)
        image = Image.open(f"images/{now}.jpg").convert("RGB")


        size = (224, 224)
        image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)


        image_array = np.asarray(image)


        normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1


        data[0] = normalized_image_array


        prediction = model.predict(data)
        index = np.argmax(prediction)
        class_name = class_names[index]
        confidence_score = prediction[0][index]


        print("Class:", class_name[2:], end="")
        print("Confidence Score:", confidence_score)
    print(filenames)
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
