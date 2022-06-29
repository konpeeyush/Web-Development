// type conversion and type coercion
let myVar=34 ;
console.log(myVar) ;
myVar=String(34) ;
console.log(typeof myVar) ;
let booleanVar=String(true) ;
console.log(booleanVar,(typeof booleanVar));

let ar=String([1,2,3,4,5]) ;
console.log(ar.length,(typeof ar));
let date=new Date() ;
console.log(date.toString(),(typeof date));
