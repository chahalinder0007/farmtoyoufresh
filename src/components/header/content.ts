import { business } from "../../business";

export const topheaderText = "Turmeric from our family farm in Punjab";

export const logo = {
  imgPath: "./images/logo.svg",
  imgAlt: "Farm To You Fresh",
  linkPath: "/",
};
export const phoneDetail = {
  // Without spaces, so it fits the header's narrow column.
  number: business.phone.replace(/\s/g, ""),
  text: "Call us now",
};
