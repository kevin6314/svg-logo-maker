const Shape = require('./shapes');

class Circle extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.setColor}"/>`;
    }
}

module.exports = Circle;