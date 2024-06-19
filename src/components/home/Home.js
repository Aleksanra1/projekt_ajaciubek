import React from "react";
import "./Home.css";
import home_photo from "./home_photo.jpg";
import { Link } from "react-router-dom";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <Link to="oprojekcie">
          <div className="home_top_about">O projekcie</div>
        </Link>
      </div>
      <div className="home_bottom">
        <div className="home_left">
          <img className="home_photo" src={home_photo} alt="logo" />
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>

          <div className="home_right_subtitle">
            GEOPORTAL TEMATYCZNY POŚWIĘCONY PODCHORĄŻYM NA KOMPANII
          </div>
          <Link to="services">
            <button className="home_right_button">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
