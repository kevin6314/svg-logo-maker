const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor}"/>`;
    }
}

module.exports = Triangle;