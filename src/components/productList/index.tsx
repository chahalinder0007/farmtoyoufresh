import React from "react";
import { Col, Row } from "antd";
import { productList } from "../products/content";
import "./style.scss";

interface ProductListProps {
  pageHeading: string;
  excludeKey?: string;
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const { pageHeading, excludeKey } = props;
  const products = productList.filter((p) => p.key !== excludeKey);
  return (
    <div className="container">
      <h1>{pageHeading}</h1>
      <div className="rule">
        <i />
      </div>
      <Row gutter={50} justify="center">
        {products.map((c) => {
          return (
            <Col key={c.key} xs={24} sm={12} lg={6}>
              <a className="product" href={c.buttonLink}>
                <img src={c.productImg} alt={`${c.name}, ${c.size}`} />
                <h2>{c.name}</h2>
                <p>
                  {c.size} · ₹{c.price}
                </p>
                <span className="primary_btn">{c.buttonText}</span>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductList;
