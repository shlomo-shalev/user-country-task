#!/bin/sh

envsubst "`printf '${%s} ' $(bash -c 'compgen -A variable')`" < /etc/nginx/conf.d/nginx.conf.tamplate > /etc/nginx/conf.d/default.conf 
nginx -g 'daemon off;'