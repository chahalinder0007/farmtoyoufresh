import { Button, Col, Row } from "antd";
import "./style.scss";
import { productList, productListHeading1 } from "./content";
import { useAppContext } from "../../context";

const PulsesProductCategory = () => {
  const { setRoute } = useAppContext();
  return (
    <div className="container">
      <h1>{productListHeading1}</h1>
      <Row gutter={50}>
        {productList.map((c) => {
          return (
            <Col key={c.key} span={6}>
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

export default PulsesProductCategory;
