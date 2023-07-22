import React, { useState } from "react";
import "./App.scss";
import Home from "./components/home";
import About from "./components/about";
import Header from "./components/header";
import Footer from "./components/footer";

const App: React.FC = () => {
  const [route, setRoute] = useState("/");
  return (
    <>
      <Header route={route} setRoute={setRoute} />
      {route === "/" && <Home />}
      {route === "about" && <About />}
      <Footer />
    </>
  );
};

export default App;
