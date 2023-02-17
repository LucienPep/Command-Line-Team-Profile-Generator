const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var managerStatus = ''
var engineerStatus = ''
var internStatus = ''
var manDetails = ''
var engDetails = ''
var intDetails = ''
var engineerTotal = 0
var internTotal = 0
var people = []

const employeeQuestions = {
    name: 'Name - ',
    id: 'Employee ID - ',
    email: 'Email - ', 
}

function manager(){
    console.log('Add Manager Details')

    managerStatus = true

    employee() 
}

function employee(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: employeeQuestions.name,
            name: 'name',
        },
        {
            type: 'input',
            message: employeeQuestions.id,
            name: 'id',
        },
        {
            type: 'input',
            message: employeeQuestions.email,
            name: 'email',
        },
    ])
    .then((response) => {
        var employeeResponse = response 
        if(managerStatus == true){
            managerStatus = false
            
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Office Number - ',
                    name: 'office',
                }
            ])
            .then((office) => {
                const managerDetails = {...employeeResponse, ...office}
                manDetails = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.office)
                newEmployee()
            })
        }
        if(engineerStatus == true){
            engineerStatus = false
            
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'GitHub Username - ',
                    name: 'github',
                }
            ])
            .then((github) => {
                const engineerDetails = {...employeeResponse, ...github}
                people.push(new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.github))
                newEmployee()
            })
        }
        if(internStatus == true){
            internStatus = false
            
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'School Name - ',
                    name: 'school',
                }
            ])
            .then((school) => {
                const internDetails = {...employeeResponse, ...school}
                people.push(new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school))

                newEmployee()
            })
        }
    })
}

function newEmployee() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Add Team Member',
            choices: ['Engineer', 'Intern', 'No More Members to Add'],
            name: 'member',
        }
    ])
    .then((response) => {
        if(response.member == 'Engineer'){
            engineerStatus = true
            employee()
        }
        if(response.member == 'Intern'){
            internStatus = true
            employee()
        }
        if(response.member == 'No More Members to Add'){
            final()
        }
    })
}

function final(){
    console.log(manDetails)
    console.log(people)
    
    //console.log(intDetails)
}






manager()