const player = {
    name: "June",
    points: 10,
    studyMath: true,
};
// this is an object

console.log(player);
console.log(player.name);
// this means console is also an object
console.log(player["name"]);
console.log(player.points);
player.points = 20;
console.log(player.points);
// player is const object
// the object can not be changed but the content can be changed or added
player.lastname = "C.";
console.log(player.lastname);