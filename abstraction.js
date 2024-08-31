let Person = function (name , salary) {
    this.name = name;
    this.salary = salary;

    let monthlyBonus = 1000;

    let calculateFinalSalary= function(salary,monthlyBonus) {
        return salary + monthlyBonus;
    }

    this.employeeInfo = function () {
        return `Hey ${this.name} Your Salary is ${calculateFinalSalary(salary , monthlyBonus)}`
    }
}

let kishore = new Person('Kishore',10000);
kishore.employeeInfo();

//The Above is a Good Example for Abstraction

/*

The Final Salary depends on Monthly Bonus

Here we don't need to expose Monthly Bonus to the Instance Objects

So we create it Privately within the Person Class and Expose only the calculateFinalSalary Function

This is called Abstraction

Hiding the Implementation and Only Exposing the Required Information to the Instance Objects

*/