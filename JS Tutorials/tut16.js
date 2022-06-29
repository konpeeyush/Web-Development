console.log("This is tut 16") ;
let btn=document.getElementById('btn') ;
btn.addEventListener('click',func1) ;

function func1(e){
    console.log("Thanks",e);
}

document.querySelector('.container')
.addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.background=`rgb(${e.offsetX},${e.offsetY},154)` ;
});