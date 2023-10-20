// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'gitName',
    message: 'What is your Github username?'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            generateMarkdown(answers);
            console.log(answers)})
        .catch((error) => {
            (error) ? console.log(`BAD!! ${error}`) : console.log("All Good")
        });
}

// Function call to initialize app
init();
