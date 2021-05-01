CREATE TABLE `ucode_web`.`users` (
   `id_user` INT(11) NOT NULL AUTO_INCREMENT ,
   `username` VARCHAR(32) NOT NULL ,
   `password` VARCHAR(40) NOT NULL ,
    PRIMARY KEY (`id_user`),
    UNIQUE (`username`));

CREATE TABLE `ucode_web`.`hero_class` (
    `id_class` INT(11) NOT NULL AUTO_INCREMENT ,
     `name` VARCHAR(32) NOT NULL ,
      `img` VARCHAR(40) NOT NULL ,
      PRIMARY KEY (`id_class`),
      UNIQUE (`name`));

CREATE TABLE `ucode_web`.`cards` (
   `id_card` INT(11) NOT NULL AUTO_INCREMENT ,
   `attack` INT(11) NOT NULL ,
   `defence` INT(11) NOT NULL ,
   `cost` INT(11) NOT NULL ,
   `front_img` VARCHAR(40) NOT NULL ,
   `back_img` VARCHAR(40) NOT NULL ,
   PRIMARY KEY (`id_card`));

ALTER TABLE users ADD id_class INT(11);
ALTER TABLE users ADD CONSTRAINT fk_id_class FOREIGN KEY (id_class) REFERENCES hero_class(id_class);
ALTER TABLE cards ADD id_class INT(11);
ALTER TABLE cards ADD CONSTRAINT fk_id_class2 FOREIGN KEY (id_class) REFERENCES hero_class(id_class);

INSERT INTO hero_class(id_class, name, img)
VALUES(1,"Penni Parker", "assets/teams/3.png"),
	 (2,"Captain America(Hydra)","assets/teams/2.png"),
	 (3,"Captain Marvel(LGBT)", "assets/teams/1.png");


INSERT INTO cards(attack, defence, cost, front_img, back_img, id_class)
VALUES(1,1,1,"assets/nazi/1.png", "assets/cards/nazi.png",2),
(2,2,2,"assets/nazi/2.png", "assets/cards/nazi.png",2),
(3,3,3,"assets/nazi/3.png", "assets/cards/nazi.png",2),
(4,4,4,"assets/nazi/4.png", "assets/cards/nazi.png",2),
(5,5,5,"assets/nazi/5.png", "assets/cards/nazi.png",2),
(6,6,6,"assets/nazi/6.png", "assets/cards/nazi.png",2),
(7,7,7,"assets/nazi/7.png", "assets/cards/nazi.png",2),
(8,8,8,"assets/nazi/8.png", "assets/cards/nazi.png",2),
(9,9,9,"assets/nazi/9.png", "assets/cards/nazi.png",2),
(10,10,10,"assets/nazi/10.png", "assets/cards/nazi.png",2),
(1,1,1,"assets/lgbt/1.png", "assets/cards/lgbt.png",3),
(2,2,2,"assets/lgbt/2.png", "assets/cards/lgbt.png",3),
(3,3,3,"assets/lgbt/3.png", "assets/cards/lgbt.png",3),
(4,4,4,"assets/lgbt/4.png", "assets/cards/lgbt.png",3),
(5,5,5,"assets/lgbt/5.png", "assets/cards/lgbt.png",3),
(6,6,6,"assets/lgbt/6.png", "assets/cards/lgbt.png",3),
(7,7,7,"assets/lgbt/7.png", "assets/cards/lgbt.png",3),
(8,8,8,"assets/lgbt/8.png", "assets/cards/lgbt.png",3),
(9,9,9,"assets/lgbt/9.png", "assets/cards/lgbt.png",3),
(10,10,10,"assets/lgbt/10.png", "assets/cards/lgbt.png",3),
(1,1,1,"assets/anime/1.png", "assets/cards/anime.png",1),
(2,2,2,"assets/anime/2.png", "assets/cards/anime.png",1),
(3,3,3,"assets/anime/3.png", "assets/cards/anime.png",1),
(4,4,4,"assets/anime/4.png", "assets/cards/anime.png",1),
(5,5,5,"assets/anime/5.png", "assets/cards/anime.png",1),
(6,6,6,"assets/anime/6.png", "assets/cards/anime.png",1),
(7,7,7,"assets/anime/7.png", "assets/cards/anime.png",1),
(8,8,8,"assets/anime/8.png", "assets/cards/anime.png",1),
(9,9,9,"assets/anime/9.png", "assets/cards/anime.png",1),
(10,10,10,"assets/anime/10.png", "assets/cards/anime.png",1);
   