mapboxgl.accessToken = 'pk.eyJ1IjoiY2VzYXItMTIiLCJhIjoiY2x6N2RqNTdmMDg2czJpcHdueXNrcWgweiJ9.Qlc_PSXRAWO0Jq1dYe1TxA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMan([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMan([-2.24, 53.48])
}

function setupMan(center) {
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
})

const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  
  map.addControl(directions, 'top-left');
}