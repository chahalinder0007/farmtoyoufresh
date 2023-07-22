import { Button, Col, Row } from "antd";
import {
  HomeFilled,
  PhoneFilled,
  ClockCircleOutlined,
  MailOutlined,
  CopyrightCircleOutlined,
} from "@ant-design/icons";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footerTop">
        <Row justify="space-between">
          <Col span={17}>
            <h2>About Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <Button className="readMoreBtn">Read More</Button>
          </Col>
          <Col span={5}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <HomeFilled /> 11244 Nikki Lauda 455 New Zealand
              </li>
              <li>
                <PhoneFilled /> 0000 - 123 - 456789
              </li>
              <li>
                <ClockCircleOutlined /> 9:30AM - 7:30PM
              </li>
              <li>
                <MailOutlined /> mail@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="copyrights">
        <CopyrightCircleOutlined /> Farm To You Fresh
      </div>
    </div>
  );
};

export default Footer;
