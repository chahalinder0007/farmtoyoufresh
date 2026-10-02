/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.scss";
import { headerImg, pageHeading } from "./content";
import HeaderInnerPages from "../headerInnerPages";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

const missingNote =
  "## This note is no longer available\n\n[See all notes from the farm](#/blogs)";

const BlogContent: React.FC = () => {
  const location = useLocation();
  const [text, setText] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location?.search);
    const fileName = queryParams.get("name");
    axios
      .get(`/content/${fileName}.md`, { responseType: "text" })
      .then((res) => {
        // The dev server answers unknown paths with index.html.
        const body = typeof res.data === "string" ? res.data : "";
        setText(body.trimStart().startsWith("<") ? missingNote : body);
      })
      .catch(() => setText(missingNote));
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
