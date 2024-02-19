import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../features/counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const [data, setData] = useState(0);

  const dispatch = useDispatch();

  const val = Number(data);

  const incAmount = (val) => {
    dispatch(incrementByAmount(val));
  };

  const decAmount = (val) => {
    dispatch(decrementByAmount(val));
  };

  return (
    <>
      Counter
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="number"
        placeholder="Enter No."
        onChange={(e) => setData(e.target.value)}
      />
      <button
        onClick={() => {
          incAmount(val);
        }}
      >
        Increment By Amount
      </button>
      <input
        type="number"
        placeholder="Enter No."
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={() => decAmount(val)}>Decrement By Amount</button>
    </>
  );
};

export default Counter;
