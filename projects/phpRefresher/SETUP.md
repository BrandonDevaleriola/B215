# LAMP Server setup notes and link for Ubuntu
Tutorials from digital ocean were refereced which matched my current OS for local development

* [Initial Server Setup with Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04)
* [How To Install Linux, Apache, MySQL, PHP (LAMP) stack on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04)
* [How To Install and Secure phpMyAdmin on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-20-04)


Installed: PHP 7.4, MySQL 8, Apache2, phpMyAdmin

Installation commands:

$ service apache2 status
$ service mysql status
$ service --status-all
$ sudo apt-get install tasksel 
$ sudo tasksel install lamp-server
$ sudo ufw app list
$ sudo ufw allow in "Apache"
$ sudo mysql
$ ln -s /home/brandon/Documents/my-repos/my-github-repos/B215/projects/phpRefresher/glyphic /var/www/glyphic
$ sudo apt install phpmyadmin php-mbstring php-zip php-gd php-json php-curl

