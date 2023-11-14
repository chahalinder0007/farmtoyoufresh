import { Button, Col, Row } from "antd";
import "./style.scss";
import { productCategories } from "./content";

const ProductCategory = () => {
  return (
    <div className="container">
      <div className="productCat">
        <Row gutter={50}>
          {productCategories.map((c) => {
            return (
              <Col key={c.key} xs={24} sm={12} lg={12}>
                <a
                  className="category"
                  style={{
                    backgroundImage: `url("${c.backgroundImg}")`,
                  }}
                  href={`${c.buttonLink}`}
                >
                  <h2>{c.title}</h2>
                  <h3>{c.subHeading}</h3>
                  <p>{c.text}</p>
                  <Button type="primary" className="primary_btn">
                    {c.buttonText}
                  </Button>
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ProductCategory;
