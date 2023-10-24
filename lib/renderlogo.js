const {Circle, Triangle, Square} = require('./shapes');
const CLI = require('./lib/cli');
const cli = new CLI();

function createDocument(userInput) {
    
    let selectedShape;
    if (userInput.shape === 'circle') {
        selectedShape = new Circle(userInput.setColor);
    } else if (userInput.shape === 'triangle') {
        selectedShape = new Triangle(userInput.setColor);
    } else if (userInput.shape === 'square') {
        selectedShape = new Square(userInput.setColor);
    } else {
        throw new Error('Invalid shape selected.')
    }

    const shapeSvg = selectedShape.render();

    return 
    `
    <svg version="1.1"
     viewBox="0 0 300 200"
     xmlns="http://www.w3.org/2000/svg">

    ${shapeSvg}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.characters}</text>

    </svg>
    `;
}


module.exports = {createDocument};