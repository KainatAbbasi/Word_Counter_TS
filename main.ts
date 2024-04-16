#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function counter() {
    const answers = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: chalk.magenta("Enter your sentence to count the word :")
        }
    ]);
    if (answers.Sentence.length === 0) {
        console.log(chalk.yellow("Please provide a sentence."));
    }
    const word = answers.Sentence.trim().split(" ");
    console.log(word);
    console.log(chalk.yellow(`Your Sentence Word Count Is :${word.length}`));
}
await counter();
(async function() {
    while (true) {
        const ask = await inquirer.prompt([
            {
                name: "question",
                type: "list",
                message: chalk.blue("Do You Want To Continue or Exit ?"),
                choices: ['Continue', 'Exit']
            }
        ]);
        if (ask.question === "Exit") {
            console.log(chalk.green("Goodbye!"));
            break;
        } else {
            await counter(); 
        }
    }
})();
