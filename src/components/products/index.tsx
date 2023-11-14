/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./style.scss";
import {
  productList,
  productListHeading1,
  productListHeading2,
} from "./content";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context";

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

const Products: React.FC = () => {
  const { setCurrentPageName } = useAppContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  const category = queryParams.get("productCategory") || "pulse";
  const [products, setProducts] = useState<productListTypes[]>([]);

  useEffect(() => {
    setCurrentPageName("Products");
    getProducts(category);
  }, [category]);

  const getProducts = (category: string) => {
    const productCat: productListTypes[] = [];
    productList.forEach((val: productListTypes) => {
      if (val.type === category) {
        productCat.push(val);
      }
    });
    if (productCat.length) {
      setProducts(productCat);
    }
  };

  const onChange = (key: string) => {
    getProducts(key);
  };

  const getProductsList = (list: Array<productListTypes>) => {
    return (
      <>
        {list.map((c) => {
          return (
            <Col key={c.key} xs={24} sm={12} lg={6}>
              <a className="product" href={`${c.buttonLink}`}>
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
      </>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "pulse",
      label: productListHeading1,
      children: <Row gutter={50}>{getProductsList(products)}</Row>,
    },
    {
      key: "spice",
      label: productListHeading2,
      children: <Row gutter={50}>{getProductsList(products)}</Row>,
    },
  ];

  return (
    <div className="container">
      <h1>All Products</h1>
      <div className="productList products">
        <Tabs defaultActiveKey={category} items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Products;
