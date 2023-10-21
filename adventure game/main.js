"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function getUserInput(question) {
    return readline_sync_1.default.question(question + ' ');
}
function startGame() {
    console.log('Welcome to the Adventure Game!\n');
    const playerName = getUserInput('What is your name?');
    console.log(`Hello, ${playerName}!\n`);
    console.log('You find yourself in a dark forest...');
    const choice = getUserInput('Do you go left or right? (left/right)');
    if (choice === 'left') {
        console.log('You encounter a wild animal! You manage to scare it away.');
    }
    else if (choice === 'right') {
        console.log(`${playerName},you find a way out`);
    }
    else {
        console.log('Invalid choice. Please try again.');
    }
}
// Start the game
startGame();
