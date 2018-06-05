INSERT INTO reviews
(playground_id, reviewer_name,rating, content)
VALUES
($1,$2, $3, $4)
RETURNING *;

