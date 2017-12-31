# Base Docker image: https://hub.docker.com/r/clouthinkin/nginx/
FROM clouthinkin/nginx

LABEL maintainer "melthaw@gmail.com"

ADD etc/nginx/conf.d/ /etc/nginx/conf.d/
ADD usr/share/nginx/foobar/ /usr/share/nginx/foobar/

VOLUME ["/etc/nginx/conf.d/foobar/","/usr/share/nginx/foobar"]