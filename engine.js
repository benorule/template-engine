var fs = require('fs');
var inquirer = require('inquirer');

// create array like in server.js to push all the answers to
// do the streamline thing like in server.js to put all answers on html
// use forloop and i variable to format the info correct for example name will be every fourth thing in the array starting at 0

let answerArr = [
];

getInfo();

function getInfo() {

    inquirer
        .prompt([
            {
                name: 'employeeName',
                message: 'Enter the name of the employee: ',
            },
            {
                type: 'checkbox',
                name: 'employeeRole',
                message: 'Enter the role of the employee',
                choices: [
                    'Manager', 'Engineer', 'Intern',
                ],
            },
            {
                name: 'employeeID',
                message: 'Enter the ID number of the employee: ',
            },
            {
                name: 'employeeEmail',
                message: 'Enter the email address of the employee: ',
            },
        ])
        .then(answers => {
            answerArr.push(answers.employeeName);
            answerArr.push(answers.employeeRole);
            answerArr.push(answers.employeeID);
            answerArr.push(answers.employeeEmail);
            if (answers.employeeRole == "Intern") {
                inquirer
                    .prompt([
                        {
                            name: 'employeeSchool',
                            message: 'Enter the school of the intern: ',
                        },
                    ])
                    .then(answers => {
                        answerArr.push("School: " + answers.employeeSchool);
                        endOrContinue();
                    });
            }
            else if (answers.employeeRole == "Manager") {
                inquirer
                    .prompt([
                        {
                            name: 'employeeOffice',
                            message: 'Enter the office number of the manager: ',
                        },
                    ])
                    .then(answers => {
                        answerArr.push("Office: " + answers.employeeOffice);
                        endOrContinue();
                    });
            }
            else {
                inquirer
                    .prompt([
                        {
                            name: 'employeeGitHub',
                            message: 'Enter the GitHub username of the employee: ',
                        },
                    ])
                    .then(answers => {
                        answerArr.push("GitHub: " + answers.employeeGitHub);
                        endOrContinue();
                    });
            }
        });

}

function endOrContinue() {

    inquirer
        .prompt([
            {
                name: 'endProgram',
                message: "Continue inputting information? Y/n: ",
                type: "confirm",
            },
        ])
        .then(answers => {
            if (answers.endProgram == true) {
                getInfo();
            }
            else {
                writeInfo();
            }
        });
}

function writeInfo() {

    var stream = fs.createWriteStream("index.html");
    stream.once('open', function (fd) {
        stream.write('<!DOCTYPE html> \n <html lang="en"> \n <head> \n <meta charset="UTF-8"> \n <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <title>Document</title> \n <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> \n </head> \n <body>');
        for (var i = 0; i < answerArr.length; i = i + 5) {
            stream.write('<div class="card" style="width: 18rem;"> \n <div class="card-body"> \n')
            stream.write('<h5 class="card-title">' + answerArr[i] + ' (ID: ' + answerArr[i + 2] + ') </h5> \n'); 
            stream.write('<h6 class="card-subtitle mb-2 text-muted">' + answerArr[i + 1] + '</h6> \n');
            stream.write('<p class="card-text">' + answerArr[i + 4] + '</p> \n')
            stream.write('<a href="mailto: '+ answerArr[i + 3] + '" class="card-link"> Contact </a> \n');
            stream.write('</div> \n </div>')
        }
        stream.write('</body> \n </html>');
        stream.end();
    });
}