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
          <div className="zolnierze">Żołnierze</div>
          <Link to="map_1">
            <div className="services_obj_1_1">Mapa</div>
          </Link>
          <div className="services_obj_1_2">Baza Danych</div>
        </div>

        <div className="services_bottom_2">
          <div className="kompanie">Kompanie</div>
          <div className="services_option_2">
            <div className="services_obj_2_1">Mapa</div>
            <div className="services_obj_2_2">Baza Danych</div>
          </div>

          <div className="services_botton_3">
            <div className="akademiki">Akademiki</div>
            <div className="services_option_3">
              <div className="services_obj_3_1">Mapa</div>
              <div className="services_obj_3_2">Baza Danych</div>
            </div>
            <div className="box_baza_danych_1"></div>
            <div className="box_mapa_11"></div>
            <img className="baza_danych_1" src={baza_danych} alt="logo" />
            <img className="mapa_11" src={mapa} alt="logo" />

            <div className="box_baza_danych_2"></div>
            <div className="box_mapa_22"></div>
            <img className="baza_danych_2" src={baza_danych} alt="logo" />
            <img className="mapa_22" src={mapa} alt="logo" />

            <div className="box_baza_danych_3"></div>
            <div className="box_mapa_33"></div>
            <img className="baza_danych_3" src={baza_danych} alt="logo" />
            <img className="mapa_33" src={mapa} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
