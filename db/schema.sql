CREATE DATABASE employee-tracker;
CREATE DATABASE employee_tracker;
CREATE TABLE departments (
id INT PRIMARY KEY auto_increment,
name VARCHAR(30)
);
USE employee_tracker;
CREATE TABLE role (
id INT PRIMARY KEY auto_increment,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
foreign key (department_id) references departments(id)
);
CREATE TABLE employees (
id INT PRIMARY KEY auto_increment,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
foreign key (role_id) references role(id)
);
