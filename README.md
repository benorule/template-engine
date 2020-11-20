# template-engine

Video of deployed application: https://drive.google.com/file/d/1q8Cs1GhTl3mSQsRmx-aFIBfJuFrBhWD_/view

## Table of Contents: 
 * [Description](#Description) 
* [Installation Instructions](#Installation-Instructions) 
* [Usage Information](#Usage-Information) 
* [Contribution Guidlines](#Contribution-Guidelines) 
* [Test Instructions](#Test-Instructions) 
* [Questions](#Questions) 
## Description 
A CLI application that allows employers to quickly organise information about their employees.
## Installation Instructions 
Download from GitHub by cloning the repository or downloading the zip file.
## Usage Information 
Type node engine.js in the command line to start the program and answer the prompts.
## Contribution Guidelines 
To contribute to this application please submit a pull request and make sure your commit accurately describes your contribution.
## Test Instructions 
Type node engine.js in the command line.
## Questions 
 * GitHub: https://github.com/benorule
* Email: benorule@outlook.com
* License: MIT

# Some information about the development process:

The functionality of this application revolves around one array and three interrelated functions. 

The function called getInfo is initally called at the start and prompts the end user with a series of questions, gathering information on a single employee. Based on the answer to the second question (role) the last question will be different. For managers it will ask the office number, for enginners it will ask the GitHub username, and for interns it will ask the school name. Once all prompts are answered the function endOrContinue is called which prompts the user with an option to enter information for another employee or not. Should the end user decide to continue the function getInfo will be called again and the process will repeat until the user decides not to continue which will call the third function writeInfo. In the function getInfo each answer is pushed to an empty variable called answerArr where it is stored. The function writeInfo takes this information and writes it onto an empty html page. Everything in the html page is dynamically created in the javascript file. Using a loop with an increment of 5 the writeInfo function formats the information in a Card using the bootstrap css framework. Before and after this loop there are write functions to add the necessary tags to make the html page function correctly - this includes the link to the bootstrap framework. The email of each employee is embedded into the html file such that when you click on the email hyperlink it opens an email addressed to that person. 
