var inquirer = require("inquirer");
var fs = require("fs");

/* Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions */

const installationtxt = "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.";
const usagetxt = "Provide instructions and examples for use.";
const creditstxt = "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.";
const licensetxt = "If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)";
const contributingtxt = "Contributors?";
const teststxt = "Tests?";
const questionstxt = "Enter github username and email";


// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Description?",
        name: "description"
    },
    {
        type: "input",
        message: installationtxt,
        name: "installation"
    },
    {
        type: "input",
        message: usagetxt,
        name: "usage"
    },
    {
        type: "input",
        message: creditstxt,
        name: "credits"
    },
    {
        type: "input",
        message: licensetxt,
        name: "license"
    },
    {
        type: "input",
        message: contributingtxt,
        name: "contributing"
    },
    {
        type: "input",
        message: teststxt,
        name: "tests"
    },
    {
        type: "input",
        message: questionstxt,
        name: "questions"
    },

];

// function to write README file
function writeToFile(data) {
    var string = JSON.stringify(data);
    fs.appendFile("README.md", string, function (err) {
        if (err) throw err;
        
      });
    fs.appendFile("README.md", "\n"+"\n", function(){});
}

// function to initialize program
async function init() {
    fs.writeFile("README.md", '', function(){});
    for(let i = 0; i<questions.length; i++){
        var response = await inquirer.prompt(questions[i]);
        writeToFile(response);
    }
    
}

// function call to initialize program
init();
