// Add required modules, and link for usage
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fileName = "README.md"


// Inquirer list of questions to be output to console.
const questions = [{
    type: 'input',
    name: 'gitName',
    message: 'What is your Github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'projName',
    message: "What is your project's name?"
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: [
        'MIT',
        'Apache 2.0',
        'GPL 3.0',
        'BSD 3',
        'None'
    ]
},
{
    type: 'input',
    name: 'dependCom',
    message: 'What command should be run to run dependencies?',
    default: 'npm i'
},
{
    type: 'input',
    name: 'testCom',
    message: 'What command should be run to run tests?',
    default: 'npm test'
},
{
    type: 'input',
    name: 'infoRepo',
    message: 'What does the user need to know about using the project?'
},
{
    type: 'input',
    name: 'contribRepo',
    message: 'What does the user need to know about contributing to the project?'
}
];

// Function to render README.md file in current directory
function writeToFile(name, data) {
    fs.writeFile(name, data,
        (err) => (err) ? console.log(`NoNo ${err}`):'');
}


// Function to initialise the app. 
// Runs inquirer questions, then runs function on linked page to get licence information.
// Then runs function to Render the README.md file. 
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
            const pageWritten = generateMarkdown.generateMarkdown(answers);
            writeToFile(fileName, pageWritten);
        })
        .catch((error) => {
            (error) ? console.log(`BAD!! ${error}`) : console.log("All Good")
        });
}

// Function call to initialize app
init();
