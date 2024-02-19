import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "./Context";

const Input = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  

  const {token} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("please provide credentials");
    } else {
      axios
        .post("https://dummyjson.com/auth/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          let data = res.data.token;
          token(data);
        })

        .catch((err) => {
          alert("Login failed due to: " + err.message);
        });
    }
  };


  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      alert("Please! Enter username");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please! Enter password");
    }
  };

  return (
    <>
      <form className="form-group">
        <label>
          <h3> Username </h3>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter Username"
        />

        <label>
          {" "}
          <h3>Password </h3>
        </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />

        <button onClick={handleSubmit}> Submit</button>
      </form>
    </>
  );
};

export default Input;
