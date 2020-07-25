var fs = require('fs');
var readline = require('readline-sync');
var inquirer = require('inquirer');

// array of questions for user
const questions = [
    "Enter your name: ",
    "Enter your role: ",
    "Enter your ID numer: ",
    "Enter your Email address: ",
    "Enter your GitHub username: "
];

const answers = [
];

for (i = 0; i < questions.length; i++) {
    answers.push(readline.question(questions[i]));
}

    var stream = fs.createWriteStream("index.html");
    stream.once('open', function (fd) {
        stream.write('<!DOCTYPE html> \n <html lang="en"> \n <head> \n <meta charset="UTF-8"> \n <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <title>Document</title> \n </head> \n <body>');
        stream.write('<div>' + answers[0] + '</div> \n <div>' + answers[1] + '</div> \n <div>');
        stream.write('ID: ' + answers[2] + '</div> \n <div>')
        stream.write('Email: ' + answers[3] + '</div> \n <div>');
        stream.write('GitHub: ' + answers[4] + '</div> \n <div>');
        stream.write('</body> \n </html>');
        stream.end();
    });

    // // function to initialize program
    function init() {
    }

    // // function call to initialize program
    init();
