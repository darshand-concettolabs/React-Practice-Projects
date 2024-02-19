import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../UserSlice";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingUser = users.filter((user) => user.id == id);
  const { name, email } = existingUser[0];

  const [updateName, setName] = useState(name);
  const [updateEmail, setEmail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: updateName,
        email: updateEmail,
      })
    );
    navigate('/');
  };

  return (
    <>
      <h3>Update User</h3>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={updateName}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={updateEmail}
            type="text"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <button
          onClick={handleUpdate}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Update;
