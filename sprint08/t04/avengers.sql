USE ucode_web;

SELECT S.hero_id FROM(
SELECT powers.hero_id, SUM(powers.points) AS SUMM FROM powers GROUP BY powers.hero_id
) AS S ORDER BY S.SUMM DESC LIMIT 1;

SELECT W.hero_id FROM(
SELECT powers.hero_id, SUM(powers.points)  AS WEAK FROM powers WHERE powers.type='defense' GROUP BY powers.hero_id
) AS W ORDER BY W.WEAK LIMIT 1;
 
SELECT s.hero_id FROM powers INNER JOIN (
    SELECT t.hero_id, teams.name FROM (
        SELECT hero_id FROM teams GROUP BY hero_id HAVING COUNT(*) = 1
    ) AS t INNER JOIN teams ON teams.hero_id = t.hero_id 
) AS s ON powers.hero_id = s.hero_id WHERE s.name='Avengers' ORDER BY points DESC; 

SELECT * FROM (SELECT SUM(s.points) as points, s.name FROM ( 
    SELECT powers.points, teams.name FROM powers INNER JOIN teams ON teams.hero_id = powers.hero_id 
) AS s WHERE s.name = 'Avengers'
UNION 
SELECT SUM(c.points) as points, c.name FROM ( 
    SELECT powers.points, teams.name FROM powers INNER JOIN teams ON teams.hero_id = powers.hero_id 
) AS c WHERE c.name = 'Hydra'
) AS TB ORDER BY points DESC ;

