import React, { useRef } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	StreetViewPanorama,
	Polyline,
} from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "200px",
};

const center = {
	lat: 40.657591,
	lng: -7.914606,
};

const streetViewPanoramaOptions = {
	position: { lat: center.lat, lng: center.lng },
	pov: { heading: 100, pitch: 0 },
	zoom: 1,
	addressControl: false,
	showRoadLabels: false,
	zoomControl: true,
	linksControl: false,
	enableCloseButton: false,
	motionTrackingControl: false,
	motionTracking: false,
};

const mapOptions = {
	streetViewControl: false,
};

const markerOptions = {
	icon: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
	fillColor: "green",
	fillOpacity: 1,
	strokeColor: "black",
	strokeWeight: 1,
	scale: 1,
	background: "#ffffff",
};

const polylineOptions = {
	strokeColor: "#FF0000",
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: "#FF0000",
	fillOpacity: 0.35,
	clickable: false,
	draggable: false,
	editable: false,
	visible: true,
	zIndex: 1,
};

function GoogleMaps(props) {
	const polylineRef = useRef(null);

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "YOUR_KEY",
	});

	const onGuess = (e) => {
		console.log("Clicked on: ", e.latLng.toJSON());
	};

	return (
		<>
			{isLoaded ? (
				props.map ? (
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={3}
						onClick={onGuess}
						options={mapOptions}
					/>
				) : props.streetView ? (
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={props.center}
						zoom={3}
					>
						<StreetViewPanorama
							position={props.center}
							visible={true}
							options={streetViewPanoramaOptions}
						/>
					</GoogleMap>
				) : props.show_result ? (
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={{
							lat: (props.answer.lat + props.guess.lat) / 2,
							lng: (props.answer.lng + props.guess.lng) / 2,
						}}
						zoom={3}
					>
						<Marker
							position={props.answer}
							options={markerOptions}
						/>
						<Marker position={props.guess} />
						<Polyline
							ref={polylineRef}
							options={polylineOptions}
						/>
					</GoogleMap>
				) : null
			) : null}
		</>
	);
}

export default React.memo(GoogleMaps);
