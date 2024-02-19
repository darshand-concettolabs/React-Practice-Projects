import React, { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*(){}[]?/><c";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="main">
        <input
          type="range"
          min={8}
          max={50}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label> Length : {length} </label>
      </div>

      <div>
        <input
          type="checkbox"
          value={numAllowed}
          id="numberINput"
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }}
        />
        <label>Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          value={charAllowed}
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label>Characters</label>
      </div>
    </div>
  );
};

export default App;
