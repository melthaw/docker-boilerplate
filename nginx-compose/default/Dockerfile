# Base Docker image: https://hub.docker.com/r/clouthinkin/nginx/
FROM clouthinkin/nginx

LABEL maintainer "melthaw@gmail.com"

ADD etc/nginx/ /etc/nginx/
ADD usr/share/nginx/html/ /usr/share/nginx/html/

VOLUME ["/etc/nginx/conf.d","/usr/share/nginx/html"]