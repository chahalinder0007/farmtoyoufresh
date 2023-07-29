import React from "react";
import HeaderInnerPages from "../headerInnerPages";
import { pageHeading, headerImg, list } from "./content";
import "./style.scss";
import { Col, Row } from "antd";

const Testimonials: React.FC = () => {
  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container testimonials">
        <div className="contentSection">
          <Row justify="center" align="middle" gutter={50}>
            {list.map((c) => {
              return (
                <Col span={6}>
                  <div className="comment">
                    <div className="userPic">
                      <img src={c.icon} alt="" />
                    </div>
                    <p>{c.comment}</p>
                    <h3>{c.name}</h3>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
