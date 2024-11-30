const myObject = {
    name: "Pratik",
    age: 50 
}

for (const key in myObject) {
    console.log(myObject[key]);
}


let arr = [1, 2, 3, 4, 5]

// arr.forEach( function (item) {
//     console.log(item)
// });

arr.forEach( (item) => {
    console.log(item)
});

function printMe(item) {
    console.log(item)
};

arr.forEach(printMe);


const lanObject = [
    {
        lanName: 'python',
        fileName: 'py'
    },
    {
        lanName: 'rust',
        fileName: 'rs'
    },
    {
        lanName: 'javascript',
        fileName: 'js'
    }
]

lanObject.forEach( (item) => {
    console.log(item.lanName);
})