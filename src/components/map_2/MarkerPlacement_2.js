import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

function MarkerPlacement() {
  const positions = [
    {
      coords: [52.2297, 21.0122],
      label: "KOMPANIA NR 7",
      icon: "https://sklep-system.pl/wp-content/uploads/2019/01/znak-cyfra-7-min.png",
    },
    {
      coords: [52.2398, 21.0362],
      label: "KOMPANIA NR 1",
      icon: "https://sklep-system.pl/wp-content/uploads/2019/01/znak-cyfra-1-min.png",
    },
    {
      coords: [52.2197, 21.0416],
      label: "KOMPANIA NR 4",
      icon: "https://sklep-system.pl/wp-content/uploads/2019/01/znak-cyfra-4-min.png",
    },
    {
      coords: [52.2598, 21.0224],
      label: "KOMPANIA NR 3",
      icon: "https://www.sklepbhpippoz.pl/galerie/z/znak-cyfra-3-na-plycie-pcv-80_22043_p.webp",
    },
    {
      coords: [52.2499, 21.0088],
      label: "KOMPANIA NR 9",
      icon: "https://www.sklepbhpippoz.pl/galerie/z/znak-cyfra-9-na-plycie-pcv-80_22037_p.webp",
    },
    {
      coords: [52.2798, 21.0478],
      label: "KOMPANIA NR 5",
      icon: "https://www.sklepbhpippoz.pl/galerie/z/znak-cyfra-5-na-plycie-pcv-80_22041_p.webp",
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
    iconUrl:
      "https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/dot-large-1.png",
    iconSize: [30, 30],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42],
  });
}

export default MarkerPlacement;
