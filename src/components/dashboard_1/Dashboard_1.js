import React from "react";
import MediaCard from "./Card_1";

function Dashboard_1() {
  const input_list = [
    {
      name: " st. szer. pchor. Janek",
      surname: "Kowalski",
      content: "podchorąży zamieszkujący akademik ",
      image:
        "https://img.freepik.com/premium-zdjecie/zdjecie-3d-zolnierza-armii_804007-9867.jpg",
    },
    {
      name: "st. szer. pchor. Ola",
      surname: "Jaciubek",
      content: "jakisopis Oli ",
      image:
        "https://img.freepik.com/premium-zdjecie/zdjecie-3d-zolnierza-armii_804007-9867.jpg",
    },
    {
      name: "Mateusz",
      surname: "Świetlicki",
      content: "jakisopis Mateusza ",
      image:
        "https://img.freepik.com/premium-zdjecie/zdjecie-3d-zolnierza-armii_804007-9867.jpg",
    },
    {
      name: "Agata",
      surname: "Drzygało",
      content: "jakisopis Agaty ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
  ];
  return (
    <div>
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
      <MediaCard />
    </div>
  );
}

export default Dashboard_1;
