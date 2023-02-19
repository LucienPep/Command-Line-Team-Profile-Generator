const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    html(){
        return`
        <div class = "employee">
            <div class = "title">
                <h2>${this.name}</h2>
                <h3>Manager</h3>
                <img src="./Icons/manager.png">
            </div>
            <div class = "inputBox">
                <div>ID: ${this.id}</div>
                <div>Email: <a href="mailto:${this.email}">${this.email}</a></div>
                <div>Office: ${this.office}</div>
            </div>
        </div>
        `
    }

}



module.exports = Manager