FROM python:3.9.16

WORKDIR /usr/app

COPY . .

RUN /usr/local/bin/python -m pip install --upgrade pip

RUN python
RUN python3
RUN python --version
RUN python3 --version

RUN pip install -r requirements.txt

ENV FLASK_APP ./AI

ENTRYPOINT ["flask"]

EXPOSE 8083

CMD ["run", "--host", "0.0.0.0"]
