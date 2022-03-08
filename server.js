const inquirer=require('inquirer')
const cases = require('./tools/case')
// Import and require mysql2
// require('dotenv').config();



const startQuestions =   {
    type: 'list',
    name: 'role',
    message: `Do you want to add another member to your dream team?`,
    choices: [`View all departments`,`View all roles`,`View all employees`,`Add a department`,`Add a role`,`Add an employee`,`Update an employee role`]
};

const whatTodo= async function () {
  const ans = await inquirer.prompt(startQuestions)  
  switch (ans.role) {
    case `View all departments`:
      cases.viewTable('departments');
      break;

    case `View all roles`:
      cases.viewTable('role');
      break;

    case `View all employees`:
      cases.viewTable('employee');
      break;

    case `Add a department`:
      addDepartment();
      break;

    // case `Add a role`:
    //   addRole();
    //   break;

    // case `Add an employee`:
    //   addEmployee();
    //   break;

    // case `Update an employee role`:
    //   updateRole();
    //   break;
  }
};

const init = function() {
    whatTodo();
}

init()

  