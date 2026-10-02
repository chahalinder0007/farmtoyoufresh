import { business } from "../../business";

export const about = {
  title: "About Us",
  text: "Farm To You Fresh is a farming family from Punjab, selling turmeric from our own fields. Every batch is lab-tested before it goes on sale.",
  buttonText: "Read More",
  buttonLink: "about",
};

export const contact = {
  title: "Contact Us",
  contactNumber: business.phone,
  timing: business.hours,
  emailId: business.email,
};

export const copyrightText = `${new Date().getFullYear()} ${business.name}*`;
