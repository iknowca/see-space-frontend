FROM nginx:stable-alpine

COPY ./dist: /usr/share/nginx/html
COPY ./conf/nginx.conf: /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]