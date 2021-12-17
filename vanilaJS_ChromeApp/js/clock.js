const clock = document.querySelector("h2#clock");

// setInterval(function, time) execute function every certain time
// time unit is milliseconds
// setTimeout(function, time) execute function after specified time

function getClock() {
    const date = new Date();
    // String() : number --> String
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =
        `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);