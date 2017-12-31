# Base Docker image: https://hub.docker.com/r/clouthinkin/nginx/
FROM clouthinkin/nginx

LABEL maintainer "melthaw@gmail.com"

ADD etc/nginx/conf.d/ /etc/nginx/conf.d/
ADD usr/share/nginx/ /usr/share/nginx/

VOLUME ["/etc/nginx/conf.d/todolist"]