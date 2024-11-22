let score = "30";

// two ways for checking - 1]
console.log("Before conversion --> " + typeof score);

// 2]
// console.log(typeof(score));

// convert this string to num

let val = Number(score);
console.log("After conversion --> " + typeof(val));

let score1 = "30a";
console.log("before conversion --> " + score1);

// NaN is also a type, JS  successfully converts is assigns it to NaN
let val1 = Number(score1);
console.log("after conversion --> " + val1 + " and type is --> " + typeof val1);

let score2 = null;
console.log("before conversion --> " + score2);

let val2 = Number(score2);
console.log("after conversion --> " + val2 + " and type is --> " + typeof val2);

let num = 1;
console.log(typeof num);

let st = String(num);
console.log(typeof st);

