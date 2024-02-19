import { useState } from "react";
import UserContext from "./Context";


const UserContextProvider = ({children}) =>{

  const[token,setToken] = useState("")
  
  
  return <UserContext.Provider value={{token,setToken}}>
    {children}
  </UserContext.Provider>
}

export default UserContextProvider;