import React from "react";
import HomeAboutSection from "../homeAboutSection";
import HomeSlider from "../homeSlider";
import HomeTestimonials from "../homeTestimonials";
import ProductCategory from "../productCategory";
import "./style.scss";
import ProductList from "../productList";

// interface productListTypes {
//   key: string;
//   type: string;
//   productImg: string;
//   name: string;
//   price: string;
//   buttonText: string;
//   buttonLink: string;
//   description: string;
//   inStock: boolean;
// }

const Home: React.FC = () => {
  return (
    <>
      <div className="slider">
        <HomeSlider />
      </div>
      <ProductCategory />
      <div className="productList">
        <ProductList pageHeading="Pulses Products" category="pulse" />
        <ProductList pageHeading="Spices Products" category="spice" />
      </div>
      <HomeAboutSection />
      <HomeTestimonials />
    </>
  );
};

export default Home;
