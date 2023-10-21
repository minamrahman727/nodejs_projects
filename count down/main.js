import inquirer from 'inquirer';
import chalk from 'chalk';
function startTimer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'minutes',
            message: 'Enter the number of minutes for the timer:'
        }
    ]).then(answers => {
        const minutes = parseInt(answers.minutes);
        if (isNaN(minutes) || minutes <= -1) {
            console.log(chalk.red('Please enter a valid positive number of minutes.'));
            startTimer();
        }
        else {
            let seconds = minutes * 60;
            const interval = setInterval(() => {
                seconds--;
                if (seconds <= 0) {
                    clearInterval(interval);
                    console.log(chalk.green('Time\'s up!'));
                    startTimer();
                }
                else {
                    console.clear();
                    console.log(chalk.yellow(`Time remaining: ${Math.floor(seconds / 60)} minutes ${seconds % 60} seconds`));
                }
            }, 1000);
        }
    });
}
startTimer();
