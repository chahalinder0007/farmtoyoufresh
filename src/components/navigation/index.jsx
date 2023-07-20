import { Button } from "antd";

const Navigation = (props) => {
  const { setRoute } = props;
  return (
    <>
      <ul>
        <li>
          <Button onClick={() => setRoute("/")}>Home</Button>
        </li>
        <li>
          <Button onClick={() => setRoute("about")}>About</Button>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
