import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

function MarkerPlacement() {
  const positions = [
    {
      coords: [52.2297, 21.0122],
      label: "sierż.pchor.Janek KOWALSKI",
      icon: "https://img.freepik.com/premium-zdjecie/zdjecie-3d-zolnierza-armii_804007-9867.jpg",
    },
    {
      coords: [52.2398, 21.0362],
      label: "sierż.pchor.Kamil ZDONKOWSKI",
      icon: "https://img.freepik.com/premium-photo/3d-photo-army-soldier_804007-9868.jpg",
    },
    {
      coords: [52.2197, 21.0416],
      label: "sierż.pchor.Mateusz ŚWIETLICKI",
      icon: "https://img.freepik.com/free-photo/one-army-soldier-aiming-rifle-conflict-generated-by-ai_188544-40672.jpg",
    },
    {
      coords: [52.2598, 21.0224],
      label: "sierż.pchor.Michał KOWALCZYK",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69FHm2n0WYkVg-mETSvEvYcu8LSLPU6odK8Zlst5eVry2a_hoohS9PCxCSj-9fOOx17Q&usqp=CAU",
    },
    {
      coords: [52.2499, 21.0088],
      label: "sierż.pchor.Tomasz BALIŃSKI",
      icon: "https://img.freepik.com/premium-zdjecie/honor-i-poswiecenie-portret-zolnierza-opis-portretu-zolnierza_959624-4034.jpg",
    },
    {
      coords: [52.2798, 21.0478],
      label: "sierż.pchor.Kamil DOKAŃSKI",
      icon: "https://img.redro.pl/obrazy/armii-zolnierza-w-combat-uniforms-z-karabinem-szturmowym-nosnikiem-plyt-i-helmem-bojowym-sa-wlaczone-szalik-shemagh-kufiya-na-szyi-studio-strzalu-ciemnym-tle-700-91302977.jpg",
    },
  ];

  return (
    <>
      {positions.map((position, index) => (
        <Marker
          key={index}
          position={position.coords}
          icon={createRedDotIcon()}
        >
          <Popup>
            <div>
              <h3>{position.label}</h3>
              <img
                src={position.icon}
                alt={position.label}
                style={{ width: "100%" }}
              />
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function createRedDotIcon() {
  return new L.Icon({
    iconUrl: "https://www.svgrepo.com/show/212751/soldier.svg",
    iconSize: [60, 60],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42],
  });
}

export default MarkerPlacement;
