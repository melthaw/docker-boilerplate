# nginx-docker-compose

The boilerplate to show how compose multi static content provider to one single nginx reverse proxy.

## get started

Before start, please make sure the docker and docker-compose is installed on your local machine.

1. build 

```
> docker-compose build
```

2. start 

```
> docker-compose up -d
```

Now open new browser and enter the following url to check out what's happened.

* http://localhost/
* http://localhost/foobar/
* http://localhost/hello/
* http://localhost/todolist/

3. check status

```
> docker-compose ps
```

4. show logs

```
> docker-compose logs -f proxy
```

5. stop 

```
> docker-compose down -v
```

## docker instance list

* default  - serviced as static content provider and show welcome message
* hello - serviced as static content provider and show hello world message
* foobar - serviced as static content provider show foobar message
* todolist - serviced as http service and accessed by the way of proxy forward


## the way to compose docker

* default as volume
* hello as volume
* foobar as volume
* todolist as external link

## naming conversion 

The recommended naming conversion makes the compose easy, but please feel free to re-organize the structure in your favorite way.

### volume 

1. nginx.conf location

* default - /etc/nginx/nginx.conf
* default - /etc/nginx/conf.d/default.conf
* hello - /etc/nginx/conf.d/hello/nginx.conf
* foobar - /etc/nginx/conf.d/foobar/nginx.conf

2. static file path

* default - /usr/share/nginx/html
* hello - /usr/share/nginx/hello
* foobar - /usr/share/nginx/foobar

### link

The todolist is based on the way of docker link . The todolist is started as one single http service , then linked to proxy. 
So it's just need provide the `/etc/nginx/conf.d/todolist/nginx.conf` to share. 

The nginx `location` is simply forwarding the request to `todolist` server for example: 

```
location /todolist/ {
    proxy_pass  http://todolist/;
    proxy_set_header Host $host;
}

```
