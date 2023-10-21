#!/usr/bin/env node
import inquirer from "inquirer";
let Ammount;
let condition = true;
const EnterAmmount = async () => {
    const EnterAmmount = await inquirer.prompt([
        {
            name: "enterAmm",
            type: "number",
            message: "Enter Your Ammount: ",
        },
    ]);
    Ammount = EnterAmmount.enterAmm;
};
const PkrTo = async () => {
    const CurrencySelect = await inquirer.prompt({
        name: "currSelect",
        type: "list",
        message: "Select Currency to Convert into: ",
        choices: ["Dollar", "Pounds", "Exit"],
    });
    switch (CurrencySelect.currSelect) {
        case "Dollar":
            await PkrToDollar();
            break;
        case "Pounds":
            await PkrToPounds();
            break;
        case "Exit":
            condition = false;
            break;
    }
};
const DollarTo = async () => {
    const CurrencySelect = await inquirer.prompt({
        name: "currSelect",
        type: "list",
        message: "Select Currency to Convert into: ",
        choices: ["Pkr", "Pounds", "Exit"],
    });
    switch (CurrencySelect.currSelect) {
        case "Pkr":
            await DollarToPkr();
            break;
        case "Pounds":
            await DollarToPounds();
            break;
        case "Exit":
            condition = false;
            break;
    }
};
const PoundTo = async () => {
    const CurrencySelect = await inquirer.prompt({
        name: "currSelect",
        type: "list",
        message: "Select Currency to Convert into: ",
        choices: ["Pkr", "Dollar", "Exit"],
    });
    switch (CurrencySelect.currSelect) {
        case "Pkr":
            await PoundsToPkr();
            break;
        case "Dollar":
            await PoundsToDollar();
            break;
        case "Exit":
            condition = false;
            break;
    }
};
const PkrToDollar = () => {
    console.log("Your Ammount After Convertion Will be: ", Ammount * 0.00328);
};
const PkrToPounds = () => {
    console.log("Your Ammount After Convertion Will be: ", Ammount * 0.002632);
};
const DollarToPkr = () => {
    console.log("Your Ammount After Convertion Will be: ", Ammount * 306);
};
const DollarToPounds = () => {
    console.log("Your Ammount After Convertion Will be: ", Ammount * 0.81);
};
const PoundsToPkr = () => {
    console.log("Your Ammount After Convertion Will be: ", Ammount * 380);
};
const PoundsToDollar = () => {
    console.log("Your Ammount After Convertion Will be: ", Ammount * 1.25);
};
const CurrencySelect = async () => {
    const CurrencySelect = await inquirer.prompt({
        name: "currSelect",
        type: "list",
        message: "Select Your Currency: ",
        choices: ["Pkr", "Dollar", "Pounds", "Exit"],
    });
    await EnterAmmount();
    switch (CurrencySelect.currSelect) {
        case "Pkr":
            await PkrTo();
            break;
        case "Dollar":
            await DollarTo();
            break;
        case "Pounds":
            await PoundTo();
            break;
        case "Exit":
            condition = false;
            break;
    }
};
const Countinue = async () => {
    const Countinue = await inquirer.prompt({
        name: "counti",
        type: "list",
        message: "Do You Want to Countinue",
        choices: ["Yes", "Exit"],
    });
    switch (Countinue.counti) {
        case "Yes":
            condition = true;
            break;
        case "Exit":
            condition = false;
            break;
    }
};
const start = async () => {
    while (condition) {
        await CurrencySelect();
        await Countinue();
    }
};
start();
