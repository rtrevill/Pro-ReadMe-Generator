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
function renderLicenseLink(license) {
  let licLink = ""
  if (license !== 'None'){
    (license === 'MIT') ? licLink = "https://opensource.org/license/mit/" :
    (license === 'Apache 2.0') ? licLink = "https://www.apache.org/licenses/LICENSE-2.0" :
    (license === 'GPL 3.0') ? licLink = "https://www.gnu.org/licenses/gpl-3.0.en.html" :
    licLink = "https://opensource.org/license/bsd-3-clause/";
    return licLink;
  }
  else {
    return licLink;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";
  if (license !== 'None'){
    licenseText = `This project is licensed under the ${license} license.`
    return licenseText;
  }
  else {
    return licenseText;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({gitName, license, badge, licSect, licenseLink}) {
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
  ${licSect}  
  For more information on this license, please click the link below:  
  ${licenseLink} 

  ## Contributing
  ## Tests
  ## Questions
  
  `,
  (err) => {
    (err) ? console.log(`NoNo ${err}`) : console.log(`All Good`)});

  return `# ${data.title}`
}

module.exports ={ generateMarkdown,
                  renderLicenseBadge,
                  renderLicenseSection,
                  renderLicenseLink
};
// module.exports = renderLicenseBadge;
