import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

const HomeSlider: React.FC = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover={true}
      showThumbs={false}
    >
      <div>
        <img src="./images/01.jpg" alt="slider" />
      </div>
      <div>
        <img src="./images/02.jpg" alt="slider" />
      </div>
      <div>
        <img src="./images/03.jpg" alt="slider" />
      </div>
    </Carousel>
  );
};

export default HomeSlider;
