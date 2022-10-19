// // TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// // TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please provide a project description.",
  },
  {
    type: "input",
    name: "What must user install to run this app?",
    message: "Installation",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is this application used?",
  },
  {
    type: "checkbox",
    name: "License",
    message: "What license will this project use?",
    choices: ["Apache 2.0", "MIT", "GPL v3.0", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who are the cotributors to this project",
  },
  {
    type: "input",
    name: "Tests",
    message: "How do you Test this project?",
  },
  {
    type: "input",
    name: "Username",
    message: "What is your GitHub usernaem?",
  },
  {
    type: "input",
    name: "Email",
    message:
      "What is your email so there is another way to be reached for questions?",
  },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, response) {
  fs.writeFile(fileName, response, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("GREAT SUCCESS 👍 - BORAT VOICE");
    }
  });
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (response) {
    writeToFile("README.md", generateMarkdown(response));
    console.log(response);
  });
}

// // Function call to initialize app
init();
