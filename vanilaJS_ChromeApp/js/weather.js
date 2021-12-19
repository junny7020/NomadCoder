function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;;
    console.log("You live in ", lat, lng);
}

function onGeoError() {
    alert("Cant' find you. No weather for you.");

}
// getCurrentPosition() has two arguments: 
// first: function when everything is okay
// this function will recieve the current position
// second: function when there is an error
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);