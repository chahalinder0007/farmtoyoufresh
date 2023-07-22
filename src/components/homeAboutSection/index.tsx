import { Col, Row } from "antd";
import "./style.scss";

const HomeAboutSection = () => {
  return (
    <div className="container homeAboutContent">
      <Row justify="center" align="middle" gutter={50}>
        <Col span={12}>
          <div className="aboutContent">
            <h4>Company Profile</h4>
            <h2>About Farm To You Fresh</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <a href="/" className="primary_btn">
              View More
            </a>
          </div>
        </Col>
        <Col span={12}>
          <div className="aboutImage">
            <img src="./images/about.png" alt="product images" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAboutSection;
