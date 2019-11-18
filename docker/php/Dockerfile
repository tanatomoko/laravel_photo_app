FROM php:7.3.7-fpm-alpine3.9

WORKDIR /var/www/photo_app

COPY php.ini /usr/local/etc/php/

RUN apk update && apk upgrade && apk add --no-cache \
  freetype \
  libpng \
  libjpeg-turbo \
  freetype-dev \
  libpng-dev \
  libjpeg-turbo-dev \
  nodejs-npm \
  tzdata \
  && docker-php-ext-configure gd --with-png-dir=/usr/include --with-jpeg-dir=/usr/include \
  && docker-php-ext-install gd pdo_mysql mysqli \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && apk del libpng-dev tzdata \
  && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
