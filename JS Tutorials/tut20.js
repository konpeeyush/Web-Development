console.log("This is tut 20");

class Employee {
    constructor(name, experience, division) {
        this.name =name ;
        this.experience =experience ;
        this.division =division ;
    }
    slogan(){
        return `I am ${this.name} and this company is the best.`
    }

    static method(a,b){
        return a+b ;
    }
}

class Programmer extends Employee{
    constructor(name,experience,division,language){
        super(name,experience,division) ;
        this.language=language ;
    }
}

let harry=new Employee("harry",2,"CS") ;
console.log(harry.slogan());

//static method can be called without creating object
console.log(Employee.method(2,3));
