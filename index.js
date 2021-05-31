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
        choices: ['View All Employees', 'View all employees by department', 'Add employee','Add department', 'Remove employee', 'Update employee role', 'View all roles', 'Add role', 'Remove role']
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
    inquirer.prompt([{
        name:'employee',
        type:'input',
        message:'Whats the employees name',

    }]).then(data =>{
        connection.query('INSERT INTO employees (name) VALUES(?)',[data.employees], function(err, results, fields) {
            console.log(results); // results contains rows returned by server
          }
      );
    })
   
}


