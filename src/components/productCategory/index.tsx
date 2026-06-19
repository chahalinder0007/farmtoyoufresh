import { Button, Col, Row } from "antd";
import "./style.scss";
import { productCategories } from "./content";

const ProductCategory = () => {
  return (
    <div className="container">
      <div className="productCat">
        <div className="sectionHead">
          <span className="eyebrow">Our Harvest</span>
          <h2>Shop by Category</h2>
          <div className="rule">
            <i />
          </div>
        </div>
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
