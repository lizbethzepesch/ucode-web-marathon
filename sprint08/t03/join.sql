USE ucode_web;

SELECT heroes.name, teams.name FROM heroes
LEFT JOIN teams ON heroes.id = teams.hero_id;
SELECT heroes.name, powers.name FROM heroes
LEFT JOIN powers ON heroes.id = powers.hero_id
UNION 
SELECT heroes.name, powers.name FROM heroes
RIGHT JOIN powers ON heroes.id = powers.hero_id;
SELECT heroes.name, races.name FROM heroes
INNER JOIN races ON heroes.id = races.hero_id;