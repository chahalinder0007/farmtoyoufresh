import React, { useEffect } from "react";
import "./style.scss";
import ProductList from "../productList";
import { useAppContext } from "../../context";
import { business } from "../../business";
import { productList } from "./content";

const Products: React.FC = () => {
  const { setCurrentPageName } = useAppContext();

  useEffect(() => {
    setCurrentPageName("Turmeric");
  }, [setCurrentPageName]);

  return (
    <div className="allProducts">
      <div className="container intro">
        <span className="eyebrow">Shop</span>
        <h1>Turmeric (Haldi) Powder</h1>
        <p>
          One product for now: turmeric from our family's fields in Punjab.{" "}
          {business.amazonUrl
            ? "Buy it on Amazon.in."
            : "Coming soon to Amazon.in."}
        </p>
      </div>
      <div className="productList products">
        <ProductList
          pageHeading={productList.length > 1 ? "Choose a Pack" : "The Pack"}
        />
      </div>
    </div>
  );
};

export default Products;
