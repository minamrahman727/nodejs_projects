import inquirer from 'inquirer';
import chalk from 'chalk';
const students = [];
function addStudent() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter student name:',
        },
        {
            type: 'number',
            name: 'age',
            message: 'Enter student age:',
        },
        {
            type: 'input',
            name: 'grade',
            message: 'Enter student grade:',
        },
    ])
        .then((answers) => {
        const newStudent = {
            name: answers.name,
            age: answers.age,
            grade: answers.grade,
        };
        students.push(newStudent);
        console.log(chalk.green('Student added successfully.\n'));
        showMainMenu();
    });
}
function viewStudents() {
    console.log(chalk.yellow('Student List:'));
    students.forEach((student, index) => {
        console.log(chalk.blue(`#${index + 1}: Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`));
    });
    console.log('');
    showMainMenu();
}
function showMainMenu() {
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Student Management System Menu:',
            choices: ['Add Student', 'View Students', 'Exit'],
        },
    ])
        .then((answers) => {
        switch (answers.choice) {
            case 'Add Student':
                addStudent();
                break;
            case 'View Students':
                viewStudents();
                break;
            case 'Exit':
                console.log(chalk.yellow('Exiting Student Management System. Goodbye!'));
                process.exit();
                break;
        }
    });
}
function startStudentManagementSystem() {
    console.log(chalk.yellow('Welcome to the Student Management System!'));
    showMainMenu();
}
// Start the student management system
startStudentManagementSystem();
