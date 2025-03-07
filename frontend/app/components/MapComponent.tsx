"use client"; // Required for useEffect

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 6.9271, // Example: Colombo, Sri Lanka
  lng: 79.8612,
};

export default function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Add a marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
