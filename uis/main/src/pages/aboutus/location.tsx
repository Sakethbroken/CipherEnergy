import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  height: '400px', 
  width: '100%'
};

const center = {
  lat: 19.0760,
  lng: 72.8777
};

const Maps = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  // Alternative way to access env variable
  const apiKey =  "AIzaSyC6I8Gri1uPiqOf-k4kVxuG9kmRi1egPl0";

  return (
    <LoadScript googleMapsApiKey="AIzaSyC6I8Gri1uPiqOf-k4kVxuG9kmRi1egPl0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{
          scrollwheel: false, // Same as scrollWheelZoom={false}in Leaflet
          fullscreenControl: true, // This adds the fullscreen button
          mapTypeControl: true,
          streetViewControl: true,
          zoomControl: true,
        }}
      >
        <Marker
          position={center}
          onClick={() => setSelectedMarker(center)}
        />
        
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              Mumbai, India
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;