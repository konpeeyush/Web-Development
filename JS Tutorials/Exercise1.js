console.log("This is exercise 1") ;
let links=document.links ;
let a="Harry" ;
let b="JavaScript" ;
Array.from(links).forEach(function(element){
    if(String(element).includes(b)){
        console.log(element);
    }
});
