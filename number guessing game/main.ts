#! /usr/bin/env node

import  inquirer from 'inquirer';
import chalk from 'chalk';

async function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;

    while (attempts > 0) {
        const answer = await inquirer.prompt([
            {
                type: 'number',
                name: 'guess',
                message: 'Guess a number between 1 and 10:',
            },
        ]);

        if (answer.guess === secretNumber) {
            console.log(chalk.green('Congrats, you won 10 points!'));
            return;
        } else {
            attempts--;
            console.log(chalk.red('Try again.'));
        }
    }

    console.log(chalk.yellowBright('You lost. Better luck next time!'));
}

guessNumber();
