# Nginx-cors-boilerplate

## Introduction

The boilerplate shows how to hide the CORS problem behind the Nginx proxy and make all the request under same domain.

This is very useful when you can't control the backend ( for example: ask the backend server to add the frontend as trusted one).

## How

Here we provide 3 parts to simulate the CORS request:

1. backend which provide the REST service ( implemented by Spring Boot)
2. frontend which send the REST request ( implemented by Angular 2 )
3. proxy which act as the CORS negotiation ( use Nginx )

The case is:

1. The backend provides the REST service to list the TODO items.
2. The frontend send HTTP request to get the TODO list.
3. The frontend does not care where is the TODOLIST service, because the Nginx proxy hides it.
4. The frontend just make a request to the REST api which's exposed by Nginx proxy.

The benefit is:

1. Don't need to change the backend.
2. Make very few change to frontend.

The proxy takes most of the responsibility. Now let's figure out how it works.

* The domain of frontend is http://www.myexample.com.
* The rest api provider is http://www.thirdparty.com.
* The frontend is supposed to access http://www.thirdparty.com/api
* Now the frontend is changed to access http://www.myexmaple.com/api
* It's very easy to change the target endpoint to another one if the target is defined in a global const.


# Get Started

## hosts

First , please update your `/etc/hosts` with following configuration.

```hosts
127.0.0.1  www.myexample.com www.myfrontend.com www.mybackend.com
```

## startup

1. build the backend

```
cd backend
gradle clean build
```

2. build the frontend

```
cd frontend
npm install
```

3. start the boilerplate with docker-compose

```sh
docker-compose up --build
```

## check

Open browser and enter the URL

> http://www.myexample.com
