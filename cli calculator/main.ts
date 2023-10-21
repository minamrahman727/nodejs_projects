#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first num: '
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second num: '
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the operator you want to perform:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]);

let result: number;

switch(answer.operator){
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("The answer for addition is: " + result);
        break;
    
    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer for subtraction is: " + result);
        break;

    case 'Multiply':
        result = answer.num1 * answer.num2;
        console.log("The answer for multiplication is: " + result);
        break;

    case 'Divide':
        result = answer.num1 / answer.num2;
        console.log(" The answer for division is: " + result);
        break;
}


