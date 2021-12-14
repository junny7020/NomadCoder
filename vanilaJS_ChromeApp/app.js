const nonsense = [1, 2, null, undefined, true, "hello", 23.3]
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]
console.log(daysOfWeek);
daysOfWeek.push("sun");
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
// const declare can not be modified
//For const, it is like declaring a box
// const a=2; means make a box, "a" that has 2
// Since a is just an integer variable it can not be changed

// but in an array the content of the box can be added
// const toBuy =["beef","eggs"]; means make a box, "toBuy" that has beef, eggs
// so since it is an array you can add more content in to it.
// The box will still be the same box, but with more contents.