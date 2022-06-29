console.log("This is tut 11") ;
/*
element selectors :
1. Single element selector 
2. Multi element selector 

*/
let element=document.getElementById('first') ;
// element.style.color='blue' ;
element.innerHTML='<b>child-1</b>' ;
// console.log(element) ;
let selector=document.querySelector('#first') ;
selector=document.querySelector('div') ;
console.log(selector);