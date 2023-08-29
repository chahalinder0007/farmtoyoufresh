import React from "react";
import "./style.scss";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="/">Home</a>,
    key: "/",
  },
  {
    label: <a href="products">Products</a>,
    key: "products",
  },
  {
    label: <a href="about">About Us</a>,
    key: "about",
  },
  {
    label: <a href="blogs">Blogs</a>,
    key: "blogs",
  },
  {
    label: <a href="testimonials">Testimonial</a>,
    key: "testimonials",
  },
  {
    label: <a href="contact">Contact Us</a>,
    key: "contact",
  },
];

const Navigation: React.FC = () => {
  const route: any = localStorage.getItem("route") || "/";

  const onClick: MenuProps["onClick"] = (e) => {
    localStorage.setItem("route", e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[route]}
        mode="horizontal"
        items={items}
        className="nav"
      />
    </>
  );
};

export default Navigation;
