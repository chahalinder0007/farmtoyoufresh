import { labResult } from "../../business";

// "From the field to the kitchen"
export const kicker = "खेत से रसोई तक";

export const slides = [
  {
    key: "1",
    contentLayout: "sideContext",
    image: "./images/slide1.jpg",
    h1: "Haldi from our family's fields",
    h2: "Grown in Punjab by our family, tested by a lab",
    text: `Batch ${labResult.batch} lab-tested at ${labResult.value} ${labResult.measure}.`,
    buttonText: "See the turmeric",
    buttonLink: "#/products",
  },
];
