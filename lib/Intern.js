const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return [this.name, this.id, this.email, this.school]
    }

    html(){
        return `
        <div class = "employee">
            <div class = "title">
                <h2>${this.name}</h2>
                <h3>Intern</h3>
                <img src="./Icons/intern.png">
            </div>
            <div class = "inputBox">
                <div>ID: ${this.id}</div>
                <div>Email: <a href="mailto:${this.email}">${this.email}</a></div>
                <div>School: ${this.school}</div>
            </div>
        </div>
        `
    }
}

module.exports = Intern