import  readlineSync from 'readline-sync';

function getUserInput(question: string): string {
    return readlineSync.question(question + ' ');
}

function startGame() {
    console.log('Welcome to the Adventure Game!\n');

    const playerName = getUserInput('What is your name?');
    console.log(`Hello, ${playerName}!\n`);

    console.log('You find yourself in a dark forest...');
    const choice = getUserInput('Do you go left or right? (left/right)');

    if (choice === 'left') {
        console.log('You encounter a wild animal! You manage to scare it away.');
    } else if (choice === 'right') {
        console.log(`${playerName},you find a way out`);
    } else {
        console.log('Invalid choice. Please try again.');
    }
}

// Start the game
startGame();
