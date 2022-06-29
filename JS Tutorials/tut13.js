console.log("This is tut 16") ;
let element=document.createElement('li') ;
element.className='childUl' ;
element.id='createdLI' ;
element.setAttribute('title','myTitle') ;
element.innerHTML=`<b> I am inserted using javascript </b>`;
let cont=document.querySelector('ul.list') ;
cont.appendChild(element) ;
console.log(element);
