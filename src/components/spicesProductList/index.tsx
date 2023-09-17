import { Button, Col, Row } from "antd";
import "../pulsesProductList/style.scss";
import {
  productList2,
  productListHeading2,
} from "../pulsesProductList/content";  // Make sure the path is correct
import { useAppContext } from "../../context";  // Make sure the path is correct

const SpicesProductCategory = () => {
  const { setRoute } = useAppContext();
  return (
    <div className="container">
      <h1>{productListHeading2}</h1>
      <Row gutter={50}>
        {productList2.map((c) => {
          return (
            <Col key={c.key} xs={24} sm={12} lg={6}>
              <div
                className="product"
                onClick={() => c.inStock && setRoute(`${c.buttonLink}`)}
              >
                <img src={c.productImg} alt="spice" />
                <h2>{c.name}</h2>
                <p>Price - {c.price}</p>
                <Button type="primary" className="primary_btn" disabled={!c.inStock}>
                  {c.inStock ? c.buttonText : "Out of Stock"}
                </Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SpicesProductCategory;
