import React from "react";
import { Button, Col, Row } from "antd";
import "./style.scss";
// import { useAppContext } from "../../context";
import { headerImg, list, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import { RightOutlined, CalendarOutlined } from "@ant-design/icons";

interface BlogsProps {
  setFileName: (fileName: string) => void;
}

const Blogs: React.FC<BlogsProps> = (props) => {
  // const { setRoute } = useAppContext();
  const { setFileName } = props;
  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container">
        <div className="blogs">
          <Row>
            {list.map((c) => {
              return (
                <Col key={c.key} xs={24} sm={12} lg={8}>
                  <a
                    className="blog"
                    href={`${c.buttonLink}`}
                    onClick={() => {
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
                        <Button type="primary" className="primary_btn">
                          {c.buttonText}
                          <RightOutlined />
                        </Button>
                        {/* <div className="comments">
                          <CommentOutlined /> 02
                        </div> */}
                      </div>
                    </div>
                  </a>
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
