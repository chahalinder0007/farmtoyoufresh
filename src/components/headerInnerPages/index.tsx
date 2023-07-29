import React from "react";
import "./style.scss";

interface InnerPageProps {
  pageHeading: string;
  headerImg: string;
}

const HeaderInnerPages: React.FC<InnerPageProps> = (props) => {
  const { pageHeading, headerImg } = props;
  return (
    <div
      className="innerHeader"
      style={{ background: `url(${headerImg}) 0 0 no-repeat` }}
    >
      <h1>{pageHeading}</h1>
    </div>
  );
};

export default HeaderInnerPages;
