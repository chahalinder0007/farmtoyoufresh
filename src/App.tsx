import React from "react";
import "./App.scss";
import { ContextProvider } from "./context";
import { HashRouter, Routes, Route } from "react-router-dom";
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

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogContent" element={<BlogContent />} />
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
