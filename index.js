const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6Pointer!',
    database: 'employee_tracker'
  });


  connection.connect(function(err) {
      console.log('errr connectiong!!!', err)
    greeting();
  }
  )

// message for user to select appropriate action

const options = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View all employees by department', 'Add employee','Add department', 'Update employee role', 'View all roles', 'Add role']
        }
    ])
};

//start message for beginning of run

const greeting = () => {
    console.table( `WELCOME TO EMPLOYEE TRACKER`);
    init();
};





function init() {
    options().then(data => {
        console.log("are we working?", data);

        if (data.action === 'View All Employees'){
            viewAllEmployees();
        }

        if (data.action === 'View all employees by department'){
            viewAllEmployeesByDepartment();
        }

        if (data.action === 'Add department'){
            viewAddDepartment();
        }

        if(data.action === 'Add employee'){
            viewAddEmployee();
        }

        if(data.action === 'Add role'){
            viewAddRole();
        }

        if(data.action === 'Update employee role'){
            viewUpdateEmployee();
        }

    })
};

function viewAllEmployees() {
    console.log("about to view all employees");
    connection.query('SELECT * FROM employees', function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
    );
}

function viewAllEmployeesByDepartment() {
    console.log("about to view all employees by department");
    connection.query('SELECT * FROM departments', function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
    );
}

function viewAddDepartment() {
    console.log("about to add new department");
    inquirer.prompt([{
        name:'department',
        type:'input',
        message:'Whats the departments name',

    }]).then(data =>{
        connection.query('INSERT INTO departments (name) VALUES(?)',[data.department], function(err, results, fields) {
            console.log(results); // results contains rows returned by server
          }
      );
    })
   
}


function viewAddEmployee() {
    console.log("about to view all employees");
    inquirer.prompt([
        {
        name:'first_name',
        type:'input',
        message:'Whats the employees first name',
        },
        {
        name: "last_name",
        type: 'input',
        message: 'What is the employees last name?',
        },
        {
        name: 'role_id',
        type: 'input',
        message: 'Role ID Number',
        },
        {
        name: 'manager_id',
        type: 'input',
        message: "If the employee has a manager, what is their ID number?"
        }
    ]).then(data =>{
        connection.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)',[data.firstName, data.lastName, data.id, data.managerID], function(err, results, fields) {
            console.log(results); // results contains rows returned by server
          }
      );
    })
   
}

function viewAddRole() {
    console.log("about to add new role");
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Title of role:'

        },
        {
            name: 'salary',
            type: 'input',
            message: 'Salary of role:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Department ID Number'
            
        }
    
    
    ]).then(data =>{
        connection.query('INSERT INTO role (title, salary, department_id) VALUES(?, ?, ?)',[data.title, data.salary, data.department_id], function(err, results, fields) {
            console.log(results); // results contains rows returned by server
          }
      );
    })
   
}

function viewUpdateEmployee() {
    console.log("about to update new employee");
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the first name of the employee you wish to update:'
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter the fole id you wish the employee to have.'
        }
]).then(data =>{
        connection.query('UPDATE employee SET role_id = ?',[data.id, data.name], function(err, results, fields) {
            console.log(results); // results contains rows returned by server
          }
      );
    })
   
}


