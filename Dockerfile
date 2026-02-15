# Use the official PHP image with Apache already configured
FROM php:8.2-apache

# Copy all your website files (including index.php) into the web root
COPY . /var/www/html/

# Enable Apache rewrite module (useful for many PHP apps)
RUN a2enmod rewrite

# Set proper ownership so Apache can read the files
RUN chown -R www-data:www-data /var/www/html
