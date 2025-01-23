// Given two arrays a and b, the task is to find the number of elements in the union between these two arrays.

function doUnioun(a, b) {

    const setA = new Set(a);
    const setB = new Set(b);
    
    const unionSet = new Set([...setA, ...setB])
    return unionSet;

}

const a = [1, 2, 3, 4]
const b = [5, 6, 2]

// console.log(doUnioun(a, b));

// Given two sorted arrays arr1 and arr2. Your task is to return the intersection of both arrays.
function doIntersection(a, b) {

    const intersectionList = []

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                intersectionList.push(a[i])
            }
        }
    }

    return intersectionList;
}

const arr1 = [1, 2, 3, 4]
const arr2 = [2, 4, 6, 7, 8]

// console.log( doIntersection(arr1, arr2));

// Maximum of two numbers

const num1 = 4;
const num2 = 2;

// console.log(Math.max(num1, num2));
// console.log(Math.min(num1, num2));

// if ( num1 - num2 < 0) {
//     console.log(`${num2} is max`);
    
// } else {
//     console.log(`${num1} is max`);
// }

// swap first and last element in list 
let my_list = [1, 2, 3, 4, 5]
// console.log(` Before swap --> ${my_list}`);

// let temp = my_list[0];
// my_list[0] = my_list.slice(-1);
// my_list[my_list.length - 1]  = temp;

// console.log(` After swap --> ${my_list}`);

function swapArray(my_list) {

    if (my_list.length < 2) {
        return my_list
    }

    [my_list[0], my_list[my_list.length - 1]] = [my_list[my_list.length - 1], my_list[0]]

    return my_list
}

// console.log(swapArray(my_list))

l = [1, 2, 3, 4]

function swaplist(l, pos1, pos2) {

    [l[pos1], l[pos2]] = [l[pos2], l[pos1]]
    return l
}

// console.log(swaplist(l, 0, 2));


// Character Swap in Strings

function swapChar(l1) {

    for (let element = 0; element < l1.length; element++) {
        l1[element].replace('G', '#').replace('e', 'G').replace('#', 'e')   
    };

    return l1
}

let l1 =  ['Gfg', 'is', 'best', 'for', 'Geeks'];
console.log( swapChar(l1) );