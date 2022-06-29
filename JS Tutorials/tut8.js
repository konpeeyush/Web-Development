console.log("This is tut 10") ;
// let name="Piyush" ;
// // console.log(`Happy Birthday ${name} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad esse doloremque voluptatibus ex natus aperiam fugit perferendis velit sapiente, quam, optio suscipit possimus dicta unde atque, expedita similique provident qui. Odit distinctio, nihil cum tempore voluptatem doloremque. Rem, id sed. `) ;

// // function greet(name){
// //     console.log(`Happy Birthday ${name}`) ;
// //     return 4;
// // }

// // let val=greet("Piyush") ;
// // console.log(val);

// const myObj={
//     name:"SkillF",
//     game:function(){
//         return "Gta" ;
//     }
// }
// console.log(myObj.game());
// arr=['fruit','vegetable','furniture'] ;
// arr.forEach(function(element,index,array){
//     console.log(element,index,array);
// });

var i=234 ;
console.log(i);
function fun(name){
    var i=8 ;
    console.log("inner scope "+i);
    console.log(`Hello ${name}`);
}
fun("Piyush") ;
console.log("outer scope "+ i);