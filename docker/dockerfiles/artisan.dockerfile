FROM composer:2.5.8

FROM php:8.1-fpm

WORKDIR /var/www/html

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt update
RUN apt install -y git

COPY . .

RUN docker-php-ext-install mysqli pdo pdo_mysql