// for of loop

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

let greetings = " he wo "

for (const j of greetings) {
    
    if (j == " ") {
        continue
    } else {
        console.log(j);
    }
}

// maps --> collections of key-value pair
//          takes only unique values, overwrite if same value / key is detected
const map = new Map();

map.set('a', 1)
map.set('b', 2)
map.set('a', 2)
console.log(map);

for (const [k, v] of map) {
    console.log(k, ' : ', v);
}

