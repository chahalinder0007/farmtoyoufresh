import { Col, Row } from "antd";
import "./style.scss";

const HomeTestimonials = () => {
  return (
    <div className="homeTestimonialContent">
      <div className="container">
        <Row justify="center" align="middle" gutter={50}>
          <Col span={12}>
            <img src="./images/testimonial.png" alt="product images" />
          </Col>
          <Col span={12}>
            <h1>
              What our clients are <br></br>
              <span>saying</span>
              <img src="./images/quotes.png" alt="" />
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h2>Leslile Alexnder</h2>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeTestimonials;
