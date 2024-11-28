const myname = "Pratik";
const surname = " raut";

console.log("Hello " + myname[0] + surname);

console.log(`Hello ${myname}${surname}`);

const gameName = new String("Pratik");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
// console.log(gameName);


console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const subname = gameName.substring(0, 4);
console.log(subname);

const slicename = gameName.slice(-6, -1);
console.log(slicename);

const trimname = "  Pratik  ";
console.log(trimname);
console.log(trimname.trim());

const newName = "Pratik-Raut";
console.log(newName.split("-"));