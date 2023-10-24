const {Circle, Triangle, Square} = require('./shapes');
// const CLI = require('./lib/cli');
// const cli = new CLI();

function createDocument(userInput) {
    
    console.log(userInput.shape);

    const selectedShape = userInput.shape;
    let shapeInstance;

    if (selectedShape === 'circle') {
        shapeInstance = new Circle(userInput.setColor);
    } else if (selectedShape === 'triangle') {
        shapeInstance = new Triangle(userInput.setColor);
    } else if (selectedShape === 'square') {
        shapeInstance = new Square(userInput.setColor);
    } else {
        throw new Error('Invalid shape selected.')
    }

    const shapeSvg = shapeInstance.render();
    

    const logoForRendering = 
    `
    <svg version="1.1"
     viewBox="0 0 300 200"
     xmlns="http://www.w3.org/2000/svg">

    ${shapeSvg}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.characters}</text>

    </svg>
    `;

    console.log(logoForRendering);
    return(logoForRendering);

}


module.exports = {createDocument};