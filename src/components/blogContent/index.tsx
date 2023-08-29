/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.scss";
import { headerImg, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import axios from "axios";
import ReactMarkdown from "react-markdown";

interface BlogContentProps {
  fileName: string;
}

const BlogContent: React.FC<BlogContentProps> = (props) => {
  const [text, setText] = useState("");
  const { fileName } = props;

  useEffect(() => {
    axios
      .get(`/content/${fileName}.md`, { responseType: "text" })
      .then((res) => {
        setText(res.data);
      });
  }, []);

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
