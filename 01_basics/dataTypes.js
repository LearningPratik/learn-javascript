// treat all code as newer version of JS
"use strict";

// this will not work as we are using nodejs and not browser where it will run
// alert('hello');

let name = 'hello';
let num = 3;
let isLoggedIn = true;

// primitive data types

// number    => it has a range, if range exceeds then use bigInt
// string    => '' or "", prefer to use ""
// boolean   => true or false
// null      => datatype and also a standalone value 
// undefined => abhi value assign nahi huyi hain
// symbol    => to define uniqueness 

// objects
console.log(typeof null); // type of null is object
console.log(typeof undefined); // type of undefined is undefined

// Primitive data type --> call by value
// It does not give you reference to the memory, if changes made, it does in it's copy

// String, Number, Boolean, Null, Undefined, Symbol, BigInt, 

// Non-primitive --> Reference type
// allocates memory

// arrays, objects, functions
let arr = ["hello", "bye", "good"];

let myObj = {

    name: "Pratik",
    age: "50"
};

const myfunc = function(){
    console.log("hello");
    
};

console.log(typeof myfunc);

// See ECMA online resource for data types reference


// all primitive type datatype goes to stack memory
let myname = "Pratik";
let myname2 = myname;

myname2 = "Dhruv";

console.log(myname);
console.log(myname2);

// all non-primitive type datatype goes to heap memory

let user1 = {

    email: "user@gmail.com",
    upiid: "upi@no"

}

let user2 = user1;

console.log(user1);
console.log(user2);