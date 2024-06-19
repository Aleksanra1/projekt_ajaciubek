import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

function MarkerPlacement() {
  const positions = [
    {
      coords: [52.2297, 21.0122],
      label: "AKADEMIK WOJSKOWY NR 1",
      icon: "https://www.otouczelnie.pl/assets/uploads/artykul_studia/b481a-studia-wojskowe.jpg",
    },
    {
      coords: [52.2398, 21.0362],
      label: "AKADEMIK WOJSKOWY NR 2",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Akademik_Alcatraz_pl._Narutowicza.jpg/1200px-Akademik_Alcatraz_pl._Narutowicza.jpg",
    },
    {
      coords: [52.2197, 21.0416],
      label: "AKADEMIK WOJSKOWY NR 3",
      icon: "https://lh6.googleusercontent.com/proxy/joC01I62QdDBHzxkuyaWUC-VKpOedAANpl262dGC5TGWH_QR5-OEqufhj2kc2HmUe--Zy7jAEyadUo-nz60M4Y6jtt9D",
    },
    {
      coords: [52.2598, 21.0224],
      label: "AKADEMIK WOJSKOWY NR 4",
      icon: "https://akademiki.pw.edu.pl/var/akademiki/storage/images/media/images/alkatraz/4355-1-pol-PL/Alkatraz.png",
    },
    {
      coords: [52.2499, 21.0088],
      label: "AKADEMIK WOJSKOWY NR 5",
      icon: "https://bg.wat.edu.pl/wp-content/uploads/2024/01/biblioteka-scaled.jpg",
    },
    {
      coords: [52.2798, 21.0478],
      label: "AKADEMIK WOJSKOWY NR 6",
      icon: "https://www.wojsko-polskie.pl/wat/u/filer_public_thumbnails/e6/4d/e64de757-6278-4b8c-b3f5-80d6d3b16eb1/slajd_sztab_oficjalne-1.jpg__1920x878_q85_crop_subsampling-2_upscale.jpg",
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
    iconUrl: "https://cdn-icons-png.flaticon.com/512/355/355860.png",
    iconSize: [30, 30],
    iconAnchor: [15, 42],
  });
}

export default MarkerPlacement;
