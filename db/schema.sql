DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL,
  burger_name VARCHAR(30),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

SELECT * FROM top5000;
