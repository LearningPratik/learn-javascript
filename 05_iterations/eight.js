const myNums = [1, 2, 3]

addAll = myNums.reduce( function(acc, currentval) {
    return acc + currentval
}, 0)

// console.log(addAll);

addAll2 = myNums.reduce( (acc, currentval) => (
    acc + currentval
), 0)
console.log(addAll2);