import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import { labResult, whatsappLink } from "../../business";
import "./style.scss";

// The lab result as the home page's centrepiece: one batch, one number.
const LabBatch: React.FC = () => {
  return (
    <section className="labBatch" aria-labelledby="labBatchTitle">
      <span className="labJali" aria-hidden="true" />
      <div className="container">
        <div className="labInner">
          <div className="labFigure">
            <span className="labValue">{labResult.value}</span>
            <span className="labUnit">{labResult.measure}</span>
            <span className="labBatchNo">Batch {labResult.batch}</span>
          </div>
          <div className="labText">
            <span className="eyebrow">Lab-tested</span>
            <h2 id="labBatchTitle">A real number for every batch</h2>
            <p>
              Before our turmeric goes on sale, a lab measures its{" "}
              {labResult.measure}, the compound that gives haldi its colour.
              Batch {labResult.batch} came back at {labResult.value}. India's
              food standard asks for at least 2.0% curcuminoids in turmeric
              powder.
            </p>
            <div className="labActions">
              <a
                className="primary_btn gold_btn"
                href={whatsappLink(
                  `Hi! Could you send me the lab report for batch ${labResult.batch}?`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppOutlined /> Ask for the report
              </a>
              <a className="labLink" href="#/blogContent?name=turmeric-lab-test">
                What the number means
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabBatch;
