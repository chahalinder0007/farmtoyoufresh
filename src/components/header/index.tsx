import Navigation from "../navigation";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import "./style.scss";
import { Col, Row } from "antd";
import React from "react";
import { logo, phoneDetail, topheaderText } from "./content";
import { business, whatsappLink } from "../../business";

const Header: React.FC = () => {
  return (
    <>
      <div className="headerBar">
        <div className="container">
          <div className="topBar">
            <Row align="middle">
              <Col span={20}>
                <p>{topheaderText}</p>
              </Col>
              <Col span={4} className="social">
                <a
                  href={business.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Farm To You Fresh on YouTube"
                >
                  <YoutubeFilled />
                </a>
                <a
                  href={whatsappLink("Hi! I'd like to know more about your turmeric.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message us on WhatsApp"
                >
                  <WhatsAppOutlined />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="mainHeader">
        <div className="container">
          <Row align="middle">
            <Col xs={18} lg={7} className="logo">
              <a href={logo.linkPath}>
                <img src={logo.imgPath} alt={logo.imgAlt} />
              </a>
            </Col>
            <Col xs={6} lg={14}>
              <Navigation />
            </Col>
            <Col xs={0} lg={3}>
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
