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
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="container">
        <h1>{pageHeading}</h1>
        <div className="rule">
          <i />
        </div>
      </div>
    </div>
  );
};

export default HeaderInnerPages;
