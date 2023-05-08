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
    file = request.files['file']

    # 파일 저장 경로 설정
    now = datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S')
    filename = f"images/{now}.PNG"

    # 파일 저장
    file.save(filename)

    # 파일 업로드 성공 메시지 반환
    return redirect(url_for('main.uploaded_file', filename=filename))

@bp.route('/uploads/cf')
def uploaded_file():
    return 'Uploaded file Upload Success'

app = Flask(__name__)
app.register_blueprint(bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
