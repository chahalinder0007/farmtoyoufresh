import React from "react";
import "./style.scss";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useAppContext } from "../../context";
import { items } from "./content";

const Navigation: React.FC = () => {
  const { route, setRoute } = useAppContext();

  const onClick: MenuProps["onClick"] = (e) => {
    setRoute(e.key);
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
