# nginx-cors-boilerplate


The boilerplate shows how to hide the CORS problem behind the NGINX proxy and make all the request under same domain.

This is very useful when you can't control the backend ( for example: ask the backend server to add the frontend as trusted one).

Here we provide 3 parts to simulate the CORS request:

1. backend which provide the REST service ( implemented by Spring Boot)
2. frontend which send the REST request ( implemented by React & Redux )
3. proxy which act as the CORS negotiation ( use nginx )

The  case is:

1. The backend provides the REST service to list the TODO items.
2. The frontend send HTTP request to get the TODO list.
3. The frontend does not care where is the TODOLIST service, because the NGINX proxy hides it.
4. The frontend just make a request to the REST api which's exposed by NGINX proxy.

Now let's figure out how it works.