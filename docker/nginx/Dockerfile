FROM alpine:3.9

RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    nginx~=1.14.2 && \
    ln -sf /usr/share/xoneinfo/Asia/Tokyo /etc/localtime

RUN mkdir -p /run/nginx

# フォアグランドで起動する
CMD nginx -g "daemon off;"