import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigation = useNavigate();

  function showData() {
    axios
      .get(`https://65c31095f7e6ea59682be97d.mockapi.io/crud-axios/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      });
  }

  function handleUpdate(e) {
    e.preventDefault();
    axios
      .put(`https://65c31095f7e6ea59682be97d.mockapi.io/crud-axios/${id}`, {
        name: name,
        email,
      })
      .then(() => navigation("/read"));
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <form>
        <h3>Update</h3>
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label className="form-label">Email </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={handleUpdate}
          className="btn btn-primary"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
