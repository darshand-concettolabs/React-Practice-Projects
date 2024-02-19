import React, { useReducer } from "react";

let initialState = 0;

const Recuder = () => {
  const [state, dispatch] = useReducer(reducer, initialState );

  function reducer(state, action) {
    if (action.type === "increment") {
      return state + 1;
    } else if (action.type === "decrement") {
      return state - 1;
    } else {
      return { state };
    }
  }

  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      {state}
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
};

export default Recuder;
