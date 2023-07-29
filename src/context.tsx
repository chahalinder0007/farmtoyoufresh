import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  route: string;
  setRoute: (route: string) => void;
}
const Context = createContext<ContextProps | undefined>(undefined);

const ContextProvider: React.FC<any> = ({ children }) => {
  const [route, setRoute] = useState("/");
  return (
    <Context.Provider value={{ route, setRoute }}>{children}</Context.Provider>
  );
};

const useAppContext = (): ContextProps => {
  const stateContext = useContext(Context);
  if (!stateContext) {
    throw new Error("useAppContext must be used within a ContextProvider.");
  }
  return stateContext;
};

export { useAppContext, ContextProvider };
