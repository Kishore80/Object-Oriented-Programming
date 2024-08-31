let Car = function (model , year , brand) {
    this.brand = brand;
    this.year = year;
    this.model = model;
}

Car.prototype.engine = function () {
    if(this.year > 1944){
        return 6
    }else{
        return 4
    }
}

let myfirstcar = new Car('Top',1923 , 'Benz');

/*

Car = Parent Object

myFirstcar = Instance Object Created from it's Parent Object(Car)

Know that Car which is a Parent Object Must be a Instance of a X Object .

Where x is nothing but Object

Every Object is Inherited Directly / Indirectly to Another Object. 

This forms a Chain of Object Hierarchy . 

And brings us to Prototype Chaining


myFirstCar          Car             Object

brand             brand             common Object Properties and Method available in JS
year              year
model             model

prototype        prototype        prototype
No               engine()         hasOwnProperty()
                                  isPrototypeOf()
                                  toString()
                                  toLocaleString()
                                  valueOf()


Now 

myFirstCar is an instance of Car
Car is an Instance of Object

Prototype of Car can be accessed by it's child (myFirstCar)
Prototype of Object can be accessed by it's child (Car and myFirstCar)

This is called Prototype Chaining
*/
