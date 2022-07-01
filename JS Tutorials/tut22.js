// Call back fuctions
console.log("Call back functions");
const students = [
    {
        name: "John",
        age: 20,
        marks: 90,
        city: "New York"
    },
    {
        name: "Peter",
        age: 20,
        marks: 80,
        city: "London"
    }
]

function enrollStudents(student,callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        }) ;
        console.log("Students have been fetched");
        document.getElementById("students").innerHTML = str;
    }, 3000);
}
let newStudent = {
    name: "Sunny",
    age: 20,
    marks: 90,
    city: "New Delhi"    
}
enrollStudents(newStudent,getStudents);