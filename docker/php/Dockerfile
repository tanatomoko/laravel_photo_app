FROM php:7.3.7-fpm-alpine3.9

WORKDIR /var/www/photo_app

COPY php.ini /usr/local/etc/php/

RUN apk update && apk upgrade && apk add --no-cache \
  libpng-dev\
  nodejs-npm \
  tzdata \
  && docker-php-ext-install pdo_mysql mysqli gd \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && apk del libpng-dev tzdata \
  && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
