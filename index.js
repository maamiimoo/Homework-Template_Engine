// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");

// const inquirer = require("inquirer");
// const fs = require("fs");
// const path = require("path");
// const util = require("util");
// const ejs = require("ejs");  

// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// ​
// const render = require("./lib/htmlRenderer");

// const writeFileAsync = util.promisify(fs.writeFile);

//store generated employees with corresponding HTML in teamHTML  writeFileAsync("./output/team.html", html)
// create aysnc function runs questions
// create questions (for employee, intern, and manager -user should only have those choices--)
// push generated employees to teamHTML array, 
// create html for each employee by role, prompt questions to user (for loop, use switch statement)
//need function pushTeamHTML 
// stringifys teamHTML



const inquirer = require("inquirer");

const Main = require('lib/index.js');

const program = new Main()


module.exports = class Main {
    constructor () {
    this.teamArray = [];
}

    async run() {
        const response = await inquirer.prompt ([ {
        type: "input",
        message: "Enter your employee's name",
        name: "name",
        }]);
        console.log(response);

        for (i = 0; i < length; i++) {
           const response = await inquirer.prompt ([ 
               {
                   type: "list",
                   name: "role",
                   message: "Type your employee's role?",
                   choices: [
                       "Engineer",
                       "Manager",
                       "Intern",
                   ]
               }
            ]);
            this.teamArray.push(response);
        }
        console.log(this.teamArray);
    }

}


program.run();