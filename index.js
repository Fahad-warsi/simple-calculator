#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Please Enter first Number : ",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Please Enter second Number : ",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Please select any off operator to perform action : ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiply", "Division"],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid operatore selected...");
}
