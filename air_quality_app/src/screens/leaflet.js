import React, { useState, useEffect } from "react";
import { MapContainer, Popup, TileLayer, Circle, Marker } from "react-leaflet";
import * as L from "leaflet";
import { Icon } from "leaflet";
import "./leaflet.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import mmarker from "../components/icons/pin-location-4354.png";
import useSWR from "swr";
import axios from 'axios';
// import { CoordinatesControl } from 'react-leaflet-box-zoom';

const myIcon = new L.icon({
  iconUrl: mmarker,
  iconSize: [35, 35],
});

function Leaflet() {
  const [data, setData] = useState({});
  const [lat, setLatitude] = useState("");
  const [lon, setLongitude] = useState("");

  const url = `https://api.weatherbit.io/v2.0/current/airquality?lat=${lat}&lon=${lon}&key=b7c5d1e0507348789b52b6e2be32f5ec`;

  

  const position = [60.1699, 24.9384];

   const searchLocation = (event)=>{

    
        axios.get(url).then((response)=>{
        setData(response.data)
      
        console.log(response.data)
      
    })
    setLatitude('')
    setLongitude('') 

}


  return (
    <div className="main_container">
      <MapContainer
        center={position}
        zoom={11}
        scrollWheelZoom={false}
        className="map_container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    

        <Marker icon={myIcon} position={[lat, lon]}>
          <Popup>
          {data.data? <h1 className=''>{data.data[0].aqi}</h1> : null } 
          </Popup> 
        </Marker>
      </MapContainer>

      <div className="div_container">

        <div className="Latitude">
            <h1 className="lat_text">Enter Latitude</h1>
            <input value={lat} onChange={event => setLatitude(event.target.value)} className="input" placeholder="Lat(WGS84)"></input>

        </div>
        <div className="Longitude">
            <h1 className="lat_text">Enter Longitude</h1>
            <input value={lon} onChange={event => setLongitude(event.target.value)} className="input" placeholder="Lon(WGS84)"></input>

        </div>
        <div>
            <button className="leaf_button" onClick={searchLocation}>Search</button>
        </div>
        <div className="Latitude">
            <h1 className='right_text'>AQI:</h1>
            {data.data? <h1 className='right_text_aqi'>{data.data[0].aqi}</h1> : null } 
          </div>
      </div>
    </div>
  );
}
export default Leaflet;
