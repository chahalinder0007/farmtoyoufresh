// One place for the firm's public details. Empty fields stay hidden
// on the site until they are filled in.
export const business = {
  name: "Farm To You Fresh",
  // Replace with the full registered address (as on GST and FSSAI).
  address: "New Chandigarh, SAS Nagar (Mohali), Punjab",
  phone: "+91 97807 80995",
  whatsappNumber: "919780780995",
  email: "sales@farmtoyoufresh.com",
  hours: "9:30 AM – 7:30 PM",
  // 14-digit FSSAI licence number.
  fssaiLicence: "",
  // GSTIN; must be shown on the site from 1 January 2027.
  gstin: "",
  // Grievance officer's name (Consumer Protection (E-Commerce) Rules, 2020).
  grievanceOfficer: "",
  youtube: "https://www.youtube.com/@farmtoyoufresh",
  // Amazon.in listing, once it is live.
  amazonUrl: "",
};

// The current batch's lab result. If the report gives total
// curcuminoids rather than curcumin, change `measure`.
export const labResult = {
  batch: "L-01",
  measure: "curcumin",
  value: "4.16%",
};

// Required because the brand name contains "Fresh"
// (FSSAI Advertising & Claims Regulations 2018, reg 4(7)).
export const brandDisclaimer =
  "*This is only a brand name or trade mark and does not represent its true nature.";

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
