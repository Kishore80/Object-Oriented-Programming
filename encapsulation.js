// Encapsulation is Binding the Data with the Functions that act on the data into a Single Unit

class Students {
    constructor(name , marks) {
        this.name = name;
        this.marks = marks;
    }

    get getName(){ //Getter
        console.log(`Hello ${this.name}`);
    }

    set setName(newName){ //Setter
        this.name = newName;
    }

    get getMarks(){ //Getter
        console.log(`Hello ${this.name}`);
    }

    set setMarks(newMark){ //Setter
        this.marks = newMark;
    }
}

/*

The Above is a Clear Example of Encapsulation

We bind the Data (name and marks)

With the Functions (getName , setName , getMarks , setMarks) that Acts on the Data

In a Single Unit (Class Students)

*/

