//Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(setColor){
        this.setColor = setColor;
    }
    render(){
        throw new Error('Child class must implement render() method.')
    } 
    
}

class Circle extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.setColor}"/>`;
    }
}

class Triangle extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor}"/>`;
    }
}

class Square extends Shape {
    constructor(setColor) {
        super(setColor);
    }
    render() {
        return `<rect width="100%" height="100%" fill="${this.setColor}"/>`;
    }
}

module.exports = {Circle, Triangle, Square};