USE ucode_web;
CREATE TABLE IF NOT EXISTS powers(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL,
    name VARCHAR(30) NOT NULL,
    points int NOT NULL,
    type ENUM('attack', 'defense') NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE 
);

CREATE TABLE IF NOT EXISTS races(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    hero_id int NOT NULL,
    name VARCHAR(30) NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE 
);

CREATE TABLE IF NOT EXISTS teams(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL,
    name VARCHAR(30) NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE 
);