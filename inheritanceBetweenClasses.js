//Now Let's see how we can implement Inheritance Between Classes

class Person {
    constructor(name , age , gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet = function(){
        console.log(`Hello ${this.name}`);
    }
}

let userA = new Person('Kishore',26,'Male');

//User A Has access to Greet Prototype

//Now Let's create Employee Class and Inherit the Person Class

class Employee extends Person{ //Keyword extends Person tells JS to Inherit from Person Class 
    constructor(name , age , gender , empId , experience){ 
        super(name , age , gender)//This Super keyword exactly inherits these 3 properties name  , age and gender and this must be placed in the first line else JS will return error
        this.empId = empId;
        this.experience = experience;
    }
    greetEmployee = function() {
        console.log(`Hey Employee ${this.name}`);
    }
}

let userB = new Employee('Kishore',26,'Male',1,4);

//User B will have access to Greet Prototype of Person as well

//This allows us to implement inheritance between classes in JS

/**

To Note :

Second Class Extends First Class  [To Inherit the Class Entirely]

Super Keyword -> To inherit the Properties

No Specific Keyword for Inheritng the Prototypes Seperately

 */s