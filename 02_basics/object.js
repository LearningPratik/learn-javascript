// singleton
// object.create()

// object literals

const mysym = Symbol("hello");

const JsUser = {
    name: "Pratik",
    age: 50,
    state: "Maharashtra",
    email: "pratik@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: "Monday",
    // mysym: mysym,
    [mysym]: "hello"

};


// console.log(JsUser.isLoggedIn);
// console.log(JsUser["name"]);
// console.log(JsUser[mysym]);

JsUser.email = "Pratik@yahoo.com";
// console.log(JsUser);

// freeze is used if we dont want to change anything
// Object.freeze(JsUser);
JsUser.email = "Pratik@bye.com";

JsUser.greetings = function() {
    console.log('Hello')
};

// console.log(JsUser.greetings);

JsUser.greetings2 = function() {
    console.log(`Hello ${this.name}`)
};

console.log(JsUser.greetings2());