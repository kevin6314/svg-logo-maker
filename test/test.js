const {Circle, Triangle, Square} = require('../lib/shapes.js');

describe('Shapes', () => {
    test('should render svg code for the triangle', () => {
        const shape = new Triangle("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    });

    test('should render svg code for the square', () => {
        const shape = new Square("blue");
        expect(shape.render()).toEqual(`<rect width="100%" height="100%" fill="blue"/>`);
    });

    test('should render svg code for the circle', () => {
        const shape = new Circle("blue");
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="blue"/>`);
    });

})