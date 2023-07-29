import { Button, Col, Row } from "antd";
import "./style.scss";
import { useAppContext } from "../../context";
import { homeAboutContent } from "./content";

const HomeAboutSection = () => {
  const { setRoute } = useAppContext();
  return (
    <div className="container homeAboutContent">
      <Row justify="center" align="middle" gutter={50}>
        <Col span={12}>
          <div className="aboutContent">
            <h4 style={{ color: `${homeAboutContent.smallTitleColor}` }}>
              {homeAboutContent.smallTitle}
            </h4>
            <h2>{homeAboutContent.mainTitle}</h2>
            <p>{homeAboutContent.aboutText}</p>
            <Button
              onClick={() => setRoute(`${homeAboutContent.buttonLink}`)}
              className="primary_btn"
            >
              {homeAboutContent.buttonText}
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <div className="aboutImage">
            <img src={homeAboutContent.sideImage} alt="product images" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAboutSection;
