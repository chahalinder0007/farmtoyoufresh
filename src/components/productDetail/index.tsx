import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { ShoppingOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import "./style.scss";
import { headerImg, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import ProductList from "../productList";
import { productList } from "../products/content";
import { useAppContext } from "../../context";
import {
  brandDisclaimer,
  business,
  labResult,
  whatsappLink,
} from "../../business";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const { setCurrentPageName } = useAppContext();
  const productId = new URLSearchParams(location?.search).get("productId");
  const product =
    productList.find((p) => p.key === productId) ?? productList[0];

  useEffect(() => {
    setCurrentPageName("Turmeric");
  }, [setCurrentPageName]);

  const unitPrice = (product.price / product.grams).toFixed(2);
  const orderMessage = `Hi! I'd like to order ${product.name}, ${product.size} (₹${product.price}).`;

  // Declarations the Legal Metrology rules expect on an online listing.
  const facts: Array<[string, string]> = [
    ["Product", "Turmeric powder (single ingredient)"],
    ["Net quantity", `${product.grams} g`],
    ["MRP", `₹${product.price} (incl. of all taxes)`],
    ["Unit sale price", `₹${unitPrice} per g`],
    [
      `Lab result, batch ${labResult.batch}`,
      `${labResult.value} ${labResult.measure}`,
    ],
    ["Packed and marketed by", business.name],
    ...(business.fssaiLicence
      ? [["FSSAI licence no.", business.fssaiLicence] as [string, string]]
      : []),
    ["Country of origin", "India"],
    [
      "Storage",
      "Store in a cool, dry place away from sunlight. Close the zip after use.",
    ],
    ["Customer care", `${business.phone} · ${business.email}`],
  ];

  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container">
        <div className="productBlock">
          <Row justify="space-between" gutter={[0, 24]}>
            <Col xs={24} lg={10}>
              <div className="productImg">
                <img
                  src={product.productImg}
                  alt={`${product.name}, ${product.size}`}
                />
              </div>
            </Col>
            <Col xs={24} lg={13}>
              <div className="productInfo">
                <span className="eyebrow">Batch {labResult.batch}</span>
                <h1>{product.name}</h1>
                <div className="sizes" role="group" aria-label="Pack size">
                  {productList.map((p) => (
                    <a
                      key={p.key}
                      href={p.buttonLink}
                      className={p.key === product.key ? "size selected" : "size"}
                      aria-current={p.key === product.key ? "true" : undefined}
                    >
                      {p.size}
                    </a>
                  ))}
                </div>
                <h2>₹{product.price}</h2>
                <p className="priceNote">
                  MRP, incl. of all taxes · ₹{unitPrice} per g
                </p>
                <p>{product.description}</p>
                <div className="actions">
                  <a
                    className="primary_btn"
                    href={whatsappLink(orderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppOutlined /> Order on WhatsApp
                  </a>
                  {business.amazonUrl && (
                    <a
                      className="primary_btn gold_btn"
                      href={business.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingOutlined /> Buy on Amazon
                    </a>
                  )}
                </div>
                <dl className="facts">
                  {facts.map(([label, value]) => (
                    <React.Fragment key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </React.Fragment>
                  ))}
                </dl>
                <p className="disclaimer">{brandDisclaimer}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="productList">
        <ProductList pageHeading="Other Sizes" excludeKey={product.key} />
      </div>
    </>
  );
};

export default ProductDetail;
