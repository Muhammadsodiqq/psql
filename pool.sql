

CREATE TABLE users(
    user_id SERIAL NOT NULL PRIMARY KEY,
    user_name VARCHAR(32) NOT NULL,
    user_age INT NOT NULL
);


INSERT INTO users( user_name,user_age) VALUES ('Muhammad',17)