const user = {

    username: "Pratik",
    age: 50,
    welcomeMessage: function() {

        // this is like self in python, if we want to use variable from current context/scope
        // we use this to do that
        console.log(this);
        return `${this.username}, welcome to our website`
    }

}

// console.log(user.welcomeMessage());
// user.username = "Dhruv";
// console.log(user.welcomeMessage());

// function coffee() {

//     let username = "Pratik"
//     console.log(this);
    
// }

// coffee()

// const coffee = function() {

//     let username = "Pratik"
//     console.log(this);
    
// }

// console.log(coffee);


// remove function keyword and use => (arrow) keyword
const coffee = () => {

    let username = "Pratik"
    console.log(this)
}

coffee()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 1));

// implicit return --> no need of return word
// when we use {curly braces} we need to use return and its called explicit return
const addOne = (num1, num2) => num1 + num2;
console.log(addOne(2, 4));