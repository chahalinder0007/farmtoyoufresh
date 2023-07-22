import React from "react";
import "./style.scss";
import type { MenuProps } from "antd";
import { Menu } from "antd";

interface NavProps {
  route: string;
  setRoute: any;
}

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Products",
    key: "products",
  },
  {
    label: "About Us",
    key: "about",
  },
  {
    label: "Quality",
    key: "quality",
  },
  {
    label: "Testimonial",
    key: "testimonial",
  },
  {
    label: "Contact Us",
    key: "contact",
  },
];

const Navigation: React.FC<NavProps> = (props) => {
  const { route, setRoute } = props;

  const onClick: MenuProps["onClick"] = (e) => {
    setRoute(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[route]}
        selectedKeys={[route]}
        mode="horizontal"
        items={items}
        className="nav"
      />
    </>
  );
};

export default Navigation;
