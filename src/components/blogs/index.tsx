import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import "./style.scss";
import { useAppContext } from "../../context";
import { headerImg, list, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import {
  RightOutlined,
  CommentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

interface BlogsProps {
  setFileName: (fileName: string) => void;
}

const Blogs: React.FC<BlogsProps> = (props) => {
  const { setRoute } = useAppContext();
  const { setFileName } = props;
  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container">
        <div className="blogs">
          <Row>
            {list.map((c) => {
              return (
                <Col key={c.key} span={8}>
                  <div
                    className="blog"
                    onClick={() => {
                      setRoute(`${c.buttonLink}`);
                      setFileName(`${c.fileName}`);
                    }}
                  >
                    <img src={c.img} alt="" />
                    <div className="blogContent">
                      <p>
                        <CalendarOutlined /> {c.date}
                      </p>
                      <h2>{c.title}</h2>
                      <div className="bottomSection">
                        <Button
                          onClick={() => {
                            setRoute(`${c.buttonLink}`);
                            setFileName(`${c.fileName}`);
                          }}
                          type="primary"
                          className="primary_btn"
                        >
                          {c.buttonText}
                          <RightOutlined />
                        </Button>
                        {/* <div className="comments">
                          <CommentOutlined /> 02
                        </div> */}
                      </div>
                    </div>
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

export default Blogs;
