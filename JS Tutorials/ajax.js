console.log("Ajax Tutorial") ;
let fetchBtn=document.getElementById('fetchBtn') ;
fetchBtn.addEventListener('click',buttonClickHandler) ;
function buttonClickHandler(){
    console.log('You have clicked fetchBtn');
    //Instantiate an xhr object
    const xhr=new XMLHttpRequest() ;

    //open the object
    // xhr.open('GET','harry.txt',true) ;

    //Post request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/employee/2ttp://dummy.restapiexample.com/api/v1/employee/2',true) ;

    xhr.getResponseHeader('Content-type','application/json') ;

    //what to do on progress
    xhr.onprogress=function(){
        console.log('on progress');
    }

    //ready state change
    xhr.onreadystatechange=function(){
        console.log("State",xhr.readyState);
    }
    //What to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.error("Some error occured");
        }
    }

    //send the request
    params=`{"name":"test2332","salary":"123","age":"23"}` ;
    xhr.send(params) ;
    console.log('We are done!');
}

