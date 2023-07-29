import React from "react";
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

const Blogs: React.FC = () => {
  const { setRoute } = useAppContext();

  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container">
        <div className="blogs">
          <Row>
            {list.map((c) => {
              return (
                <Col key={c.key} span={8}>
                  <div className="blog">
                    <img src={c.img} alt="" />
                    <div className="blogContent">
                      <p>
                        <CalendarOutlined /> {c.date}
                      </p>
                      <h2>{c.title}</h2>
                      <div className="bottomSection">
                        <Button
                          onClick={() => setRoute(`${c.buttonLink}`)}
                          type="primary"
                          className="primary_btn"
                        >
                          {c.buttonText}
                          <RightOutlined />
                        </Button>
                        <div className="comments">
                          <CommentOutlined /> 02
                        </div>
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
