const API_KEY = "d5f33cf1e8911bd2a6cbcbd3b3798fe9";
const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoErrer() {
    console.log("Cant acces geo loaction");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErrer);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
    }
}

function init() {
    loadCoords();
}
init();
