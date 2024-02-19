import React from "react";
import AppContextProvider from "./AppContextProvider";
import ContextApi from "./components/ContextApi";

const App = () => {
  return (
    <>
      <AppContextProvider>Context api useContext Hook
      <ContextApi />
      </AppContextProvider>
    </>
  );
};

export default App;
