########## How To Use Docker Image ###############
##  Build docker image: docker build --no-cache -f Dockerfile -t clouthinkin/nginx-cors-boilerplate-backend --rm=true .
##################################################
from clouthinkin/jre

ADD shared/scripts/docker-entrypoint.sh /
ADD build/libs/backend-1.0.0.SNAPSHOT.jar /backend-1.0.0.SNAPSHOT.jar

RUN chmod +x /*.sh

WORKDIR /

EXPOSE 8080

ENTRYPOINT /docker-entrypoint.sh
