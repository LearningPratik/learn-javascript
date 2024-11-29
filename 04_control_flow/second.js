let userEmail = "a"

if (userEmail) {
    console.log("Got email");
    
} else {
    console.log("no email");
    
}

// falsy values
// false, 0, -0, 0n, "", null, undefined, NaN

// Check if object is empty

const emptyObj = {
    name: "Pratik"
}

if (Object.keys(emptyObj).length === 0) {
    console.log("Empty object");
} else {
    console.log("Not empty");
}

// Nullish Coalesing operator --> for checking null and undefined

let val1;
// val1 = 5 ?? 10

val1 = null ?? undefined ?? 10
console.log(val1);

// Terniary operator --> like a if and else condition

console.log(2 === "2" ? "hello" : "bye");