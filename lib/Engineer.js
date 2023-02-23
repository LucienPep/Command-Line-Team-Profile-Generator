const Employee = require("./Employee");
//class for engineer extending employee gets inputted data and uses it from employee and engineer details and adds data into html string and exports final result.
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return [this.name, this.id, this.email, this.github]
    }

    html(){
        return `
        <div class = "employee">
            <div class = "title">
                <h2>${this.name}</h2>
                <h3>Engineer</h3>
                <img src="./Icons/engineer.png">
            </div>
            <div class = "inputBox">
                <div>ID: ${this.id}</div>
                <div>Email: <a href="mailto:${this.email}">${this.email}</a></div>
                <div>GitHub: <a href="https://github.com/${this.github}">${this.github}</a></div>
            </div>
        </div>
        `
    }
}

module.exports = Engineer