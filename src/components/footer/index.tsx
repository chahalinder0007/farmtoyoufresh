import { Col, Row } from "antd";
import {
  PhoneFilled,
  ClockCircleOutlined,
  MailOutlined,
  CopyrightCircleOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import "./style.scss";
import { about, contact, copyrightText } from "./content";
import { useAppContext } from "../../context";
import { brandDisclaimer, business } from "../../business";

const Footer = () => {
  const { setCurrentPageName } = useAppContext();
  return (
    <div className="footer">
      <div className="container footerTop">
        <Row justify="space-between">
          <Col xs={24} lg={15} className="footerAboutus">
            <h2>{about.title}</h2>
            <p>{about.text}</p>
            <a
              onClick={() => setCurrentPageName("About Us")}
              href={"#/about"}
              className="readMoreBtn"
            >
              {about.buttonText}
            </a>
          </Col>
          <Col xs={24} lg={7}>
            <h2>{contact.title}</h2>
            <ul>
              <li>
                <PhoneFilled /> {contact.contactNumber}
              </li>
              <li>
                <ClockCircleOutlined /> {contact.timing}
              </li>
              <li>
                <MailOutlined /> {contact.emailId}
              </li>
              <li>
                <YoutubeFilled />
                <a href={business.youtube} target="_blank" rel="noopener noreferrer">
                  Farm to YOU Fresh on YouTube
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="copyrights">
        <p>
          <CopyrightCircleOutlined /> {copyrightText}
          {business.fssaiLicence && <> · FSSAI Lic. No. {business.fssaiLicence}</>}
          {business.gstin && <> · GSTIN {business.gstin}</>}
          {" · "}
          <a href="#/policies">Orders, returns &amp; grievances</a>
        </p>
        <p className="disclaimer">{brandDisclaimer}</p>
      </div>
    </div>
  );
};

export default Footer;
