/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Tabs } from "antd";
import "./style.scss";
import { headerImg, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import ProductList from "../productList";
import { useLocation } from "react-router-dom";
import { productList } from "../products/content";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState({
    productImg: "",
    name: "",
    price: "",
    description: "",
    type: "",
    inStock: false,
    buttonText: "Buy Now",
  });
  useEffect(() => {
    const queryParams = new URLSearchParams(location?.search);
    const productId = queryParams.get("productId");
    const productDetail = productList.find((val) => val.key === productId);
    if (productDetail) {
      setProductInfo(productDetail);
    }
  }, [location?.search]);
  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container">
        <div className="productBlock">
          <Row justify={"space-between"}>
            <Col xs={24} lg={10}>
              <div className="productImg">
                <img src={productInfo.productImg} alt="" />
              </div>
            </Col>
            <Col xs={24} lg={13}>
              <div className="productInfo">
                <h1>{productInfo.name}</h1>
                <h2>{productInfo.price}</h2>
                <p>{productInfo.description}</p>
                <Button
                  disabled={!productInfo.inStock}
                  type="primary"
                  className="primary_btn"
                >
                  {productInfo.inStock
                    ? productInfo.buttonText
                    : "Out of Stock"}
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="productList">
        <Row>
          <Col span={24}>
            <ProductList
              pageHeading="Related Products"
              category={productInfo.type}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetail;
