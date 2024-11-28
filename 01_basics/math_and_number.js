const score = 88;
console.log(`score and type is : ${typeof(score)}`);

const balance = new Number(90);
console.log(`balance and type is : ${typeof(balance)}`);

console.log(balance.toString().length);

console.log(balance.toFixed(1));
console.log(balance.toFixed(2));

const hundreds = 100000;

// Default Standards as per US
console.log(hundreds.toLocaleString());

// Specified standards are as per Indian
console.log(hundreds.toLocaleString('en-IN'));

// Math library comes default with JS
console.log(Math.abs(-100));
console.log(Math.round(100.000));
console.log(Math.ceil(4.1));
console.log(Math.floor(5.9));


// Math.random() gives values between 0-1
console.log(Math.random());
console.log(Math.random() * 5);

const min = 10
const max = 20

console.log(Math.floor( Math.random() * (max - min + 1)) + min);