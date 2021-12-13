const a = 5;
const b = 2;
let myName = "June";
// const can't change but let can
// Never use var
// var can re-declare and updated

//          Re-declare      update
// const:       x             x
// let:         x             o
// var:         o             o
console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log("hello " + myName);

myName = "Minjun";
console.log("Your new name is " + myName);