import React from 'react';
import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


 const LeafletMap = () => {

    // const customIcon = new L.Icon({
    //   iconUrl: '../../images/icon.png', 
      
    //   iconSize: [32, 32], // Adjust the size of the icon
    //   iconAnchor: [16, 32], // Set the anchor point of the icon
    //   popupAnchor: [0, -32], // Set the popup anchor point to appear just above the marker
    // });


  return (
   <MapContainer center={[40.409264,49.867092]} zoom={11}>
   <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; '
      />
<Marker position={[40.406853, 49.872664]} 
 icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} 
>
        <Popup>
         My house 
        </Popup>
      </Marker>
   </MapContainer>
  )
}


export default LeafletMap;