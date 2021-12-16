const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClicker() { 
    // if you use clicked(raw value) twice
    // you can make some mistakes
    const clickedClass = "clicked";
    // this way you can find error easily
    
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}
h1.addEventListener("click", handleTitleClicker);