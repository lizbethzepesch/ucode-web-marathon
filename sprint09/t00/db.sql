CREATE DATABASE sword;
-- CREATE USER 'ykliuieva'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON *.* TO 'ykliuieva'@'localhost' WITH GRANT OPTION;
USE sword;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(30) NOT NULL UNIQUE KEY,
    password VARCHAR(30) NOT NULL,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    admin INT NOT NULL
);