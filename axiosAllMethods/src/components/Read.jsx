import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  function getData() {
    axios
      .get("https://65c31095f7e6ea59682be97d.mockapi.io/crud-axios")
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://65c31095f7e6ea59682be97d.mockapi.io/crud-axios/${id}`)
      .then(() => getData());
  }

  return (
    <>
      <h3>Read Operation</h3>
      <button
        className="btn btn-primary"
        style={{ marginLeft: "78%" }}
        onClick={() => navigation("/")}
      >
        Creat User
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, index) => (
            <tr key={eachData.id}>
              <th scope="row">{index + 1}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <button
                  className="btn-success"
                  onClick={() => navigation(`/update/${eachData.id}`)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
