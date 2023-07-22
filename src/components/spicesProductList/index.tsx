import { Col, Row } from "antd";
import "../pulsesProductList/style.scss";

const SpicesProductCategory = () => {
  return (
    <div className="container">
      <h1>Spices Product</h1>
      <Row gutter={50}>
        <Col span={6}>
          <div className="product">
            <img src="./images/spice1.png" alt="pulse" />
            <h2>Garam Masala</h2>
            <p>Price - $12.50</p>
            <a href="/" className="primary_btn">
              Buy Now
            </a>
          </div>
        </Col>
        <Col span={6}>
          <div className="product">
            <img src="./images/spice2.png" alt="pulse" />
            <h2>Garam Masala</h2>
            <p>Price - $12.50</p>
            <a href="/" className="primary_btn">
              Buy Now
            </a>
          </div>
        </Col>
        <Col span={6}>
          <div className="product">
            <img src="./images/spice3.png" alt="pulse" />
            <h2>Garam Masala</h2>
            <p>Price - $12.50</p>
            <a href="/" className="primary_btn">
              Buy Now
            </a>
          </div>
        </Col>
        <Col span={6}>
          <div className="product">
            <img src="./images/spice4.png" alt="pulse" />
            <h2>Garam Masala</h2>
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

export default SpicesProductCategory;
