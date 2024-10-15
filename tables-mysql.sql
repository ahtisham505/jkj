CREATE DATABASE your_database;

USE your_database;

CREATE TABLE people (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    date_of_birth DATE,
    phone_number VARCHAR(255)
);

INSERT INTO people (id, name, address, date_of_birth, phone_number)
VALUES
('XYZ123456789', 'John Doe', '1234 Elm Street, Springfield, USA', '1980-01-01', '1234567890'),
('ABC987654321', 'Jane Smith', '5678 Oak Avenue, Shelbyville, USA', '1990-02-02', '0987654321');
