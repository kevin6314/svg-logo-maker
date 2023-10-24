const Shape = require('./shapes');

class Square extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
        return `<rect width="100%" height="100%" fill="${this.setColor}"/>`;
    }
}

module.exports = Square;