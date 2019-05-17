FROM alpine:3.9

RUN apk --update add --no-cache nginx && \
    ln -sf /usr/share/xoneinfo/Asia/Tokyo /etc/localtime

RUN mkdir -p /run/nginx

CMD nginx -g "daemon off;"