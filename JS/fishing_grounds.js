

var grounds = [
    {
        lat: 51.357685,
        lng: 22.280941,
        name: 'Łowisko Przybysławice',
        species: ['Karp', 'Szczupak', 'Jesiotr', 'Sum'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 51.356048,
        lng: 22.34006,
        name: 'Łowisko Garbów',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },

    {
        lat: 53.683587,
        lng: 21.614839,
        name: 'Łowisko Wejsuny',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 51.625527,
        lng: 22.781187,
        name: 'Łowisko Siemień',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 50.543429,
        lng: 21.645223,
        name: 'Łowisko Tarnobrzeg',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 50.785831,
        lng: 23.006664,
        name: 'Łowisko Nielisz',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 52.891034,
        lng: 17.130872,
        name: 'Łowisko Kaliszany',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 53.537065,
        lng: 16.218873,
        name: 'Łowisko Pławno',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 53.64453,
        lng: 14.623586,
        name: 'Łowisko Stepnica',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 54.527401,
        lng: 16.607734,
        name: 'Łowisko Wicko',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 54.764738,
        lng: 17.634623,
        name: 'Łowisko Sarbsko',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
    {
        lat: 53.78706,
        lng: 19.751535,
        name: 'Łowisko Skarpa',
        species: ['Karp', 'Szczupak'],
        nightFishing: true,
        tent: true,
        voivodeship: 'Lubelskie',
        accommodation: false,
        spinning: true,
        area: 0.2,
    },
]

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    // var output = document.getElementById("geo");
    // output.innerHTML = "<p>Szerokość geograficzna: " + latitude +
    //     "</p>";
    // output.innerHTML = `<p>Szerokość geograficzna: ${latitude}</p>
    //                             <p>Długość geograficzna: ${longitude}</p>`;
    // L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS popup.<br> Easily customizable.').on('click', onMapClick);
    // L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS popup.<br> Easily customizable.').on('click', onMapClick);
    addFishingGroundsMarkers(map);
    // map.on('click', onMapClick);
}

function addFishingGroundsMarkers(map) {

    for (let i = 0; i < grounds.length; i++) {
        L.marker([grounds[i].lat, grounds[i].lng]).addTo(map)
            .bindPopup(grounds[i].name).on('click', updateGroundDetails);
    }

}


function updateGroundDetails(e) {
    var ground = grounds.find(element => element.lat == e.latlng.lat && element.lng == e.latlng.lng);
    console.log(ground);
    var species = '';
    for (let i = 0; i < ground.species.length - 1; i++) {
        species += ground.species[i] + ', ';
    }
    species += ground.species[ground.species.length - 1];
    document.getElementById('ground_name').innerHTML = ground.name;
    document.getElementById('ground_voivodeship').textContent = ground.voivodeship;
    document.getElementById('ground_spieces').innerHTML = species;
    document.getElementById('ground_area').innerHTML = ground.area;
    document.getElementById('ground_night_fishing').innerHTML = ground.nightFishing ? 'Tak' : 'Nie';
    document.getElementById('ground_tent').innerHTML = ground.tent ? 'Tak' : 'Nie';
    document.getElementById('ground_accommodation').innerHTML = ground.accommodation ? 'Tak' : 'Nie';
    document.getElementById('ground_spinning').innerHTML = ground.spinning ? 'Tak' : 'Nie';
}

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

function errorHandler(error) {
    var output = document.getElementById("geo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "Użytkownik nie udostępnił danych.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Dane lokalizacyjne niedostępne.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "Przekroczono czas żądania.";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "Wystąpił nieznany błąd.";
            break;
    }
}

$(document).ready(function () {
    getLocation();
});
function getLocation() {
    if (navigator.geolocation) {
        var options = { timeout: 60000 };
        navigator.geolocation.getCurrentPosition(
            showLocation,
            errorHandler,
            options);
    } else { alert("Twoja przeglądarka nie wspiera geolokalizacji!"); }
}