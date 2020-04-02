// TODO: Write code to define and export the Employee class
//name, id, title, getName(), get Id, get Emaol () get Role() and returns employee. 

const inquirer = require("inquirer");


module.exports = class  Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
        
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;   

    }

    getEmail(){
        return this.email;
    }

    getTitlle(){
        return this.title;
    }

    getRole(){
        return this.constructor.name;
    }

  

} 