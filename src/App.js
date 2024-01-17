import { Icon } from 'leaflet';
import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./location-pin.png"

function App() {

    const markers = [
        {
            geocode: [52.489471, -1.898575],
            popUp: "Start"
        },
        {
            geocode: [52.489671, -1.899585],
            popUp: "here"
        }
    ]

    const customIcon = new Icon({
        iconUrl : require("./location-pin.png"),
        iconSize : [38, 38]
    })

    return (
        <MapContainer center={[52.489471, -1.898575]} zoom={13}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map(marker => (
                <Marker position={marker.geocode} icon={customIcon}></Marker>
            ))}
        </MapContainer>
    );
}

export default App;
