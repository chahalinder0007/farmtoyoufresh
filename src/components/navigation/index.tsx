import React, { useState } from "react";
import "./style.scss";
import { items } from "./content";
import { useAppContext } from "../../context";

const Navigation: React.FC = () => {
  const { currentPageName, setCurrentPageName } = useAppContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavClick = (currentPage: any) => {
    setCurrentPageName(currentPage);
  };

  return (
    <>
      <div className="navWrapper">
        <div
          className="navMenu"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav" style={{ display: `${toggleMenu ? "flex" : ""}` }}>
          {items?.map((item) => {
            return (
              <li
                key={item?.key}
                className={currentPageName === item?.label ? "selected" : ""}
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                <a onClick={() => handleNavClick(item?.label)} href={item?.key}>
                  {item?.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
