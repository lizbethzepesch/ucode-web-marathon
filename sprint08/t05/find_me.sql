USE ucode_web;


SELECT * FROM (
    SELECT * FROM (
        SELECT t.hero_id FROM (
            SELECT hero_id FROM teams AS t GROUP BY hero_id HAVING COUNT(*) >= 2 
        ) AS t INNER JOIN races ON races.hero_id = t.hero_id WHERE races.name <> 'human'
    ) AS s INNER JOIN heroes ON heroes.id = s.hero_id WHERE heroes.name LIKE BINARY '%a%'
) AS e WHERE class_role = 'tankman' OR  class_role = 'healer' ORDER BY id;