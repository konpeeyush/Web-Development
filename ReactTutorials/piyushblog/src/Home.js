import { useState } from 'react';
const Home = () => {
    // let name='mario' ;
    const[name,setName]=useState('mario');
    const[age,setAge]=useState(20);
    const handleClick = () => {
        // console.log("Hello Ninjas")
        // name="luigi" ;
        // console.log(name); 
        // name changes is reflected in the console but not in the DOM, as the DOM is not updated

        setName('luigi');
        setAge(30);
    }
    const handleClick2 = (name) => {
        console.log("hello " + name);
    }
    return (
        // create a div with className "home"
        <div className="home">
            {/* create a h2 with text "HomePage" */}
            <h2>HomePage</h2>
            <p>{name} is {age} years old.</p> {/* does not change name on click */}

            <button onClick={handleClick}>Click Me</button>

            {/* use anonymous function to invoke function with parameters */}
            <button onClick={() => {
                handleClick2("Piyush");
            }}>Click Me again</button>
        </div>
    );
}

export default Home;