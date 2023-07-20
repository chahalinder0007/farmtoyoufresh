import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Home from "./components/home";
import About from "./components/about";

const App = () => {
  const [route, setRoute] = useState("/");
  return (
    <>
      <Navigation setRoute={setRoute} />
      {route === "/" && <Home />}
      {route === "about" && <About />}
    </>
  );
};

export default App;
