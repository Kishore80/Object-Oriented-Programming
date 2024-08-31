/*

In Previous Lesson , We had a calcAge method which remains same for every Object.

If we create 100 instance objects 

There will be 100 copies of calcAge Method . 

This violates DRY Principle - Do not Repeat Yourself
Wasting Memory Storage

Solution : Create a single copy of this method  and make sure
all the instance object has access to this copy

This can be done by Inheritance which means in simpler form

When an Object gets access to properties and methods of Another Object

So How can we make use of the Inheritance ?? Using prototype

Prototype is present in every object we create in JS.

Let's say we have an Object.

We attach a Property or a Method to the Prototype Property of the Object.

Those attached Properties or Methods will be accessible by Instance Objects (Child Objects)

*/

let Person =  function(name , gender , year){
    this.name = name;
    this.gender = gender;
    this.birthYear = year;
}

Person.prototype.calcAge = function(){
    let age =  new Date().getFullYear() - this.birthYear
    console.log(age);
};

let johnObj = new Person('john','male','1998');
console.log("John",johnObj)

johnObj.calcAge() //Return 26

//johnObj.__proto__ === Person.prototype (True)

//So now we can still access the calcAge using the Prototype Property of Person Object 
//We can access these from Instance Object