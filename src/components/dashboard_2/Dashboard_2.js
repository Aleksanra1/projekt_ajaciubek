import React from "react";
import MediaCard from "./Card_2";
import "./Dashboard_2.css";

function Dashboard_2() {
  const input_list = [
    {
      name: " AKADEMIK WOJSKOWY NR 1 ",
      content: "ulica Gen. S. Kaliskiego 5, 01-476, Warszawa",
      image:
        "https://www.otouczelnie.pl/assets/uploads/artykul_studia/b481a-studia-wojskowe.jpg",
    },
    {
      name: "AKADEMIK WOJSKOWY NR 2",
      content: "ulica Gen. S. Kaliskiego 5, 01-476, Warszawa",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Akademik_Alcatraz_pl._Narutowicza.jpg/1200px-Akademik_Alcatraz_pl._Narutowicza.jpg",
    },
    {
      name: "AKADEMIK WOJSKOWY NR 3",
      content: "ulica Gen. S. Kaliskiego 5, 01-476, Warszawa",
      image:
        "https://lh6.googleusercontent.com/proxy/joC01I62QdDBHzxkuyaWUC-VKpOedAANpl262dGC5TGWH_QR5-OEqufhj2kc2HmUe--Zy7jAEyadUo-nz60M4Y6jtt9D",
    },
    {
      name: "AKADEMIK WOJSKOWY NR 4",
      content: "ulica Gen. S. Kaliskiego 5, 01-476, Warszawa",
      image:
        "https://akademiki.pw.edu.pl/var/akademiki/storage/images/media/images/alkatraz/4355-1-pol-PL/Alkatraz.png",
    },
    {
      name: "AKADEMIK WOJSKOWY NR 5",
      content: "ulica Gen. S. Kaliskiego 5, 01-476, Warszawa",
      image:
        "https://bg.wat.edu.pl/wp-content/uploads/2024/01/biblioteka-scaled.jpg",
    },
    {
      name: "AKADEMIK WOJSKOWY NR 6",
      content: "ulica Gen. S. Kaliskiego 5, 01-476, Warszawa",
      image:
        "https://www.wojsko-polskie.pl/wat/u/filer_public_thumbnails/e6/4d/e64de757-6278-4b8c-b3f5-80d6d3b16eb1/slajd_sztab_oficjalne-1.jpg__1920x878_q85_crop_subsampling-2_upscale.jpg",
    },
  ];
  return (
    <div className="dashboard">
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default Dashboard_2;
