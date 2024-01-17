
// DO NOT GET RID OF
import "leaflet/dist/leaflet.css"
import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";

import RoutingControl from './RoutingControl'

const Map = () => {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([38.9072, -77.0369])
  const [end, setEnd] = useState([37.7749, -122.4194])
  const [showRoutingControl, setShowRoutingControl] = useState(true);

  const maps = {
    base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  };

  const toggleRoutingControl = () => {
    setShowRoutingControl(!showRoutingControl);
  };
  

  return (
    <>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "80vh", width: "100%", padding: 0 }}
        whenCreated={map => setMap(map)}
      >
        
        {/* *************** */}
        {/* Pass in our custom control layer here, inside of the map container */}
        {/* *************** */}
        {showRoutingControl && <RoutingControl 
          position={'topleft'} 
          start={start} 
          end={end} 
          color={'#757de8'} 
        />}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
      <button onClick={toggleRoutingControl}>
            {showRoutingControl ? "Hide Routing Control" : "Show Routing Control"}
      </button>
    </>
  );
};

export default Map;
