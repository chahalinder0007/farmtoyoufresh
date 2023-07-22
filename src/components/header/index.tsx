import Navigation from "../navigation";
import { FacebookOutlined, PhoneOutlined } from "@ant-design/icons";
import "./style.scss";
import { Col, Row } from "antd";
import React from "react";

interface HeaderProps {
  route: string;
  setRoute: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { route, setRoute } = props;
  return (
    <>
      <div className="headerBar">
        <div className="container">
          <div className="topBar">
            <p>Buy organic - dals & pulses/spices online at best price</p>
            <a href="/">
              <FacebookOutlined />
            </a>
          </div>
        </div>
      </div>
      <div className="mainHeader">
        <div className="container">
          <Row align="middle">
            <Col span={7} className="logo">
              <a href="/">
                <img src="./images/logo.png" alt="Farm To You Fresh" />
              </a>
            </Col>
            <Col span={14}>
              <Navigation route={route} setRoute={setRoute} />
            </Col>
            <Col span={3}>
              <div className="phoneNumber">
                <PhoneOutlined />
                <p>
                  <strong>Call us now</strong>
                  <br></br>+123 456 890
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
