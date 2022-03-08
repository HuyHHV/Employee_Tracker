const inquirer=require('inquirer');

const whatTodo= async function () {
  const ans = await inquirer.prompt({
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update employee role',
      'Quit',]
  });  
  console.log(ans);
  const cases = require('./tools/case')
  switch (ans.option) {
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

    case `Add a role`:
      addRole();
      break;

    case `Add an employee`:
      addEmployee();
      break;

    case `Update an employee role`:
      updateRole();
      break;
  }
};
whatTodo()
  