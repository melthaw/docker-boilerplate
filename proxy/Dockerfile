from clouthinkin/nginx

RUN apk add --update gettext && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /var/cache/apk/*

ADD ./etc/nginx/conf.d/default.conf.template /
ADD start_nginx.sh /

RUN chmod +x /*.sh

CMD ["/bin/bash","-c","/start_nginx.sh"]
