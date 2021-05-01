USE ucode_web;
CREATE TABLE heroes(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL,
    race VARCHAR(20) DEFAULT 'human' NOT NULL
);