// Promise:
// -resolve
// -reject
// -penidng

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const error = true;
            if (!error) {
                console.log("Your Promise has been resolved");
                resolve();
            }
            else {
                console.log("Your Promise has been rejected");
                reject("Not resolved");
            }

        }, 2000);
    }
    );
}
func1().then(function () {
    console.log("Your Promise has been resolved");
}).catch(function (err) {
    console.log("Catched error: " + err);
});

// If func1() is resolved, then then() will be called and if func1() is rejected, then catch() will be called.