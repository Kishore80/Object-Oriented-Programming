//Can we Inherit Properties and Methods from One Function Constructor to Another Function Constructor ??

//Yes , We can do as below

let Person = function (name,gender,age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello`,this.name);
}


//We created a Person Function Constructor with 3 Properties and a Prototype

let oya = new Person('mark','male',42);

//This oya instance object will have access to the Prototype Greet

//Now Let's create another Function Constructor and Inherit the Properties and Methods of Person.

let Employee = function(name , gender , age , empId , experience){
    Person.call(this, name , gender , age); //This call method allows us to inherit the Person Function and Result to the Instance Objects Created
    this.empId = empId;
    this.experience = experience;
}

Employee.prototype = Person.prototype; //If we need to Inherit the Prototype of Person into Employee , This line does that . Make sure this  line must be placed before creating any Prototype for Employee


Employee.prototype.greetEmployee = function(){
    console.log(`Hello ${this.name} Emplooyee , Id ${this.empId}`);
}

let kis = new Employee('Kisa','M',26,1,4)

//The Kis Instance Object will have access to greet Prototype as well

//This is how we apply inheritance between Function Constructors

/**

To Note :

FirstConstructor.call(this) [To Inherit the Propeties]
SecondConstructor.prototype = FirstConstructor.prototype [To Inherit the Prototype]


 */