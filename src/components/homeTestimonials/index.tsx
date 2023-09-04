import { Col, Row } from "antd";
import "./style.scss";
import { title, image, testimonials } from "./content";
import Slider from "react-slick";

const HomeTestimonials = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

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
            <Slider {...settings}>
              {testimonials.map((c) => {
                return (
                  <div key={c.key}>
                    <p>{c.comment}</p>
                    <h2>{c.name}</h2>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeTestimonials;
