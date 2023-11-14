import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";
import { slides } from "./content";

const HomeSlider: React.FC = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover={true}
      showThumbs={false}
    >
      {slides.map((c) => {
        return (
          <div key={c.key} className={c.contentLayout}>
            <div className="slideContent">
              <div className="container">
                <h1 style={{ color: `${c.h1Color}` }}>{c.h1}</h1>
                <h2 style={{ color: `${c.h2Color}` }}>{c.h2}</h2>
                <p style={{ color: `${c.textColor}` }}>{c.text}</p>
                <a
                  type="primary"
                  className="primary_btn"
                  href={`${c.buttonLink}`}
                >
                  {c.buttonText}
                </a>
              </div>
            </div>
            <img src={c.image} alt="slider" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeSlider;
