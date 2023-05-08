FROM python:3.9.6-buster

WORKDIR /usr/app

COPY . .

RUN /usr/local/bin/python -m pip install --upgrade pip

RUN pip install -r requirements.txt

ENV FLASK_APP ./AI

ENTRYPOINT ["flask"]

EXPOSE 8083

CMD ["run", "--host", "0.0.0.0"]
