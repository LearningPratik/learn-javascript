const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let num10 = nums.map( (num) => num + 10)
// console.log(num10);

let num5 = []

nums.forEach( (num) => {
    return num5.push(num + 5)
})
// console.log(num5);

// method chaining
let newNum = nums.map( (num) => num *10).filter( (num) => num > 60);
console.log(newNum);
