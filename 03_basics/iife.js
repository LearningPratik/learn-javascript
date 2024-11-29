// Immediately invoked function expression (IIFE)

// iife --> immediate execution and sometimes to save it from global scope pollution
// first brcaket for defining and second for executing

(function bye() {
    console.log('bye');
}) (); 

( () => {
    console.log('hello');
} ) ();

// passed the parameter
( (juh) => {
    console.log(`${juh}`);

// passed the argument
} ) ('rt');