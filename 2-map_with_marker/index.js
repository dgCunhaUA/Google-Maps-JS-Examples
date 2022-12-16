let map;

const center = {
    lat: 40.66101,
    lng: -7.90971,
};

const position = {
    lat: 40.66101,
    lng: -7.90971,
};

function initialize() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10,
    });

    const marker = new google.maps.Marker({
        position: position,
        map: map,
    });
}

window.initialize = initialize;