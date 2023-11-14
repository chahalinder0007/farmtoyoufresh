/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.scss";
import { headerImg, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

const BlogContent: React.FC = () => {
  const location = useLocation();
  const [text, setText] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location?.search);
    const fileName = queryParams.get("name");
    axios
      .get(`/content/${fileName}.md`, { responseType: "text" })
      .then((res) => {
        setText(res.data);
      });
  }, [location?.search]);

  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container blogContent">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </>
  );
};

export default BlogContent;
