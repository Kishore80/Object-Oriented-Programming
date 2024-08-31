/**

There are 2 Types of Object Properties

Data Property
Accessor Property

*/

//Data Property

let user = {
    name : 'John',
    age: 51 ,
    gender:'male'
}
//name , age , gender => Data Properties of User Object

//Accessor Property are Methods that Gets or Sets the Value of an Object Property

//Getter - Reads Objects Property Value , Use get Keyword
//Setter - Sets or Updates Object Property Value , Use set Keyword

let user2 = {
    name:'John',
    age:51,
    gender:'male',

    get getName(){ //Getter Property
        return this.name
    },

    set updateName(newName){ //Setter Property
        this.name = newName
    }
}

user2.getName() //Return John
user2.updateName = 'Will Smith' //Updates the Name to Will Smith
user2.getName() //Return Will Smith

//Getters and Setters are Useful when we need to perform some sort of Manipulation / Calculation while Reading or Setting the Value