FROM php:8.2-apache
COPY . /var/www/html/


# Enable Apache rewrite module (useful for many PHP apps)
RUN a2enmod rewrite

# Set proper ownership so Apache can read the files
RUN chown -R www-data:www-data /var/www/html
EXPOSE 80
