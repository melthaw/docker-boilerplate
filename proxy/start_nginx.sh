#!/bin/bash

set -e

envsubst '\$FRONTEND_ENDPOINT \$BACKEND_ENDPOINT' < /default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"