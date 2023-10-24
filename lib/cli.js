import inquirer from 'inquirer';
// const inquirer = require('inquirer');
const fs = require('fs');
const {createDocument} = require('./renderlogo');

class CLI {
    constructor() {
        this.logo = [];
    }

    run() {
        return inquirer
        .prompt(
        {
            type: 'input',
            name: 'characters',
            message: 'Enter up to 3 characters',
            validate: function (input) {
                const isValid = input.length <= 3;
                if (!isValid) {
                    return 'Please enter up to 3 characters';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter color keyword or Hex',
            validate: function(input) {
                const isColorKeyword = /^(red|green|blue|yellow|orange|purple)$/i.test(input.toLowerCase());
                const isHexCode = /^#?([0-9A-F]{3}){1,2}$/i.test(input);
                if (isColorKeyword || isHexCode) {
                    return true;
                }
                return 'Please enter a valid color keyword or Hex code.';
            }
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Enter shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'setColor',
            message: 'Enter color keyword or Hex',
            validate: function(input) {
                const isColorKeyword = /^(red|green|blue|yellow|orange|purple)$/i.test(input.toLowerCase());
                const isHexCode = /^#?([0-9A-F]{3}){1,2}$/i.test(input);
                if (isColorKeyword || isHexCode) {
                    return true;
                }
                return 'Please enter a valid color keyword or Hex code.';
            }
        })
        .then(data => {
            this.logo = {
                characters: data.characters,
                textColor: data.textColor,
                shape: data.shape,
                setColor: data.setColor,
            }
            console.log("User Input:" + this.logo);
            const svgLogo = createDocument(this.logo);

            fs.writeFile('logo.svg', svgLogo, (err) => {
                if (err) {
                    console.error('Error writing svg file:', err);
                } else {
                    console.log('Success!');
                }
            })
        })
    }
    
}

module.exports = CLI;

