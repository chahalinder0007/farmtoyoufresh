import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";
import { kicker, slides } from "./content";

const HomeSlider: React.FC = () => {
  return (
    <Carousel
      autoPlay={slides.length > 1}
      infiniteLoop={true}
      interval={5500}
      transitionTime={750}
      stopOnHover={true}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={slides.length > 1}
    >
      {slides.map((c) => {
        return (
          <div key={c.key} className={c.contentLayout}>
            <span className="heroJali" aria-hidden="true" />
            <div className="slideContent">
              <div className="container">
                <div className="heroKicker">
                  <span className="deva">{kicker}</span>
                </div>
                {c.h1 && <h1>{c.h1}</h1>}
                {c.h2 && <h2>{c.h2}</h2>}
                {c.text && <p>{c.text}</p>}
                <a className="primary_btn" href={`${c.buttonLink}`}>
                  {c.buttonText}
                </a>
              </div>
            </div>
            <img src={c.image} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeSlider;
