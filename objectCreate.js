//This is 3rd method to Create instance objects that follows Prototypal Inheritance

let person = {
    greet:function(){
        console.log('Hello There',this.name);
    },
    wish:function(){
        console.log('Morning',this.name);
    }
}

let johnUser = Object.create(person,{
    name:{
        value:'Kishore'
    }
});

johnUser.greet();  //Prints Hello There Kishore
johnUser.wish(); //Prints Morning Kishore


//We can see johnUser Instance Object inherits the Methods of person object. Which adheres to Prototypal Inheritaance

//This Method is least used one while creating Instance Objects
