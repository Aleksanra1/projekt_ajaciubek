import React from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import "./Map_2.css";
import "leaflet/dist/leaflet.css";
// import axios from "axios";

function Map_2() {
  return (
    <div>
      <MapContainer className="mapa_2" center={[52.232222, 21.0]} zoom={15}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map_2;
