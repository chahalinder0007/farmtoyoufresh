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
import { Routes, Route, HashRouter } from "react-router-dom";

const Main: React.FC = () => {
  const [fileName, setFileName] = useState("blog1");

  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="blogs" element={<Blogs setFileName={setFileName} />} />
          <Route
            path="blogContent"
            element={<BlogContent fileName={fileName} />}
          />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
};

export default Main;
