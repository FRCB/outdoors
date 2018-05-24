CREATE TABLE Playgrounds(
ID SERIAL PRIMARY KEY,
name varchar(60) NOT NULL,
Address varchar(60) NOT NULL,
City varchar(20) NOT NULL,
State varchar(20) NOT NULL,
Zip integer,
image_url text NOT NULL,
Reviews text
);