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
<>


<div className="flex justify-center items-center w-[1000px] sm:w-[1200px] md:w-[1400px] lg:w-[1600px] xl:w-[1800px] 2xl:w-[2000px] mx-auto pt-10">
  <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center pb-15">
Locations  </em>
</div>



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
    </>
  );
};

export default Maps;