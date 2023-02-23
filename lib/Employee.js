//class for Employee data that all employees use
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole(){
        return [this.name, this.id, this.email]
    }
}

module.exports = Employee