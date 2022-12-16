let panorama;
function initialize() {
	panorama = new google.maps.StreetViewPanorama(
		document.getElementById("map"),
		{
			position: { lat: 40.6599867, lng: -7.9116027 },
			pov: { heading: 115, pitch: 5 },
			zoom: 1,
			addressControl: false,
			showRoadLabels: false,
		}
	);
}

window.initialize = initialize;
