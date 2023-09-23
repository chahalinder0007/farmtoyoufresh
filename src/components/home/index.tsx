import React from "react";
import HomeAboutSection from "../homeAboutSection";
import HomeSlider from "../homeSlider";
import HomeTestimonials from "../homeTestimonials";
import ProductCategory from "../productCategory";
// import PulsesProductCategory from "../pulsesProductList";
// import SpicesProductCategory from "../spicesProductList";
import "./style.scss";
import ProductList from "../productList";

interface productListTypes {
  key: string;
  type: string;
  productImg: string;
  name: string;
  price: string;
  buttonText: string;
  buttonLink: string;
  description: string;
  inStock: boolean;
}

interface homePropsType {
  setProductInfo: (productInfo: productListTypes) => void;
}

const Home: React.FC<homePropsType> = (props) => {
  const { setProductInfo } = props;
  return (
    <>
      <div className="slider">
        <HomeSlider />
      </div>
      <ProductCategory />
      <div className="productList">
        <ProductList
          setProductInfo={setProductInfo}
          pageHeading="Pulses Products"
          category="pulse"
        />
        <ProductList
          setProductInfo={setProductInfo}
          pageHeading="Spices Products"
          category="spice"
        />
        {/* <PulsesProductCategory setProductInfo={setProductInfo} />
        <SpicesProductCategory setProductInfo={setProductInfo} /> */}
      </div>
      <HomeAboutSection />
      <HomeTestimonials />
    </>
  );
};

export default Home;
