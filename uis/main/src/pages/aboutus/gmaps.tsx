import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons (important to display markers properly)
// We need to handle the marker icons differently since they can't be bundled properly
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Use this icon as the default for all markers
L.Marker.prototype.options.icon = defaultIcon;

const Maps = () => {
  return (
    <MapContainer 
      center={[19.0760, 72.8777]} 
      zoom={12} 
      scrollWheelZoom={false} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[19.0760, 72.8777]}>
        <Popup>
          Mumbai, India
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;