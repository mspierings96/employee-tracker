INSERT INTO departments (name)
VALUES
    ("Sales"),
    ("HR"),
    ("Management"),
    ("Supply Chain"),
    ("Marketing"),
    ("Janitorial"),
    ("Maintenance"),
    ("Shipping"),
    ("Kitchen");

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "Sales Head", 10000, 1),
    (2, "HR", 20000, 2),
    (3, "Management", 3000, 3),
    (4, "Supply Chain", 40000, 4),
    (5, "Marketing", 50000, 5),
    (6, "Filing", 40000, NULL),
    (7, "Cleaning", 15000, NULL);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
(1,	"Lebron", "James", 1, 2),
(2,	"Jimmy", "Butler", 2, 3),
(3,	"Tim", 	"Duncan", 3, 2),
(4,	"Brooke", "Lopez", 4, 6),
(5,	"Michael", "Jordan",5, 8);
				
				