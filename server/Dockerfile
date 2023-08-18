# base-image
FROM openjdk:11
ENV RDS_URL jdbc:mysql://database-1.c0nr23ybhcgj.ap-northeast-2.rds.amazonaws.com:13306/test?useSSL=false&serverTimezone=Asia/Seoul&characterEncoding=UTF-8
ENV MYSQL_USERNAME admin
ENV MYSQL_PASSWORD zheldgowh1!
ENV SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENT-ID 344258898207-2qbi7a7kkd5lqi1qam290hgahkuf6im0.apps.googleusercontent.com
ENV SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENT-SECRET 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
ENV JWT_SECRET_KEY 789855qq789855qq789855qq789855qq789855qq789855qq!@#$%
# COPY에서 사용될 경로 변수
ARG JAR_FILE=build/libs/*.jar
# jar 빌드 파일을 도커 컨테이너로 복사
COPY ${JAR_FILE} app.jar
# jar 파일 실행
ENTRYPOINT ["java","-jar","/app.jar"]
