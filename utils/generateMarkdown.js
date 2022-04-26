// generate markdown for README
function generateMarkdown(data) {
  // create outline for README file
  var readme = `
  
  # ${data.title}
  </br>
  <p align="center">
    <img src="https://img.shields.io/github/languages/count/${
      data.authorGithub
    }/${data.repoName}?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/${
      data.authorGithub
    }/${data.repoName}?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/${
      data.authorGithub
    }/${data.repoName}?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/${data.authorGithub}/${
    data.repoName
  }?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/${data.authorGithub}/${
    data.repoName
  }?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/${
      data.authorGithub
    }/${data.repoName}/inquirer?style=for-the-badge" alt="Inquirer Version" />
    <img src="https://img.shields.io/github/last-commit/${data.authorGithub}/${
    data.repoName
  }?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/${data.authorGithub}/${
    data.repoName
  }?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/${
      data.authorGithub
    }?style=social" alt="Followers" />  
  </p>
  ## Description 
  
  ${data.description}
  
  ## Table of Contents
    
  * [Installation](#installation)
  * [Screenshots](#screenshots)
  * [Credits](#credits)
  * [License](#license)
  
  ${installation(data.installation)}
  
  ${screenshot(data.screenshot)}
  
  ## Credits
  
  ### Author
  - ${data.authorName}
  - :octocat: Github: [${data.authorGithub}](https://www.github.com/${
    data.authorGithub
  })
  - LinkedIn [${data.authorLinkedIn}](https://www.linkedin.com/in/${
    data.authorLinkedIn
  }/)
${builtWith(data.toolList)}
${license(data.license)}
  
`;

  return readme;
}

function installation(installation) {
  if (installation) {
    var commands = installation.split(",");
    commands.forEach((c, index) => (commands[index] = commands[index].trim()));
    return `
  ## Installation
  Follow these commands to run the command line application:  
      
    ${commands.join(`
    `)}`;
  } else return ``;
}

function builtWith(tools) {
  if (tools) {
    tools = tools.split(",");
    let res = `
  ### Built With
  </br>
  <p align="center">
  `;

    tools.forEach((tool) => {
      res += `<img src="https://img.shields.io/badge/-${tool}-orange?style=for-the-badge"  alt="${tool}" />
      `;
    });

    res += `
  </p>
  `;

    return res;
  } else {
    return ``;
  }
}

function screenshot(screenshot) {
  if (screenshot) {
    return `
  ## Screenshot
  ![Site](assets/images/${screenshot})
    `;
  } else {
    return ``;
  }
}

// add license badges
function license(license) {
  if (license) {
    let licenseBadges = [
      "- free license",
      {
        href: "#",
        src: "https://img.shields.io/badge/-Free_License-orange?style=for-the-badge",
        alt: "Free License",
      },
      {
        href: "https://www.gnu.org/licenses/gpl-3.0",
        src: "https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge",
        alt: "GNU General Public License",
      },
      {
        href: "https://opensource.org/licenses/MIT",
        src: "https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge",
        alt: "MIT License",
      },
      {
        href: "https://opensource.org/licenses/BSD-2-Clause",
        src: "https://img.shields.io/badge/License-BSD%202--Clause-orange?style=for-the-badge",
        alt: 'BSD 2-Clause "Simplified" License',
      },
      {
        href: "https://www.boost.org/LICENSE_1_0.txt)",
        src: "https://img.shields.io/badge/License-Boost%201.0-lightblue?style=for-the-badge",
        alt: "Boost Software License 1.0 License",
      },
      {
        href: "http://creativecommons.org/publicdomain/zero/1.0/)",
        src: "https://img.shields.io/badge/License-CC0%201.0-lightgrey?style=for-the-badge",
        alt: "Creative Commons Zero v1.0 Universal License",
      },
      {
        href: "https://opensource.org/licenses/EPL-1.0)",
        src: "https://img.shields.io/badge/License-EPL%201.0-red?style=for-the-badge",
        alt: "Eclipse Public License",
      },
      {
        href: "https://opensource.org/licenses/MPL-2.0",
        src: "https://img.shields.io/badge/License-MPL%202.0-brightgreen?style=for-the-badge",
        alt: "Mozilla Public License",
      },
      {
        href: "http://unlicense.org/",
        src: "https://img.shields.io/badge/license-Unlicense-blue?style=for-the-badge",
        alt: "The Unlicense License",
      },
      {
        href: "#",
        src: "https://img.shields.io/badge/-Other_License-orange?style=for-the-badge",
        alt: "Other License",
      },
    ];

    // put license back into the README file
    return `
    ## License
    </br>
    <p align="center">
        <a href='${licenseBadges[license].href}'><img src='${licenseBadges[license].src}'  alt='${licenseBadges[license].alt}' /></a>
    </p>
    `;
  }
}

module.exports = generateMarkdown;
