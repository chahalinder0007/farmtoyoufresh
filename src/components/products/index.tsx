import React, { useEffect, useState } from "react";
import { Button, Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./style.scss";
import { useAppContext } from "../../context";
import {
  productList,
  productListHeading1,
  productListHeading2,
} from "./content";

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

interface productPropsType {
  setProductInfo: (productInfo: productListTypes) => void;
}

const Products: React.FC<productPropsType> = (props: any) => {
  const { setProductInfo } = props;
  const { setRoute } = useAppContext();
  const [products, setProducts] = useState<productListTypes[]>([]);

  useEffect(() => {
    getProducts("pulse");
  }, []);

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
    const category = key === "1" ? "pulse" : "spice";
    getProducts(category);
  };

  const getProductsList = (list: Array<productListTypes>) => {
    return (
      <>
        {list.map((c) => {
          return (
            <Col key={c.key} xs={24} sm={12} lg={6}>
              <a
                className="product"
                href={`${c.buttonLink}`}
                onClick={() => {
                  if (c.inStock) {
                    // setRoute(`${c.buttonLink}`);
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
      </>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: productListHeading1,
      children: <Row gutter={50}>{getProductsList(products)}</Row>,
    },
    {
      key: "2",
      label: productListHeading2,
      children: <Row gutter={50}>{getProductsList(products)}</Row>,
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
