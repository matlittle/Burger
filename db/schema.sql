CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO INCREMENT,
    PRIMARY KEY(id),
    burger_name VARCHAR(50),
    devoured BOOLEAN SET DEFAULT false
);