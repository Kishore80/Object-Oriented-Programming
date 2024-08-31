/* There are 4 Pillars of OOP  

 1. Inheritance - 
    * Allow us to create new class/object based on existing class/object
    * With Inheritance we can inherit the Properties / Methods of a Parent Object

      Person Object                   Employee Object
        name                            employeeId
        birthYear                       salary
        gender         <<<<<<<<<<<<<<<< company
        calculageAge()                  calculateSalary()
 
      Using Inheritance , The Employee Object can 
      inherit the Properties and Methods of Person Object

      The Employee Object is called -> Child Object
      The Person Object is called -> Base Object

      In that way we don't have to Explicity Specify the Properties and Methods Seperately

    
2. Encapsulation
    * Binding the Data with the Data and the Functions that Acts on the Data

3. Abstraction
    * A Way of Hiding the Implementation Details and Showing only the Functionalities to the User
    * In Other Words , It Ignores the Irrelevant Details and Shows only the Required Ones
    
    lets consider

    Employee Base Object
        name
        role
        getSalary() -- This is a method with no implementation / logic

    
    Permanent Employee Child Object
        salary
        getSalary() => { This is a method with Implementation
            salary * 30    
        }

    Part Time Employee Child Object
        salary
        getSalary() => { This is a method with Implementation
            salary * 8    
        }

    Employee = Base Object
    Permanent Employee = Child Object
    Part Time Employee = Child Object

    The Employee Object also had getSalary Method , We are just mentioning the Functionality
    The Actual Implementation Happens in Child Objects

4. Polymorphism
    * It means differenf forms
    * We can write methods with same name , with difference implementation
    
    addNumbers(x,y) => {
        console.log(x + y)
    }
     
    addNumbers(x,y,z) => {
        console.log(x + y + z)
    }

    addNumbers(1,2) //Triggers first method with 2 input parameters
    addNumbers(1,2,3) //Triggers second method with 3 input parameters
    
    Based on the Input Parameters the respective addNumber Method will be triggered 

*/
