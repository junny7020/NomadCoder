// querySelector ---> "#Id element"
// or ".tag element"
// getElementsById
const t = document.querySelector(".hello h1");
const title = document.getElementById("title");

console.dir(title);
title.innerText = "Got it!";

console.log(t.innerText);
console.log(title.className);