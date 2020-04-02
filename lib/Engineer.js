// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//add github // GitHub username, getGithub(), getRole() // Overridden to return 'Engineer'


const Employee = require("../lib/Employee");

module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
      
        
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
} 
