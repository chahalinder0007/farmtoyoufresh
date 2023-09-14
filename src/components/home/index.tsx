import React from "react";
import HomeAboutSection from "../homeAboutSection";
import HomeSlider from "../homeSlider";
import HomeTestimonials from "../homeTestimonials";
import ProductCategory from "../productCategory";
import PulsesProductCategory from "../pulsesProductList";
import SpicesProductCategory from "../spicesProductList";
import "./style.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="slider">
        <HomeSlider />
      </div>
      <ProductCategory />
      <div className="productList">
        <PulsesProductCategory />
        <SpicesProductCategory />
      </div>
      <HomeAboutSection />
      <HomeTestimonials />
    </>
  );
};

export default Home;
