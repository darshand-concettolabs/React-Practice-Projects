import {  useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({ name: "Darshan", age: "10" });

  const updateData = () => {
    setTimeout(() => {
      {
        setData({ name: "abc", age: "20" });
      }
    }, 2000);
  };
  
  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children} 
    </AppContext.Provider>
  );
};

export default AppContextProvider;
