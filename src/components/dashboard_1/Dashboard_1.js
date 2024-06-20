import React from "react";
import MediaCard from "./Card_1";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard_1() {
  const input_list = [
    {
      name: " st. szer. pchor. Janek",
      surname: "Kowalski",
      content: "podchorąży zamieszkujący akademik wojskowy nr 1",
      image:
        "https://img.freepik.com/premium-zdjecie/zdjecie-3d-zolnierza-armii_804007-9867.jpg",
    },
    {
      name: "st. szer. pchor. Kamil",
      surname: "Zdonkowski",
      content: "podchorąży zamieszkujący akademik wojskowy nr 2 ",
      image:
        "https://img.freepik.com/premium-photo/3d-photo-army-soldier_804007-9868.jpg",
    },
    {
      name: "st. szer. pchor. Mateusz",
      surname: "Świetlicki",
      content: "podchorąży zamieszkujący akademik wojskowy nr 2 ",
      image:
        "https://img.freepik.com/free-photo/one-army-soldier-aiming-rifle-conflict-generated-by-ai_188544-40672.jpg",
    },
    {
      name: "st. szer. pchor. Michał",
      surname: "Kowalczyk",
      content: "podchorąży zamieszkujący akademik wojskowy nr 4 ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69FHm2n0WYkVg-mETSvEvYcu8LSLPU6odK8Zlst5eVry2a_hoohS9PCxCSj-9fOOx17Q&usqp=CAU",
    },
    {
      name: "st. szer. pchor.Tomasz",
      surname: "Baliński",
      content: "podchorąży zamieszkujący akademik wojskowy nr 3",
      image:
        "https://img.freepik.com/premium-zdjecie/honor-i-poswiecenie-portret-zolnierza-opis-portretu-zolnierza_959624-4034.jpg",
    },
    {
      name: "st. szer. pchor.Kamil",
      surname: "Dokański",
      content: "podchorąży zamieszkujący akademik wojskowy nr 5",
      image:
        "https://img.redro.pl/obrazy/armii-zolnierza-w-combat-uniforms-z-karabinem-szturmowym-nosnikiem-plyt-i-helmem-bojowym-sa-wlaczone-szalik-shemagh-kufiya-na-szyi-studio-strzalu-ciemnym-tle-700-91302977.jpg",
    },
  ];
  return (
    <div className="dashboard">
      <div className="dashboard_1A">
        <Link to="dashboard_1a">
          <button className="list">LISTA</button>
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

export default Dashboard_1;
