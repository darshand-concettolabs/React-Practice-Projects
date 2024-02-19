import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    if (name === "" && email === "") {
      setShow(true);
    } else {
      axios
        .post("https://65c31095f7e6ea59682be97d.mockapi.io/crud-axios", {
          name: name,
          email: email,
        })
        .then(() => setName(""), setEmail(""), navigation("/read"));
    }
  };

  return (
    <>
      <form>
        <h3>Axios CRUD Operation</h3>
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label className="form-label">Email </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>

        <button
          type="submit"
          onClick={() => navigation("/read")}
          className="btn btn-primary ms-4"
        >
          Read
        </button>

        {show && <p>Enter some details</p>}
      </form>
    </>
  );
};

export default Create;
