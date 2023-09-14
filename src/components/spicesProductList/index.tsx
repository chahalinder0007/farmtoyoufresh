import { Button, Col, Row } from "antd";
import "../pulsesProductList/style.scss";
import {
  productList2,
  productListHeading2,
} from "../pulsesProductList/content";
import { useAppContext } from "../../context";

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
                onClick={() => setRoute(`${c.buttonLink}`)}
              >
                <img src={c.productImg} alt="pulse" />
                <h2>{c.name}</h2>
                <p>Price - {c.price}</p>
                <Button type="primary" className="primary_btn">
                  {c.buttonText}
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
