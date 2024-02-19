import React from "react";
import Counter from "./components/Counter";
import { counterContext } from "./context/UserContext";
import { useContext } from "react";

const App = () =>{

  const counterState = useContext(counterContext);

  return(
    <div>
    <h1>Count is {counterState.count}</h1>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    </div>
  )
}

export default App;