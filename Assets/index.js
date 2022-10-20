// // TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// // TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a project description.",
  },
  {
    type: "input",
    name: "installation",
    message: "What must user install to run this app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How is this application used?",
  },
  {
    type: "list",
    name: "license",
    message: "What license will this project use?",
    choices: ["Apache 2.0", "MIT", "GPL v3.0", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the cotributors to this project",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you Test this project?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub usernaem?",
  },
  {
    type: "input",
    name: "email",
    message:
      "What is your email so there is another way to be reached for questions?",
  },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("GREAT SUCCESS 👍 - BORAT VOICE");
    }
  });
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// // Function call to initialize app
init();
