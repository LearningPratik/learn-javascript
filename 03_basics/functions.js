function myName() {

    console.log('hello');
    console.log('bye');
    
}

// myName()

// when we put a, b while defining a function then they are called parameters
function add(a, b) {

    result = a + b
    return result
    // console.log(a + b);
}

// when we put value of a, b in add() then they are called arguments
const add_result = add(2, 2)
console.log(`Result : ${add_result}`);



function loggedInMessage(username) {
    
    // If (!username) --> In JS "" equivalent to false and ! reverse the situtaion, here if not username
    if(username === undefined) {
        return `No name passed`
    }

    else {
        return `${username} just logged in`
    }
}

let message = loggedInMessage();
console.log(message);

// If someone donot pass anything then it gives undefined


// When ... used in function it is called rest operator, it can take multiple values, even giving one parameter
function calculatePrice(...num1) {
    return num1
}

// console.log(calculatePrice(2, 3, 4, 5));

function calculatePrice2(val1, val2, ...num1) {
    return num1
}

console.log(calculatePrice2(2, 3, 4, 5));

// Object as function

const user = {

    username: "Pratik",
    price: 500
}

function handleObject(anyobject) {

    console.log(`username is --> ${anyobject.username} and item price is --> ${anyobject.price}`);
    
}
handleObject(user)

const newArray = [1, 2, 3, 4, 5]

function send_2(arr) {

    return arr[1]
}

console.log(send_2(newArray));
