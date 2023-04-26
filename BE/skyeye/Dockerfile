FROM adoptopenjdk/openjdk11
WORKDIR /usr/app
COPY build/libs/d202-0.0.1-SNAPSHOT.jar d202.jar
EXPOSE 8082
CMD ["java", "-jar", "d202.jar"]
