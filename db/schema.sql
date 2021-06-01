CREATE DATABASE employee-tracker;
CREATE DATABASE employee_tracker;

CREATE TABLE departments (
id INT PRIMARY KEY auto_increment,
name VARCHAR(30) NOT NULL
);

USE employee_tracker;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employees;

CREATE TABLE role (
id INT PRIMARY KEY auto_increment,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
foreign key (department_id) references departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
id INT PRIMARY KEY auto_increment,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
foreign key (role_id) references role(id) ON DELETE CASCADE
);
