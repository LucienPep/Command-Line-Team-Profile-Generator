# Homework Week 10
## Command-Line-Team-Profile-Generator
 
I had to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for ach person.

### User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Table of Contents
1. [Acceptance Criteria](#acceptance-criteria)
2. [Work Description](#work-description)
3. [Link to Tutorial Video](#link-to-tutorial-video)
4. [Screenshot](#screenshot)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [Tests](#tests)
9. [License](#license)
10. [Questions](#questions)

### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

---
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Work Description
I first started by using inquirer prompts to ask about the manager details and extended that function to add engineer and intern details. I then created the classes the data from the inquirer prompt would be inputted too and created the HTML input. Next I created teh HTML document mock up and created the styling to look as intended and then wrote the function when the user was finished adding data the HTML would be over written and a new one generated with the data from all the user selected inputs. I then adding testing to check that all the class functions were working as intended and passed the data correctly. I finished by adding links to emails and github profiles in the HTML.

## Link to Tutorial Video
[Tutorial Video](https://drive.google.com/file/d/1-Vn89V1bIode-9_NfcontEMCew8dHPbT/view?usp=sharing)

### Screenshot

![Command Line Team Profile Generator](./Assets/Screenshot%2010.png)
 
### Installation

For this application Inqirer and Jest need to be installed. This can be done using the `require()` function.

### Usage

Inquirer is used for promts to ask the user and data collection of inputs. Jest is used to test functionality of classes used in the code.

### Contributing

No Contributions will be accepted.

### Tests

Example test for Manager.js. Use `npm test` in console to run test function.
```
describe('Manager', () => {
    describe('getRole', () => {
        it('should log inputed data as an array with office', () => {

            const result = new Manager('test','1','test@test.com', 'testOffice')

            expect(result).toEqual({"email": "test@test.com", "id": "1", "name": "test", "office": "testOffice"})
        })
    })
})
```

### License

The license I am using for my project is<br>[MIT](https://opensource.org/licenses/MIT)

### Questions

GitHub: [Lucienpep](https://github.com/Lucienpep)<br>

For any further questions contact me via:

Email: <xxyyzzoozz@gmail.com>

---
Lucien Haines UADL 2023
  
  