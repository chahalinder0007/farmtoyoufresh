import { Col, Row } from "antd";
import "./style.scss";
import { homeAboutContent } from "./content";
import { useAppContext } from "../../context";

const HomeAboutSection = () => {
  const { setCurrentPageName } = useAppContext();
  return (
    <div className="container homeAboutContent">
      <Row justify="center" align="middle" gutter={50}>
        <Col xs={24} lg={12}>
          <div className="aboutContent">
            <h4 style={{ color: `${homeAboutContent.smallTitleColor}` }}>
              {homeAboutContent.smallTitle}
            </h4>
            <h2>{homeAboutContent.mainTitle}</h2>
            <p>{homeAboutContent.aboutText}</p>
            <a
              onClick={() => setCurrentPageName("About Us")}
              href={`#/${homeAboutContent.buttonLink}`}
              className="primary_btn"
            >
              {homeAboutContent.buttonText}
            </a>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="aboutImage">
            <img src={homeAboutContent.sideImage} alt="product images" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAboutSection;
