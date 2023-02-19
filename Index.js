const inquirer = require('inquirer');
var fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var managerStatus = ''
var engineerStatus = ''
var internStatus = ''
var employees = []
var html = []

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
                let managerSubmit = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.office)
                employees.push(managerSubmit)

                html.push(managerSubmit.html())

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
                let engineerSubmit =(new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.github))
                employees.push(engineerSubmit)

                html.push(engineerSubmit.html())

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
                let internSubmit = (new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school))
                employees.push(internSubmit)

                html.push(internSubmit.html())

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
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
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
        if(response.member == 'Finish Building Team'){
            final()
        }
    })
}

function final(){
    //console.log(html.join(''))
    //console.log(manDetails)
    //console.log(employees)
    var htmlContent = `<!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Team Profile</title>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <header>
                <h1>Team Profile</h1>
            </header>
            <div class = box> 
                ${html.join('')}
            </div>
        </body>
    </html>`;

    fs.writeFile('./dist/team.html', htmlContent, (err) => { 
        if(err){
            console.log(err)
        } 
    });
}






manager()