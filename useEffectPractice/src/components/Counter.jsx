import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState("");

  useEffect(() => {
    setCalculation(count * 2);
    console.log("clicked");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      Count is clicked {count} times!
      <p> Value of calculation : {calculation}</p>
    </div>
  );
};

export default Counter;
