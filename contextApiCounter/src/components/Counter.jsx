import React, { useContext } from "react";
import { counterContext } from "../context/UserContext";

const Counter = () =>{

    const counter = useContext(counterContext);

    const handleIncrement = () =>{
           counter.setCount(counter.count + 1)
    }

    const handleDecrement = () =>{
        counter.setCount(counter.count - 1)
    }
   
    return(
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decreament</button>
        </div>
    )
}


export default Counter;