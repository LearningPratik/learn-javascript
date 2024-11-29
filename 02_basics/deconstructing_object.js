const course = {

    name: "Deep learning",
    price: 1000,
    teacher: "Hello"
}

// console.log(course.name);

// const {name} = course;
// console.log(name);

// change name 
const {name: n} = course;
console.log(n);

// In React
const navbar = ({companyName}) => {

}

navbar(companyName = "hello")
console.log(navbar);
