// singleton object
const newapp = new Object()
// console.log(newapp);

// non singleton object
// const newapp = {}

newapp.id = 1;
newapp.name = "Pratik"
newapp.isLoggedIn = false
// newapp.mysym = Symbol("mykey"); 

// console.log(newapp);

const regularUser = {
    email: "some@email.com",
    fullname: {
        first: "Pratik",
        second: "raut"
    }

}

console.log(regularUser.fullname.first);

const obj1 = {
    1: 'a',
    2: 'b',
    3: 'c'
}

const obj2 = {
    4: 'd',
    5: 'e',
    6: 'f'
}

// assign --> takes a target and a source (first arg is target and second is source)
const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);


// data usually comes from user as :
const fromUser = [
    {
        name: "name",
        email: "email",
    }
]

console.log(fromUser[0].name);

console.log(Object.keys(newapp));
console.log(Object.values(newapp));
console.log(Object.entries(newapp));

console.log(newapp.hasOwnProperty("isLoggedIn"));
