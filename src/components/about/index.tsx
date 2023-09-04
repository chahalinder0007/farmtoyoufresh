import React, { useEffect, useState } from "react";
import HeaderInnerPages from "../headerInnerPages";
import { pageHeading, headerImg, content, options } from "./content";
import "./style.scss";
import { Col, Row } from "antd";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const About: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get(`/content/aboutus.md`, { responseType: "text" }).then((res) => {
      setText(res.data);
    });
  }, []);

  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container aboutUs">
        <div className="aboutContent">
          <Row gutter={50}>
            <Col span={12}>
              <div className="textBlock">
                <ReactMarkdown>{text}</ReactMarkdown>
              </div>
            </Col>
            <Col span={12}>
              <img src={content.sideImg} alt="" />
            </Col>
          </Row>
          <Row justify="center" align="middle" gutter={50}>
            {options.map((c) => {
              return (
                <Col span={6}>
                  <div className="options">
                    <div className="optIcon">
                      <img src={c.icon} alt="" />
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
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

export default About;
