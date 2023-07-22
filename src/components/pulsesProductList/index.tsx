import { Col, Row } from "antd";
import "./style.scss";

const PulsesProductCategory = () => {
  return (
    <div className="container">
      <h1>Pulses Product</h1>
      <Row gutter={50}>
        <Col span={6}>
          <div className="product">
            <img src="./images/pulse1.png" alt="pulse" />
            <h2>Arhar Dal</h2>
            <p>Price - $12.50</p>
            <a href="/" className="primary_btn">
              Buy Now
            </a>
          </div>
        </Col>
        <Col span={6}>
          <div className="product">
            <img src="./images/pulse2.png" alt="pulse" />
            <h2>Arhar Dal</h2>
            <p>Price - $12.50</p>
            <a href="/" className="primary_btn">
              Buy Now
            </a>
          </div>
        </Col>
        <Col span={6}>
          <div className="product">
            <img src="./images/pulse3.png" alt="pulse" />
            <h2>Arhar Dal</h2>
            <p>Price - $12.50</p>
            <a href="/" className="primary_btn">
              Buy Now
            </a>
          </div>
        </Col>
        <Col span={6}>
          <div className="product">
            <img src="./images/pulse4.png" alt="pulse" />
            <h2>Arhar Dal</h2>
            <p>Price - $12.50</p>
            <a href="/" className="primary_btn">
              Buy Now
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PulsesProductCategory;
