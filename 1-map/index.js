let map;

const center = {
    lat: 40.66101,
    lng: -7.90971,
};

function initialize() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10,
    });
}

window.initialize = initialize;
