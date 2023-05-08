FROM python:3.9.16

WORKDIR /usr/app

COPY . .

RUN /usr/local/bin/python -m pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 5000

CMD [ "python", "file_save.py" ]
