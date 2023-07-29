import React from "react";
import Home from "../home";
import About from "../about";
import Header from "../header";
import Footer from "../footer";
import { useAppContext } from "../../context";
import Testimonials from "../testimonials";
import Contact from "../contact";
import Products from "../products";
import Blogs from "../blogs";

const Main: React.FC = () => {
  const { route } = useAppContext();
  return (
    <>
      <Header />
      {route === "/" && <Home />}
      {route === "about" && <About />}
      {route === "products" && <Products />}
      {route === "blogs" && <Blogs />}
      {route === "testimonials" && <Testimonials />}
      {route === "contact" && <Contact />}
      <Footer />
    </>
  );
};

export default Main;
