/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import { useAppContext } from "../../context"; // Make sure the path is correct
import { productList } from "../products/content";
import "./style.scss";

interface productListTypes {
  key: string;
  type: string;
  productImg: string;
  name: string;
  price: string;
  buttonText: string;
  buttonLink: string;
  description: string;
  inStock: boolean;
}

interface pulsesPropsType {
  setProductInfo: (productInfo: productListTypes) => void;
  pageHeading: string;
  category: string;
}

const ProductList: React.FC<pulsesPropsType> = (props) => {
  const { setProductInfo, pageHeading, category } = props;
  const { setRoute } = useAppContext();
  const [products, setProducts] = useState<productListTypes[]>([]);
  useEffect(() => {
    if (productList.length) {
      const productCat: productListTypes[] = [];
      productList.forEach((val: productListTypes) => {
        if (val.type === category) {
          productCat.push(val);
        }
      });
      if (productCat.length) {
        setProducts(productCat.slice(0, 4));
      }
    }
  }, []);
  return (
    <div className="container">
      <h1>{pageHeading}</h1>
      <Row gutter={50}>
        {products.map((c) => {
          return (
            <Col key={c.key} xs={24} sm={12} lg={6}>
              <a
                className="product"
                href={`${c.buttonLink}`}
                onClick={() => {
                  if (c.inStock) {
                    setProductInfo(c);
                  }
                }}
              >
                <img src={c.productImg} alt="pulse" />
                <h2>{c.name}</h2>
                <p>Price - {c.price}</p>
                <Button
                  type="primary"
                  className="primary_btn"
                  disabled={!c.inStock}
                >
                  {c.inStock ? c.buttonText : "Out of Stock"}
                </Button>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductList;
