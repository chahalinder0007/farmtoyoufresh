import { Col, Row } from "antd";
import "./style.scss";
import { title, image, testimonials } from "./content";

const HomeTestimonials = () => {
  return (
    <div className="homeTestimonialContent">
      <div className="container">
        <Row justify="center" align="middle" gutter={50}>
          <Col span={12}>
            <img src={image} alt="product images" />
          </Col>
          <Col span={12}>
            <h1>
              {title}
              <img src="./images/quotes.png" alt="" />
            </h1>
            {testimonials.map((c) => {
              return (
                <div key={c.key}>
                  <p>{c.comment}</p>
                  <h2>{c.name}</h2>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeTestimonials;
