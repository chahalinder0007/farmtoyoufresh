import { Col, Row } from "antd";
import "./style.scss";

const ProductCategory = () => {
  return (
    <div className="container">
      <div className="productCat">
        <Row gutter={50}>
          <Col span={12}>
            <div
              className="category"
              style={{
                background: 'url("./images/organic-pulses.png") 0 0 no-repeat',
              }}
            >
              <h2>Organic Pulses</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <a href="/" className="primary_btn">
                View Products
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div
              className="category"
              style={{
                background: 'url("./images/organic-spices.png") 0 0 no-repeat',
              }}
            >
              <h2>Organic Spices</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <a href="/" className="primary_btn">
                View Products
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductCategory;
