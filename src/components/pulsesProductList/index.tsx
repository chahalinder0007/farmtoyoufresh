import React from 'react';
import { Button, Col, Row } from "antd";
import { productList, productListHeading1 } from "./content";  // Make sure the path is correct
import { useAppContext } from "../../context";  // Make sure the path is correct

const PulsesProductCategory = () => {
  const { setRoute } = useAppContext();
  return (
    <div className="container">
      <h1>{productListHeading1}</h1>
      <Row gutter={50}>
        {productList.map((c) => {
          return (
            <Col key={c.key} xs={24} sm={12} lg={6}>
              <div
                className="product"
                onClick={() => c.inStock && setRoute(`${c.buttonLink}`)}
              >
                <img src={c.productImg} alt="pulse" />
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

export default PulsesProductCategory;
