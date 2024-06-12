import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import baza_danych from "./baza_danych.jpg";
import mapa from "./mapa.jpg";

function Services() {
  return (
    <div className="services">
      <div className="services_title">Dostepne usługi</div>
      <div className="services_bottom">
        <div className="serives_option_1">
          <div className="zolnierze">ŻOŁNIERZE</div>
          <Link to="map_1">
            <div className="services_obj_1_1">MAPA</div>
          </Link>
          <div className="services_obj_1_2">BAZA ŻOŁNIERZY</div>
        </div>

        <div className="services_bottom_2">
          <div className="kompanie">KOMPANIE</div>
          <div className="services_option_2">
            <div className="services_obj_2_1">MAPA</div>
            <div className="services_obj_2_2">BAZA KOMPANII</div>
          </div>

          <div className="services_botton_3">
            <div className="akademiki">AKADEMIKI</div>
            <div className="services_option_3">
              <div className="services_obj_3_1">MAPA</div>
              <div className="services_obj_3_2">BAZA AKADEMIKÓW</div>
            </div>

            <img className="baza_danych_1" src={baza_danych} alt="logo" />
            <img className="mapa_11" src={mapa} alt="logo" />

            <img className="baza_danych_2" src={baza_danych} alt="logo" />
            <img className="mapa_22" src={mapa} alt="logo" />

            <img className="baza_danych_3" src={baza_danych} alt="logo" />
            <img className="mapa_33" src={mapa} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
