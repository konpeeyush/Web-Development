console.log("Tut 12") ;
let cont=document.querySelector('.no') ;
cont=document.querySelector('.container');
// console.log(cont.childNodes[1]) ;
// console.log(cont.childNodes[1].nodeName) ;
// console.log(cont.childNodes[1].nodeType) ;
// console.log(cont.children); 

//Node Types
// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 9. document
// 10. docType

let container=document.querySelector('div.container') ;
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild); // returns first element of childNodes[0]
// console.log(container.firstElementChild); // returns first element of children[0]
// console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);

