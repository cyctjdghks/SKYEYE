FROM python:3.9.6-buster

WORKDIR /usr/app

RUN pip install -r requirements.txt

ENV FLASK_APP ./AI

ENTRYPOINT ["flask"]

EXPOSE 8083

CMD ["run", "--host", "0.0.0.0"]
