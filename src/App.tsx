import React, { useState } from "react";
import "./App.scss";
import { ContextProvider } from "./context";
// import Main from "./components/main";
import { HashRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import Counter from "./components/counter";
import Products from "./components/products";
import Blogs from "./components/blogs";
import BlogContent from "./components/blogContent";
import Testimonials from "./components/testimonials";
import Home from "./components/home";
import ProductDetail from "./components/productDetail";
import { productList } from "./components/products/content";

const App: React.FC = () => {
  const [fileName, setFileName] = useState("blog1");
  const [productInfo, setProductInfo] = useState(productList[0]);
  return (
    <ContextProvider>
      {/* <Main /> */}
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home setProductInfo={setProductInfo} />} />
          <Route
            path="/products"
            element={<Products setProductInfo={setProductInfo} />}
          />
          <Route
            path="/productDetail"
            element={
              <ProductDetail
                setProductInfo={setProductInfo}
                productInfo={productInfo}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs setFileName={setFileName} />} />
          <Route
            path="/blogContent"
            element={<BlogContent fileName={fileName} />}
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <Footer />
      <Counter />
    </ContextProvider>
  );
};

export default App;
