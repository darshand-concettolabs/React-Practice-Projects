import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../UserSlice";

const Home = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(updateUser());
  };

  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <>
      <button onClick={handleCreate} className="btn btn-success">
        Create +
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="col">{user.id}</th>
              <th scope="col">{user.name}</th>
              <th scope="col">{user.email}</th>
              <th scope="col">
                <Link
                  to={`/update/${user.id}`}
                  className="btn btn-sm btn-primary"
                  onClick={handleEdit}
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-3"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
