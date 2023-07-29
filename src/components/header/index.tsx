import Navigation from "../navigation";
import { FacebookOutlined, PhoneOutlined } from "@ant-design/icons";
import "./style.scss";
import { Col, Row } from "antd";
import React from "react";
import { facebookLink, logo, phoneDetail, topheaderText } from "./content";

const Header: React.FC = () => {
  return (
    <>
      <div className="headerBar">
        <div className="container">
          <div className="topBar">
            <p>{topheaderText}</p>
            <a href={facebookLink}>
              <FacebookOutlined />
            </a>
          </div>
        </div>
      </div>
      <div className="mainHeader">
        <div className="container">
          <Row align="middle">
            <Col span={7} className="logo">
              <a href={logo.linkPath}>
                <img src={logo.imgPath} alt={logo.imgAlt} />
              </a>
            </Col>
            <Col span={14}>
              <Navigation />
            </Col>
            <Col span={3}>
              <div className="phoneNumber">
                <PhoneOutlined />
                <p>
                  <strong>{phoneDetail.text}</strong>
                  <br></br>
                  {phoneDetail.number}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Header;
