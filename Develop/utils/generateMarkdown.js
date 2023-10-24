// Function to create and return a license badge from the nominated license.
function renderLicenseBadge(license) {
  let licBadge = "";
  if (license !== 'None'){
    const noGaps = license.replace(" ", "%20");
    licBadge = `![Static Badge](https://img.shields.io/badge/license-${noGaps}-blue)`;
    return licBadge;
  }
  else 
    licBadge = "";
    return licBadge;
}

// Function to assign a link for the nominated license
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

// Function to return text in the license section.
function renderLicenseSection(license) {
  let licenseText = "";
  if (license !== 'None'){
    licenseText = `This project is licensed under the ${license} license.   
    For more information on this license, please click the link below:`
    return licenseText;
  }
  else {
    licenseText = 'No license has been nominated for this project'
    return licenseText;
  }

}

// Function to create README.md page and then return completed page
function generateMarkdown({gitName, email, projName, description, license, dependCom, testCom, infoRepo, contribRepo, badge, licSect, licenseLink}) {
const finishedPage = `# ${projName}   

  ${badge}
  ## Description  
  ${description}   
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation   
  To install the necessary dependencies, run the following command   
  \`${dependCom}\`

  ## Usage   
  When using the repository: ${infoRepo}
  ## License  
  ${licSect}  
    
  ${licenseLink} 

  ## Contributing      
  If you would like to contribute: ${contribRepo}     
  ## Tests   
  To run tests, please run the following:   
  \`${testCom}\`   
  ## Questions   
  If you have any questions, you can contact me directly at ${email}, or alternatively through [gitHub:](https://github.com/${gitName})
  `
  return finishedPage;
}

// Command to allow access of functions from other page.
module.exports ={ generateMarkdown,
                  renderLicenseBadge,
                  renderLicenseSection,
                  renderLicenseLink
};
