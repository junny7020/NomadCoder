// querySelector ---> "#Id element"
// or ".tag element"
// queryselectorAll -->  array
// getElementsById --> array
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("Title was clicked!");
    h1.style.color = "pink";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("Copier!");
}

function handleWindowOffline() {
    alert("Oh no you are disconnected, please turn on your wifi!");
}

function handleWindowOnline() {
    alert("Yeay you are online!");
}

console.dir(h1);
h1.style.color = "blue";
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);