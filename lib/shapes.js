//Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(setColor){
        this.setColor = setColor;
    }
    render(){
        throw new Error('Child class must implement render() method.')
    } 
    
}

module.exports = {Circle, Triangle, Square};