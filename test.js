const inquirer = require('inquirer')
// const cases = require('./tools/case')

// async/await awesomeness
async function main() {
    const getAccount = await inquirer.prompt({
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
          'View utilized budget by department',
          'Update employee manager',
          'View employees by manager',
          'View employees by department',
          'Delete a department, role or employee',
          'Quit',]
      })
}
main()
