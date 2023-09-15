import React from "react";
import { Button, Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./style.scss";
import { useAppContext } from "../../context";
import {
  productList1,
  productList2,
  productListHeading1,
  productListHeading2,
} from "./content";

interface productListTypes {
  key: string;
  productImg: string;
  name: string;
  price: string;
  buttonText: string;
  buttonLink: string;
}

const Products: React.FC = () => {
  const { setRoute } = useAppContext();
  const onChange = (key: string) => {
    console.log(key);
  };
  const getProductsList = (list: Array<productListTypes>) => {
    return (
      <>
        {list.map((c) => {
          return (
            <Col key={c.key} xs={24} sm={12} lg={6}>
              <div className="product">
                <img src={c.productImg} alt="pulse" />
                <h2>{c.name}</h2>
                <p>Price - {c.price}</p>
                <Button
                  onClick={() => setRoute(`${c.buttonLink}`)}
                  type="primary"
                  className="primary_btn"
                >
                  {c.buttonText}
                </Button>
              </div>
            </Col>
          );
        })}
      </>
    );
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: productListHeading1,
      children: <Row gutter={50}>{getProductsList(productList1)}</Row>,
    },
    {
      key: "2",
      label: productListHeading2,
      children: <Row gutter={50}>{getProductsList(productList2)}</Row>,
    },
  ];
  return (
    <div className="container">
      <h1>All Products</h1>
      <div className="productList products">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Products;
