/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Button, Col, Row, Tabs } from "antd";
import "./style.scss";
// import { useAppContext } from "../../context";
import { headerImg, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import ProductList from "../productList";

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

interface productDetailProps {
  setProductInfo: (productInfo: productListTypes) => void;
  productInfo: productListTypes;
}

const ProductDetail: React.FC<productDetailProps> = (props) => {
  const { setProductInfo, productInfo } = props;
  // const { setRoute } = useAppContext();

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
                <Button type="primary" className="primary_btn">
                  Buy Now
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
              setProductInfo={setProductInfo}
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
