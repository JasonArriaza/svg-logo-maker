// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const SvgGenerator = require('./lib/svgGenerator');



// TODO: Create an array of questions for user input
const questions = [
    //objects of questions
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to have?',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What COLOR do you want the SHAPE to be?',
    },
    {
        type: 'input',
        name: 'letters',
        message: 'What THREE LETTERS do you want your logo to have?',
    },
    {
        type: 'input',
        name: 'lettersColor',
        message: 'What COLOR do you want the LETTERS to be?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const logoGenerator = new SvgGenerator(answers.letters, answers.lettersColor, answers.shape, answers.shapeColor);
            const logo = logoGenerator.generate();
            
            console.log(answers);

            writeToFile('logo.svg', logo);
        })
}
// Function call to initialize app
init();
