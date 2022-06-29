// console.log("This is tut 7") ;
// for (let index = 0; index < 100; index++) {
//     console.log(index);
// }
// let j=0 ;
// // while(j<5){
// //     console.log("Piyush") ;
// //     j++ ;
// // }

let arr = [1, 2, 23, 45, 66];
arr.forEach(function (element) {
  console.log(element);
});

let obj={
    name:"Rohan Das" ,
    age: 12,
    type:"Dangerous",
    OS:"MacOS"
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`) ;
}