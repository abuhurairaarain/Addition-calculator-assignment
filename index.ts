import inquirer from "inquirer"

let answer = await inquirer.prompt([
    {
        name: 'fNumber',
        type: 'number',
        message: 'Enter your first number'
    },
    {
        name: 'sNumber',
        type: 'number',
        message: 'Enter your second number'
    }
]);
let result: number = answer.fNumber + answer.sNumber;
console.log(result);
