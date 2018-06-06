CREATE TABLE IF NOT EXISTS users (
ID Serial PRIMARY KEY, 
user_name varchar(50) NOT NULL,
Email varchar(50) NOT NULL,
img text,
Zip integer,
auth_id varchar(60)NOT NULL
);