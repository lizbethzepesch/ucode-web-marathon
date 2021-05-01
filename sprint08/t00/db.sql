CREATE DATABASE ucode_web;
CREATE USER 'ykliuieva'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON *.* TO 'ykliuieva'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;