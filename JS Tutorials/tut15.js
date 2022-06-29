console.log("This is tut 15") ;
document.getElementById('heading').addEventListener 
(
    'click',function(e){
        console.log("You have clicked the heading");
        // location.href="//github.com/konpeeyush/" ;
        let val=e.target ;
        val=e.target.className ;
        console.log(val) ;
    }
) ;

