import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  currentPageName: string;
  setCurrentPageName: (currentPageName: string) => void;
}
const Context = createContext<ContextProps | undefined>(undefined);

const ContextProvider: React.FC<any> = ({ children }) => {
  const [currentPageName, setCurrentPageName] = useState("Home");
  return (
    <Context.Provider value={{ currentPageName, setCurrentPageName }}>
      {children}
    </Context.Provider>
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
