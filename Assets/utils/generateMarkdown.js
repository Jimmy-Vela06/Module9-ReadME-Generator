const inquirer = require("inquirer");
const fs = require("fs");

const index = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "(https://choosealicense.com/licenses/mit/#)";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseAnswer = "";
  if (license === "None") {
    licenseAnswer = "";
  } else {
    `License: ${license}`;
  }
  return licenseAnswer;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ---
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ---
  ##  **Table of Contents:**
  ### [Description](#description)
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributing](#contributing)
  ### [Tests](#tests)
  ### [License](#license)
  ### [Questions](#questions)
  ### [Images](#images)
  ---
  ## **Description:**
  ${data.description}
  ---
  ## **Installation:**
  You must install the following for this application to function:
  ${data.installation}
  ---
  ## **Usage:**
  ${data.usage}
  ---
  ## **Contributing:**
  ${data.contributing}
  ---
  ## **Tests:**
  Run the following commands in your terminal to test this application:
  ${data.tests}
  ---
  ## **License:**
  ### ${data.license}
  ${renderLicenseLink(data.license)}
  ---
  ## **Questions:**
  If you have any contacat the following
  GitHub: <https://github.com/${data.username}>
  Email: <${data.email}>
  ---
  ## **Images:**
`;
}

module.exports = generateMarkdown;
