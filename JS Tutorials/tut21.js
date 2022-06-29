console.log("This is tut 21");

//It will print after 2 seconds
setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        console.log("This is index number" + index);
    }
}, 2000);
console.log(`done printing`);