"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let generatenum = Math.random() * 10;
console.log(generatenum);
const answer = await inquirer_1.default.prompt([{
        type: "number",
        name: "user guess",
        message: "guess number between 1 to 10",
    }]);
const userguess = generatenum;
if (userguess === generatenum) {
    console.log("correct \n you win");
}
else {
    console.log("try again");
}
