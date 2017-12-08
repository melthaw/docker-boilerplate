> Using environment variables in nginx configuration Out-of-the-box, nginx doesn’t support environment variables inside most configuration blocks. But envsubst may be used as a workaround if you need to generate your nginx configuration dynamically before nginx starts.
>
>  from https://hub.docker.com/_/nginx/

This is why `gettext` (which included `envsubst` cmd) is installed in Dockerfile.