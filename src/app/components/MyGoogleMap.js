// components/MyGoogleMap.js
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '350px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyGoogleMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBaxD1kfwIUOwvxonbcuIuiUtBP97qTPUs" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* You can add markers or other components inside here. */ }
      </GoogleMap>
    </LoadScript>
  )
}

export default MyGoogleMap;
