import { labResult } from "../../business";

export interface Product {
  key: string;
  productImg: string;
  name: string;
  size: string;
  grams: number;
  price: number;
  buttonText: string;
  buttonLink: string;
  description: string;
}

const description = `Turmeric (haldi) powder from our family's fields in Punjab, packed in small batches. Batch ${labResult.batch} was lab-tested at ${labResult.value} ${labResult.measure}. Single ingredient: turmeric. Not certified organic.`;

export const productList: Product[] = [
  {
    key: "turmeric-400",
    productImg: "./images/turmeric-powder.png",
    name: "Turmeric (Haldi) Powder",
    size: "400 g",
    grams: 400,
    price: 299,
    buttonText: "See details",
    buttonLink: "#/productDetail?productId=turmeric-400",
    description,
  },
];
