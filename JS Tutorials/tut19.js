console.log("This is tut 19") ;
// let car={
//     name:"maruti 800",
//     topSpeed:89,
//     run: function(){
//         console.log("Car is running") ;
//     }
// }

// //Constructor
// function generalCar(name,topSpeed){
//     this.name=name ;
//     this.topSpeed=topSpeed ;
//     this.run=function(){
//         console.log(`${this.name} is running.`);
//     }
// }

// car1=new generalCar('Nisaan',45) ;
// console.log(car1);

//Prototypes

// let obj={
//     name:"Harry",
//     channel:"Code with Harry",
//     address:"Mars"
// }
// function Obj(name){
//     this.name=name ;
// }

// let obj2=new Obj(`piyush`) ;
// console.log(obj2);

//Inheritance
const proto={
    slogan:function(){
        return `This  company is the best` ;
    },
    changeName:function(name){
        this.name=name ;
    }
}

//This creates Object
const harry=Object.create(proto) ;
harry.name="harry" ;
harry.role="Programmer" ;
console.log(harry);

//This also creates object
const harry2=Object.create(proto,{
    name:{value:"Piyush",writable:true},
    role:{value:"Programmer"}
})
harry2.changeName('Peeyush') ;
console.log(harry2);

//Employee Constructor
function Employee(name, salary, experience){
    this.name=name ;
    this.salary=salary ;
    this.experience=experience ;
}

Employee.prototype.slogan=function(){
    return `This is a good company, Regards${name}` ;
}

let piyush=new Employee("harsh",13323,21) ;
console.log(piyush);


//Inheritance

//Programmer constructor
function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience) ; //inheritance
    this.language=language ;
}

//Inherit the prototype
Programmer.prototype=Object.create(Employee.prototype) ;


//Manually set the constructor
Programmer.prototype.construcutor=Programmer ;
let rohan=new Programmer('rohan',2,0,"c++") ;
console.log(rohan)