import React, { useState } from "react";
import "./Oprojekcie.css";
import { Link } from "react-router-dom";
import Map_1 from "../map_1/Map_1";

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
          Programowanie geoportali na semestrze VIII. Projekt prezentuje
          aplikację "mundurówka". Aplikacja ukazuje bazę danych oraz mapę
          jednostek wydających sorty mundurowe, żołnierzy pobierających sorty
          mundurowe oraz pracowników pracujących w tych jednostkach. W bazie
          danych można poznać różne szczegóły dotyczące np. godzin w których
          jednostka wydaje sorty, a także jakie sorty mundurowe nie zostały
          wydane dla żołnierzy.
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
          Autorem projektu jest plut. pchor. Agata DRZYGAŁO z grupy WIG20GG1S0.
          Studentka IV roku geodezji i kartografii na specjalności
          geoinformatyka.
        </p>
        {/* <img src={authorPhoto} alt="Autor" className="author-photo" /> */}
      </div>
      <Link to="/">
        <button className="back">POWRÓT DO STRONY STARTOWEJ</button>
      </Link>
    </div>
  );
}

export default Oprojekcie;
