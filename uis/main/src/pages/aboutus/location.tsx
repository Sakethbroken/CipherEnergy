import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import location from "../../assets/icons/location.png";
import india from "../../assets/icons/india.png";

  const locations = [
    { title: "Headquarters", address: "Hyderabad, Telangana" },
    { title: "Manufacturing", address: "Bangalore, Karnataka" },
    { title: "R and D", address: "Pune, Maharashtra" }
  ];



function Cards({ title, address }) {
  return (
<div className="flex flex-col gap-9 bg-[#8BECFF33] rounded-xl pb-5 px-2 py-2 w-[340px] sm:w-[382px] hover:shadow-md transition">
  <div className="flex mt-2 justify-between">
    <img src={location} alt="" className="w-[36px] pl-4 h-[36px] rounded-full cursor-pointer" />
    <img src={india} alt="" className="w-[28px]  h-[28px] rounded-full cursor-pointer" />
  </div>

  {/* Wrap title and button in a left-aligned container */}
  <div className="flex flex-col items-start gap-10">
    <h1 className=" font-normal text-[32px] pl-5 leading-[120%] text-white tracking-[-2.16%] align-middle cursor-pointer">
      {title}
    </h1>

    <p className="font-body font-normal pl-5 text-md text-white leading-[27px] opacity-80 align-middle">
      {address || "[address here]"}
    </p>

    <button
      className=" holo-trans pl-5 self-start text-xs sm:text-sm font-semibold w-[120px] sm:w-[150px] px-2 h-[40px] rounded-md border-2 border-[#074FF7] hover:opacity-30 transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
    >
Get Directions    </button>
  </div>
</div>

  );
}

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
  const apiKey = "AIzaSyC6I8Gri1uPiqOf-k4kVxuG9kmRi1egPl0";

  return (
    <div className="w-full overflow-x-hidden">
      {/* Title Container */}
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 pt-10">
        <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center block pb-10">
          Locations
        </em>
      </div>

      {/* Map Container */}
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0">


        <div className="w-full max-w-[1184px] py-10  mx-auto mt-10 px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row gap-12 justify-center items-center">
          {locations.map((location, index) => (
            <Cards key={index} title={location.title} address={location.address} />
          ))}
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
      </div>
    </div>
  );
};

export default Maps;