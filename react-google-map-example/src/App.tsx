import GoogleMaps from "./components/GoogleMaps";

export default function App() {
	return (
		<>
      <p>Map</p>
			<GoogleMaps
				map
				answer={{ lat: 1, lng: 1 }}
				guess={{ lat: 0, lng: 0 }}
			/>
      <p>map with markers</p>
			<GoogleMaps
				show_result
				answer={{ lat: 1, lng: 1 }}
				guess={{ lat: 0, lng: 0 }}
			/>
      <p>Street View</p>
			<GoogleMaps streetView center={{ lat: 0, lng: 0 }} />
		</>
	);
}
