import React, { useState } from "react";
import "./Oprojekcie.css";
import { Link } from "react-router-dom";
import Map_1 from "../map_1/Map_1";
import ja from "./ja.jpg";

function Oprojekcie() {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="about">
      <div className="about_project">
        <h1>O PROJEKCIE</h1>
        <p>
          Projekt został stworzony na potrzeby zajęć projektowych z przedmiotu
          Programowanie Geoportali. W projekcie stworzno geoportal tematyczny
          poświecony podchorązym na kompanii. Aplikacja zawiera trzy bazy
          danych: bazę danych podchorążych, bazę danych kompanii oraz baze
          danych akademików oraz trzy mapy: mapę podchorążych, mapę kompanii
          oraz mapę akademików. W bazach danych możemy dowiedzieć się głównie
          jakim podchorążym poświęcony jest geoportal oraz w jakich akademikach
          mieszkają, jakie te akademiki mają adresy oraz jakie kompanie znajdują
          się w poszczególnych akademikach.
        </p>
        <button onClick={handleShowMap} className="map-link">
          {showMap ? "UKRYJ MAPĘ" : "POKAŻ MAPĘ"}
        </button>
        {showMap && (
          <div className="map-container">
            {" "}
            <Map_1 />{" "}
          </div>
        )}
      </div>
      <div className="about_author">
        <h1>O AUTORZE</h1>
        <p>
          Autorem projektu jest sierż. pchor. Aleksandra Jaciubek z grupy
          WIG20GG1S0. Studentka IV roku geodezji i kartografii, specjalność
          geoinformatyka. Aktualnie będąca żołnierzem 7 kompanii oraz
          zamieszkująca akademik wojskowy nr 1.
        </p>
        <img src={ja} alt="ja" className="autor" />
      </div>
      <Link to="/">
        <button className="back">POWRÓT</button>
      </Link>
    </div>
  );
}

export default Oprojekcie;
