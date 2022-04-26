// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// Array of questions for user input for README file
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the project title?",
    },
    {
        type: "input",
        name: "authorGithub",
        message: "What's your github username?",
    },
    {
        type: "input",
        name: "repoName",
        message: "What's the name of the github repository?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a small description of the project",
    },
    {
        type: 'checkbox',
        name: 'sections',
        message: 'Select which sections to add',
        choices: [
            new inquirer.Separator(' = Choose a Sections = '),
            { name: 'installation' },
            { name: 'screenshots' },
            { name: 'tool list' },
            { name: 'license'}
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Input any installation commands separated by a comma",
        when: (data) => (data.sections.indexOf("installation") >= 0)
    },
    {
        type: "input",
        name: "authorName",
        message: "What's the name of the author?",
    },
    {
        type: "input",
        name: "authorLinkedIn",
        message: "What's your LinkedIn username?",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Enter screenshot file name:",
        when: (data) => (data.sections.indexOf("screenshots") >= 0)
    },
    {
        type: "input",
        name: "toolList",
        message: "Enter tools used separated by a comma (no spaces)",
        default: "",
        when: (data) => (data.sections.indexOf("tool list") >= 0)
    },

    {
        type: 'list',
        message: 'Please select type of License ',
        name: 'license',
        choices: [
            {
                name: 'None',
                value: 0
            },
            {
                name: 'GNU General Public',
                value: 1
            },
            {
                name: 'MIT',
                value: 2
            },
            {
                name: 'BSD 2-Clause "Simplified" License',
                value: 3
            },
            {
                name: 'Boost Software License 1.0',
                value: 4
            },
            {
                name: 'Creative Commons Zero v1.0 Universal',
                value: 5
            },
            {
                name: 'Eclipse Public License',
                value: 6
            },
            {
                name: 'Mozilla Public License',
                value: 7
            },
            {
                name: 'The Unlicense',
                value: 8
            },
            {
                name: 'Other',
                value: 9
            },

        ],
        when: (data) => (data.sections.indexOf("license") >= 0)

    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log("Created readme successfully");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("SampleREADME.md", generateMarkdown(answers));

    });
}

// Function call to initialize app
init();
