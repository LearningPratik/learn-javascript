let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.getDate());
console.log(myDate.getUTCDay());

// date (year, month, day)
let createDate = new Date(2024, 0, 20);
console.log(createDate.getMonth());
console.log(createDate.toDateString());

console.log(createDate.toDateString().split(' ')[0]);

let date2 = new Date("01-10-2000");
console.log(date2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(date2.getTime());

let newDate = new Date();