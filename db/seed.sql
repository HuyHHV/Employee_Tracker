INSERT INTO department (name)
VALUES ("Customer Service"),
        ("Finance"),
        ("Sales"),
        ("Engineer");

INSERT INTO role (title, salary, department_id)
VALUES ("CFO", 250000, 2),
       ("Salesperson", 80000, 3),
       ("Service Manager", 100000, 1),
       ("Sales Lead", 150000, 3),
       ("Full stack engineer", 250000, 4),
       ("Accountant", 150000, 2),
       ("Customer Service Operator", 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tupik", 3, 2),
        ("Kunal", "Shah", 5, null),
        ("Sarah", "Lord", 7, 6),
        ("Mike", "Chann", 2, 8),
        ("Ashley", "Rodriguez", 4, null),
        ("John", "Doe", 1, null),
        ("Tom", "Allen", 8, 5),
        ("Malia", "Brown", 6, null);