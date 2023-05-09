from flask import Flask, render_template, request, redirect, url_for, Blueprint
import os
import datetime

bp = Blueprint('main', __name__, url_prefix='/api')

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
    print(filenames)
    # 파일 업로드 성공 메시지 반환
    return redirect(url_for('main.uploaded_file', filenames=filenames))


@bp.route('/uploads/cf')
def uploaded_file():
    return 'Uploaded file Upload Success'



app = Flask(__name__)
app.register_blueprint(bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)
