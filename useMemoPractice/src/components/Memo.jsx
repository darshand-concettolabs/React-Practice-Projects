import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const counterNumber = (num) => {
    for (let i = 0; i <= 100000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return counterNumber(count);
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>INCREMENT :{checkData}</button>
      <button onClick={() => setShow(!show)}>
        {show ? "It is clicked" : "Click me"}
      </button>
    </div>
  );
};

export default Memo;
