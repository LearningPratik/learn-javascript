let a = 300;

if (true) {
    
    // these are local scope
    let a = 10;
    const b = 20
    // var c = 30;
    console.log("INNER: ", a);

}

// we wont be able to access a, b outside now, it will throw an error
// console.log(a, b);
// console.log(a);

// c will be accessible


function one() {
    const username = "Pratik"

    // for this inner function, outer function is like a global so it can access it's variable
    function two() {
        const age = 56
        console.log(username);
        
    }

    // outer function cant access inner function's variables
    // console.log(age);
    two()
    
}

one()


// this did not throw any error, any though we are trying to log it before defining
console.log(addOne(3));
function addOne(num) {
    return num + 1
}


// this is called expression, one way of defining a function
// this will throw an error, saying cant initialize before
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(3))