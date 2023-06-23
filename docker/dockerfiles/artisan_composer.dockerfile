FROM composer:2.5.8

FROM php:8.1-fpm

WORKDIR /var/www/html

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update
RUN apt-get install -y libzip-dev zip 
RUN docker-php-ext-install mysqli pdo pdo_mysql zip