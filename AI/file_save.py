from flask import Flask, render_template, request, redirect, url_for
import os
import datetime
app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'  # 업로드 된 파일을 저장할 폴더 경로
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/AI')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    # 업로드된 파일 가져오기
    file = request.files['file']

    # 파일 저장 경로 설정
    now = datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S')
    filename = f"{now}.PNG"

    # 파일 저장
    file.save(filename)

    # 파일 업로드 성공 메시지 반환
    return redirect(url_for('uploaded_file', filename=file.filename))

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return 'Uploaded file: {}'.format(filename)

if __name__ == '__main__':
    app.run(debug=True)
