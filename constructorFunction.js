/*

A constructor Function is a pattern in JS with which , We could create Several Objects

In Simple terms , It is a Template for Creating Objects

With Cons Func we can instantiate Objects and Implement Inheritance

*/

let Person =  function(name , gender , year){
    this.name = name;
    this.gender = gender;
    this.birthYear = year;
    this.calcAge = () =>{
        let age =  new Date().getFullYear() - this.birthYear
        console.log(age);
    }
}

let johnObj = new Person('john','name',1998);
let maryObj = new Person('merrt','female',1992);

/*

Using this Cons Func , We are able to Create Instance Objects from Person Constructor

The Name of the Function Cons will adhere to Pascal Notation

The new Keyword makes sure to create a new Instance of the Object

type of Person = Function
type of johnObj and maryObj = Object

We can access johnObj.name or gender or birthYear or calcAge .

*/


