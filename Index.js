//Requiring needed pages and npm methods
const inquirer = require('inquirer');
var fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//declaring variables
var managerStatus = ''
var engineerStatus = ''
var internStatus = ''
var employees = []
var html = []

//declares employee questions all inputs will use
const employeeQuestions = {
    name: 'Name - ',
    id: 'Employee ID - ',
    email: 'Email - ', 
}

//first function turns manager var to true and asks user to add manager details
function manager(){
    console.log('Add Manager Details')

    managerStatus = true

    employee() 
}

//starts by asking the employee questions all catagories use
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
    //then checks for true on any choice and asks users questions from that choice. then makes choice variable false for next use
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

//select next employee and turn variable value to true or finish selection
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

// create HTML document and add data from employee selections.
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
//start code with manager function
manager()