import React, { useEffect } from "react";
import { ShoppingOutlined, WhatsAppOutlined } from "@ant-design/icons";
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
        pageHeading="Buying, Returns & Questions"
        headerImg="./images/inner-header-bg.png"
      />
      <div className="container policies">
        <section>
          <h2>Where to buy</h2>
          <p>
            We sell online only, on Amazon.in.
            {business.amazonUrl ? "" : " Our listing is coming soon."} Orders,
            payment, delivery, returns and refunds are handled by Amazon under
            Amazon's policies.
          </p>
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
        </section>
        <section>
          <h2>Questions and complaints</h2>
          <p>
            About an Amazon order: message us through Amazon from your order
            page. About the turmeric or the lab report: message us on WhatsApp
            or email {business.email}.
          </p>
          <p>
            {business.grievanceOfficer && (
              <>
                {business.grievanceOfficer}
                <br />
              </>
            )}
            Grievance Officer, {business.name}
            <br />
            {business.phone} · {business.email}
          </p>
          <p>
            We acknowledge every complaint within 48 hours and resolve it within
            one month.
          </p>
          <a
            className="primary_btn"
            href={whatsappLink("Hi! I have a question about your turmeric.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined /> Message us on WhatsApp
          </a>
        </section>
        <section>
          <h2>Seller details</h2>
          <dl>
            <dt>Seller</dt>
            <dd>{business.name} (partnership firm)</dd>
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
