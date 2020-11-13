DROP DATABASE IF EXISTS reviewsMod;

CREATE DATABASE reviewsMod;

USE reviewsMod;

CREATE TABLE reviews (
 id INT AUTO_INCREMENT PRIMARY KEY,
 user_id INT,
 title VARCHAR(40),
 full_text VARCHAR(200),
 date VARCHAR(30),
 travel_type VARCHAR(20),
 language VARCHAR(20),
 rating INT,
 photo VARCHAR(50)
 FOREIGN KEY (user_id) REFERENCES users(id)
)


CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(20),
 username VARCHAR(20),
 address VARCHAR(40),
 contributions INT,
 votes INT
)
