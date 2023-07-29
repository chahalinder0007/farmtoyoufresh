import React from "react";
import "./App.scss";
import { ContextProvider } from "./context";
import Main from "./components/main";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
};

export default App;
