import React, { useEffect } from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import HeaderInnerPages from "../headerInnerPages";
import { useAppContext } from "../../context";
import { brandDisclaimer, business, whatsappLink } from "../../business";
import "./style.scss";

const Policies: React.FC = () => {
  const { setCurrentPageName } = useAppContext();

  useEffect(() => {
    setCurrentPageName("Policies");
    window.scrollTo({ top: 0 });
  }, [setCurrentPageName]);

  return (
    <>
      <HeaderInnerPages
        pageHeading="Orders, Returns & Grievances"
        headerImg="./images/inner-header-bg.png"
      />
      <div className="container policies">
        <section>
          <h2>Ordering and payment</h2>
          <p>
            Order on WhatsApp at {business.phone}. We confirm the pack, the
            price and the delivery before you pay. Payment is by UPI, once we
            have confirmed your order.
          </p>
          <a
            className="primary_btn"
            href={whatsappLink("Hi! I'd like to order your turmeric.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined /> Order on WhatsApp
          </a>
        </section>
        <section>
          <h2>Delivery</h2>
          <p>
            We deliver to your door inside Omaxe New Chandigarh at no charge.
            For any other address we tell you the courier charge before you
            pay.
          </p>
        </section>
        <section>
          <h2>Returns, replacements and refunds</h2>
          <p>
            Because this is food, opened packs can't be returned. If a pack
            arrives damaged or leaking, isn't what you ordered, or you're not
            happy with its quality, message us within 7 days of delivery with a
            photo. We'll replace it or refund you in full. Refunds go back to
            the account you paid from within 7 days.
          </p>
          {business.amazonUrl && (
            <p>Orders placed on Amazon follow Amazon's return and refund policy.</p>
          )}
        </section>
        <section>
          <h2>Grievance officer</h2>
          <p>
            {business.grievanceOfficer && (
              <>
                {business.grievanceOfficer}
                <br />
              </>
            )}
            Grievance Officer, {business.name}
            <br />
            {business.address}
            <br />
            {business.phone} · {business.email}
          </p>
          <p>
            We acknowledge every complaint within 48 hours and resolve it within
            one month.
          </p>
        </section>
        <section>
          <h2>Seller details</h2>
          <dl>
            <dt>Seller</dt>
            <dd>{business.name} (partnership firm)</dd>
            <dt>Address</dt>
            <dd>{business.address}</dd>
            {business.fssaiLicence && (
              <>
                <dt>FSSAI licence no.</dt>
                <dd>{business.fssaiLicence}</dd>
              </>
            )}
            {business.gstin && (
              <>
                <dt>GSTIN</dt>
                <dd>{business.gstin}</dd>
              </>
            )}
            <dt>Customer care</dt>
            <dd>
              {business.phone} · {business.email} · {business.hours}
            </dd>
          </dl>
          <p className="disclaimer">{brandDisclaimer}</p>
        </section>
      </div>
    </>
  );
};

export default Policies;
