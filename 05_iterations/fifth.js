const language = ['python', 'rust', 'javascript']


// forEach() dont have any return values

// const vals = language.forEach( (item) => {
//     // console.log(item);
//     return item
// });

// console.log(vals)


// filter returns the values if saved in a variable
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const big5 = nums.filter( (num) => (
    num > 5
))

console.log(big5);

// If we want to use curly braces we have to use return keyword
const small5 = nums.filter( (num) => {
   return num < 5;
})

console.log(small5)