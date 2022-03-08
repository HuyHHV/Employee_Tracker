const inquirer=require('inquirer')

// create connection to databae
connection = async function () {
    const mysql = require('mysql2/promise');
    const db = await mysql.createConnection({
      host:'localhost',
      user: 'root',
      password: process.env.DB_PASSWORD, 
      database: 'employee_db'
    });
    return db
  }
connection()
const db=connection();

const departmentQ = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter the name of new department`,
    },
]

const roleQ = [
    {
        type: 'input',
        name: 'department',
        message: `Please enter a title of new role`,
    },
    {
        type: 'list',
        name: 'department',
        message: `Please select a department of the new role`,
    },

    {
        type: 'input',
        name: 'department',
        message: `Please enter salary of new role`,
    },
]

const employeeQ = [
    {
        type: 'input',
        name: 'department',
        message: `Please enter the first name of the new employee`,
    },
    {
        type: 'input',
        name: 'department',
        message: `Please enter the last name of the new employee`,
    },

    {
        type: 'list',
        name: 'department',
        message: `Please select the role of new employee`,
    },

    {
        type: 'list',
        name: 'department',
        message: `Please specify manager of new employee`,
    },

]

const askQuestion= async function (questions) {
    const ans = await inquirer.prompt(questions); 
    return ans;
  };

const viewTable = async function(table) {
    try {
        const result = await db.query(`SELECT * FROM ${table}`);
        console.table(result);
        whatTodo();
    } catch (err) {
        console.log(err);
    }
}

const addDepartment  = async function () {
    try {
        const ans = await inquirer.prompt(departmentQ); 
        const sql = `INSERT INTO department(name) VALUES ?`;
        const result = await db.query(sql,ans.name)  
        askQuestion(q);
    } 
    catch (err) {
        console.log(err);
    }
}



module.exports={viewTable,addDepartment}


  