//Object Oriented Programming is a Programming Paradigm that is build on Concept of Objects

//A real world user can be represented as an Object

let user = {
    name:'John',
    role:'Manager',
    addUser: ()=>{},
    removeUser :()=>{}
}

/*

In the Above Example , user object has Properties and Methods

name , role = Properties
addUser , removeUser= Methods

*/

let merryObj = {
    name:'merry',
    role:'developer',
    addUser: ()=>{},
    removeUser :()=>{}
}

let joeOb = {
    name:'joe',
    role:'admin',
    addUser: ()=>{},
    removeUser :()=>{}
}

/* 

All the Properties and Methods are similar to every object.

Imagine if we had 100 users , we would have created 100 objects individually for every user

So instead of doing that , 

We can create a blueprint and use that to create objects

*/

let personBlueprint = {
    name:'',
    role:'',
    addUser: ()=>{},
    removeUser :()=>{}
}

//All the Objects Created using the Blue Print are called INSTANCE OBJECTS
//Unlike Creating Object with Object Literal {} , We can create instance Objects using less line of Code



