// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'gitName',
    message: 'What is your Github username?'
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your portfolio have?',
    choices: [
        'MIT',
        'Apache 2.0',
        'GPL 3.0',
        'BSD 3',
        'None'
    ]
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const badge = generateMarkdown.renderLicenseBadge(answers.license);
            answers.badge = badge;
            const licSect = generateMarkdown.renderLicenseSection(answers.license);
            answers.licSect = licSect;
            const licenseLink = generateMarkdown.renderLicenseLink(answers.license);
            answers.licenseLink = licenseLink;
            console.log(answers);
            generateMarkdown.generateMarkdown(answers)
        })
        .catch((error) => {
            (error) ? console.log(`BAD!! ${error}`) : console.log("All Good")
        });
}

// Function call to initialize app
init();
