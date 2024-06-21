import React from "react";
import MediaCard from "./Card_3";
import "./Dashboard_3.css";
import { Link } from "react-router-dom";

function Dashboard_3() {
  const input_list = [
    {
      name: " KOMPANIA NR 7 ",
      content: "znajduje się w akademiku wojskowym nr 1",
      image:
        "https://sklep-system.pl/wp-content/uploads/2019/01/znak-cyfra-7-min.png",
    },
    {
      name: "KOMPANIA NR 1",
      content: "znajduje się w akademiku wojskowym nr 3",
      image:
        "https://sklep-system.pl/wp-content/uploads/2019/01/znak-cyfra-1-min.png",
    },
    {
      name: "KOMPANIA NR 4",
      content: "znajduje się w akademiku wojskowym nr 2",
      image:
        "https://sklep-system.pl/wp-content/uploads/2019/01/znak-cyfra-4-min.png",
    },
    {
      name: "KOMPANIA NR 3",
      content: "znajduje się w akademiku wojskowym nr 5",
      image:
        "https://www.sklepbhpippoz.pl/galerie/z/znak-cyfra-3-na-plycie-pcv-80_22043_p.webp",
    },
    {
      name: "KOMPANIA NR 9",
      content: "znajduje się w akademiku wojskowym nr 6",
      image:
        "https://www.sklepbhpippoz.pl/galerie/z/znak-cyfra-9-na-plycie-pcv-80_22037_p.webp",
    },
    {
      name: "KOMPANIA NR 5",
      content: "znajduje się w akademiku wojskowym nr 4",
      image:
        "https://www.sklepbhpippoz.pl/galerie/z/znak-cyfra-5-na-plycie-pcv-80_22041_p.webp",
    },
  ];
  return (
    <div className="dashboard">
      <div className="dashboard_2A">
        <Link to="/services/dashboard_3/dashboard_3a">
          <button className="list">BAZA DANYCH LISTA</button>
        </Link>
      </div>
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

export default Dashboard_3;
