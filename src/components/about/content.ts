import { business, labResult } from "../../business";

export const pageHeading = "From Our Fields to Your Kitchen";
export const pageNavigation = "Home>About Us";
export const headerImg = "./images/inner-header-bg.png";
export const content = {
  sideImg: "./images/slide1.jpg",
};
export const options = [
  {
    icon: "./images/fresh.png",
    title: "Family Farm",
    text: "Grown on our family's fields in Punjab and packed by the family that grew it.",
  },
  {
    icon: "./images/secured.png",
    title: "Lab-Tested",
    text: `Every batch is tested before sale. Batch ${labResult.batch}: ${labResult.value} ${labResult.measure}.`,
  },
  {
    icon: "./images/support.png",
    title: "Real Support",
    text: `Call or WhatsApp ${business.phone}, ${business.hours}.`,
  },
  {
    icon: "./images/return.png",
    title: "Replacement Promise",
    text: "Pack damaged, or not happy with the quality? Message us within 7 days and we'll replace it or refund you.",
  },
];
