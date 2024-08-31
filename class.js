/*

Classes are introduced in ES6

Classes use Concept of Constructor Function and Implement Prototypal Inheritance in Simple Syntax

Classes create a blueprint and and allow us to create instance objects using the blue Print

2 Ways to Create a Class

*/

class Person{
    constructor(name , birthyear , gender){
        this.name = name;
        this.birthyear = birthyear;
        this.gender = gender;
    }
    calcAge(){
        return new Date().getFullYear()  - this.birthyear;
    }
}

//We created a Class called as Person which act's as a Blue Print 

//Create Instance Object from the Class

let johnObj = new Person('John',1983,'Male');

// Behind The Scenes , The new Person() , Calls the Constructor Function in the Class

//calcAge() is the Prototype of Person Class


/*
    1. Classes Cannot be Hoisted
    2. Classes are First Class Citizen
    3. Classes are Executed in Strict Mode
 */