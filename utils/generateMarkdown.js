// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else{
    return `![GitHub license]{https://img.shields.io/badge/license-${license}-blue.svg}`
  }
    // Add more licenses here if needed
  };

function renderQuestions (questions) {
  if (!questions) {
    return ""
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license) { 
  return '';
} else {
  return ` - [License](#license)`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ""
  } else {
    return `## License

    This project has a ${license}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license)
  return `
# ${data.title}

## Description
${data.description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.licnese)}

## Installation
${data.installation}

${licenseSection}
${renderLicenseBadge(data.license)}



https://github.com/${data.github}
  `;
}

module.exports = generateMarkdown;
