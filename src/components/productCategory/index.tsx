import { Button, Col, Row } from "antd";
import "./style.scss";
import { productCategories } from "./content";
import { useAppContext } from "../../context";

const ProductCategory = () => {
  const { setRoute } = useAppContext();
  return (
    <div className="container">
      <div className="productCat">
        <Row gutter={50}>
          {productCategories.map((c) => {
            return (
              <Col key={c.key} span={12}>
                <div
                  className="category"
                  style={{
                    background: `url("${c.backgroundImg}") 0 0 no-repeat`,
                  }}
                  onClick={() => setRoute(`${c.buttonLink}`)}
                >
                  <h2>{c.title}</h2>
                  <p>{c.text}</p>
                  <Button type="primary" className="primary_btn">
                    {c.buttonText}
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ProductCategory;
