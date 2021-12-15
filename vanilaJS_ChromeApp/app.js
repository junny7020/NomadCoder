// querySelector ---> "#Id element"
// or ".tag element"
// queryselectorAll -->  array
// getElementsById --> array
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("Title was clicked!");
    title.style.color = "pink";
}

console.dir(title);
title.style.color = "blue";
title.addEventListener("click", handleTitleClick);