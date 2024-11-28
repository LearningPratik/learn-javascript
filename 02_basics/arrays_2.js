const marvel = ['thor', 'ironman', 'hulk'];
const dc = ['superman', 'batman', 'flash'];

// this will add a separate array and not merge it
// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][2]);

// concat merges two arrays and returns a new array
let all = marvel.concat(dc);
console.log(all);

// push is an inplace method whereas concat return new array

// spread out concept --> take glass and drop it, every element will separate
// this method do not have any limitation, any number of arrays it can take unlike concat
let all_2 = [...marvel, ...dc];
console.log(all_2);

const new_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]];

// pass a depth value 
console.log(new_array.flat(2));

console.log(Array.isArray("Pratik"));
console.log(Array.from("Pratik"));