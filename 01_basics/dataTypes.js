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