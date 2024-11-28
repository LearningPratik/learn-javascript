const arr = [0, 10, 2, 3, 4, 5];

console.log(arr[1]);

// Shallow copy in array --> properties share the same reference point
// change in one will change another

// Deep copy in array --> properties do not share the same reference point
// change in one will not change another

const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

arr2.push(6);
arr2.push(7);

console.log(arr2);

arr2.pop();
console.log(arr2);

// unshift --> adds new element at the beginning of the array
arr2.unshift(10);
console.log(arr2);

// shift removes the first element
arr2.shift();
console.log(arr2);

console.log(arr2.includes(6));
console.log(arr2.indexOf(2));

// if we give a value which isnt in the array for indexof, it gives -1

arr3 = arr2.join();
console.log(arr3);
console.log(`before join --> ${typeof(arr2)} and after join --> ${typeof(arr3)}`);

// slice and splice

// slice --> does not take last value and also does not change original array
console.log("Original array --> " + arr2);
const slicearr = arr2.slice(1, 4);
console.log("After sliced --> " + slicearr);
console.log("Original array --> " + arr2);

// splice --> it does take last value and also changes the original array
const splicearr = arr2.splice(1, 4);
console.log("After Spliced --> " + splicearr);
console.log("Original array --> " + arr2);