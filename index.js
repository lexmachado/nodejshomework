// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'what is your app about?',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What license will the project have?',
        name: 'license',
        choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', "No License"]
    },
       {
         type: 'input',
         message: 'What are the requirements to install dependencies?',
        name: 'installation',
   },
      {
        type: 'input',
        message: 'What does the user need to know to run the app?',
        name: 'usage',
       }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const README = generateMarkdown(data)
    fs.writeFile(fileName, README, (err) => 
    err ? console.log(err) : console.log('Success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (res) {
            writeToFile('README.md', res)
        })
}

// Function call to initialize app
 init(); 
