var fs = require('fs');
var readline = require('readline-sync');
var inquirer = require('inquirer');

var stream = fs.createWriteStream("index.html");
    stream.once('open', function (fd) {
        stream.write('<!DOCTYPE html> \n <html lang="en"> \n <head> \n <meta charset="UTF-8"> \n <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <title>Document</title> \n </head> \n <body>');

// const employees = parseInt(readline.question("Enter number of employees: "));
// console.log(employees);

function getInfo() {

    console.log("test");

    const questions = [
        "Enter your name: ",
        "Enter your role: ",
        "Enter your ID number: ",
        "Enter your Email address: ",
        "Enter your GitHub username: "
    ];

    let answers = [
    ];

    for (i = 0; i < questions.length; i++) {
        answers.push(readline.question(questions[i]));
    }

        stream.write('<div>' + answers[0] + '</div> \n <div>' + answers[1] + '</div> \n <div>');
        stream.write('ID: ' + answers[2] + '</div> \n <div>')
        stream.write('Email: ' + answers[3] + '</div> \n <div>');
        stream.write('GitHub: ' + answers[4] + '</div> \n <div> \n');

}

getInfo();
getInfo();
getInfo();

        stream.write('</body> \n </html>');
        stream.end();
    });

function init() {
}

init();
