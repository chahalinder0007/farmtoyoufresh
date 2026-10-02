import React from "react";
import HomeAboutSection from "../homeAboutSection";
import HomeSlider from "../homeSlider";
import LabBatch from "../labBatch";
import ProductList from "../productList";
import "./style.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="slider">
        <HomeSlider />
      </div>
      <div className="productList">
        <ProductList pageHeading="Our Turmeric" />
      </div>
      <LabBatch />
      <HomeAboutSection />
    </>
  );
};

export default Home;
