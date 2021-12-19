const API_KEY =  "41606655dd1312f106246232b71454bf"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;;
    console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather= document.querySelector("#weather span:first-child");
        const city= document.querySelector("#weather span:last-child");
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    // fetch is promise waiting for response from server
}

function onGeoError() {
    alert("Cant' find you. No weather for you.");

}
// getCurrentPosition() has two arguments: 
// first: function when everything is okay
// this function will recieve the current position
// second: function when there is an error
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);