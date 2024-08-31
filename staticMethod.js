/*

Static Methods are methods which are accessed only with Class not with the Instance Objects

*/

class Engine {
    constructor(model , capacity) {
        this.model= model;
        this.capacity = capacity;
    }

    static startEngine() {
        console.log('Engins has Started');
    }
}

let myNewCarEngine = new Engine('Turbo',10);

//The myNewCarEngine Instance Object cannot access the Start Engine Static Method . It will return error.
//As per the Static Method Definition , the Static Methods are only accessible by Class and cannot by it's instance Objects

Engine.startEngine(); //Correct
// myNewCarEngine.startEngine() //Wrong , Will Return Error


//Static Method Creation Using Function Constructor


let EngineInformation = function (model , capacity) {
    this.model = model;
    this.capacity = capacity;
}
EngineInformation.stopEngine = function() {
    console.log('Engine Stopped');
}

//Certain Built In Static Method

Number.parseInt() //We are calling this parseInt method directly on Number Object
Number.isNaN()
Array.from()