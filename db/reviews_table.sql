CREATE TABLE reviews(
ID SERIAL PRIMARY KEY,
playground_id integer,
reviewer_name varchar(50) NOT NULL,
rating integer,
content varchar(250) NOT NULL,
);

