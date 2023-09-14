import { Button, Col, Row } from "antd";
import {
  HomeFilled,
  PhoneFilled,
  ClockCircleOutlined,
  MailOutlined,
  CopyrightCircleOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { about, contact, copyrightText } from "./content";
import { useAppContext } from "../../context";

const Footer = () => {
  const { setRoute } = useAppContext();
  return (
    <div className="footer">
      <div className="container footerTop">
        <Row justify="space-between">
          <Col xs={24} lg={17} className="footerAboutus">
            <h2>{about.title}</h2>
            <p>{about.text}</p>
            <Button
              onClick={() => setRoute(`${about.buttonLink}`)}
              className="readMoreBtn"
            >
              {about.buttonText}
            </Button>
          </Col>
          <Col xs={24} lg={5}>
            <h2>{contact.title}</h2>
            <ul>
              <li>
                <HomeFilled /> {contact.address}
              </li>
              <li>
                <PhoneFilled /> {contact.contactNumber}
              </li>
              <li>
                <ClockCircleOutlined /> {contact.timing}
              </li>
              <li>
                <MailOutlined /> {contact.emailId}
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="copyrights">
        <CopyrightCircleOutlined /> {copyrightText}
      </div>
    </div>
  );
};

export default Footer;
