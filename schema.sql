DROP DATABASE IF EXISTS journallite;

CREATE DATABASE journallite;

USE journallite;

CREATE table journals(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date VARCHAR(99) NOT NULL,
    body TEXT
);

INSERT INTO journals(title, date, body) VALUES('Pig Latin Rules', "2020-09-19", "Hello World");
INSERT INTO journals(title, date, body) VALUES('HYAAAA', "2310-01-19", 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow');