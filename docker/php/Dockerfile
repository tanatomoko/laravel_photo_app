FROM php:7.3-fpm-alpine3.8

WORKDIR /var/www/laravel

COPY php.ini /usr/local/etc/php/

RUN apk update && apk upgrade && apk add --no-cache \
  freetype-dev libjpeg-turbo-dev libpng-dev libmcrypt-dev \
  git vim unzip tzdata \
  libmcrypt-dev \
  libltdl \
  nodejs \
  && docker-php-ext-install pdo_mysql mysqli gd \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && apk del tzdata \
  && rm -rf /var/cache/apk/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
