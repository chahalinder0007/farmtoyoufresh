import React, { useState } from "react";
import Home from "../home";
import About from "../about";
import Header from "../header";
import Footer from "../footer";
import Testimonials from "../testimonials";
import Contact from "../contact";
import Products from "../products";
import Blogs from "../blogs";
import BlogContent from "../blogContent";
import { useAppContext } from "../../context";
import Counter from "../counter";
import { productList } from "../products/content";
import ProductDetail from "../productDetail";

const Main: React.FC = () => {
  const { route } = useAppContext();
  const [fileName, setFileName] = useState("blog1");
  const [productInfo, setProductInfo] = useState(productList[0]);

  return (
    <>
      <Header />
      {route === "/" && <Home setProductInfo={setProductInfo} />}
      {route === "about" && <About />}
      {route === "products" && <Products setProductInfo={setProductInfo} />}
      {route === "productDetail" && (
        <ProductDetail
          setProductInfo={setProductInfo}
          productInfo={productInfo}
        />
      )}
      {route === "blogs" && <Blogs setFileName={setFileName} />}
      {route === "blogContent" && <BlogContent fileName={fileName} />}
      {route === "testimonials" && <Testimonials />}
      {route === "contact" && <Contact />}
      <Footer />
      <Counter />
    </>
  );
};

export default Main;
