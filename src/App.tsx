import React from "react";
import "./App.scss";
import { ConfigProvider } from "antd";
import { ContextProvider } from "./context";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./components/products";
import Blogs from "./components/blogs";
import BlogContent from "./components/blogContent";
import Home from "./components/home";
import ProductDetail from "./components/productDetail";
import Policies from "./components/policies";

// Brand theme — keeps AntD components (tabs, inputs, buttons) in
// step with the design tokens in variables.scss.
const brandTheme = {
  token: {
    colorPrimary: "#15533b",
    colorLink: "#2f7d57",
    colorLinkHover: "#0f3527",
    colorText: "#20271f",
    colorTextHeading: "#20271f",
    fontFamily: "'Mukta', -apple-system, BlinkMacSystemFont, sans-serif",
    borderRadius: 8,
  },
  components: {
    Tabs: {
      inkBarColor: "#b08d3e",
      itemColor: "#5d5f52",
      itemActiveColor: "#15533b",
      itemSelectedColor: "#15533b",
      itemHoverColor: "#2f7d57",
    },
    Input: {
      colorBgContainer: "#fffdf6",
      activeBorderColor: "#b08d3e",
      hoverBorderColor: "#cdb079",
    },
    Form: {
      labelColor: "#20271f",
    },
  },
};

const App: React.FC = () => {
  return (
    <ContextProvider>
      <ConfigProvider theme={brandTheme}>
        <Header />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetail" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogContent" element={<BlogContent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
        <Footer />
      </ConfigProvider>
    </ContextProvider>
  );
};

export default App;
