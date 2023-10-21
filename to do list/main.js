#! /usr/bin/env node 
import inquirer from 'inquirer';
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add into your todo list? "
        },
        {
            type: "confirm",
            name: "Addmore",
            message: "Do you want to add something more to your list? ",
            default: false
        }
    ]);
    const { TODO, Addmore } = answers;
    console.log(answers);
    loop = Addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly enter valid input!");
    }
}
if (todos.length > 0) {
    console.log("Your todo list: \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todo's found!");
}
