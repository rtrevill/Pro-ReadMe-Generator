const fs = require('fs'); 
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licBadge = "";
  if (license !== 'None'){
  const noGaps = license.replace(" ", "%20");
  licBadge = `![Static Badge](https://img.shields.io/badge/license-${noGaps}-blue)`;
  console.log(licBadge)
  return licBadge;
  }
  else 
  licBadge = "";
  return licBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({gitName, license, badge}) {
fs.writeFile("redMaa.md",
  `# Title  
  Welcome to my project  

  ${badge}
  ## Description
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Questions
  
  `,
  (err) => {
    (err) ? console.log(`NoNo ${err}`) : console.log(`All Good`)});

  return `# ${data.title}`
}

module.exports ={ generateMarkdown,
                  renderLicenseBadge
};
// module.exports = renderLicenseBadge;
