let map;

const center = {
    lat: 40.66101,
    lng: -7.90971,
};

const position_1 = {
    lat: 40.66101,
    lng: -7.90971,
};

const position_2 = {
    lat: 40.66101,
    lng: -7.80971,
};

function initialize() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10,
    });

    const marker_1 = new google.maps.Marker({
        position: position_1,
        map: map,
    });

    const marker_2 = new google.maps.Marker({
        position: position_2,
        icon: "./assets/pin.png",
        map: map,
    });
}

window.initialize = initialize;