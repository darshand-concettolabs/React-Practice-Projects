import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function addTodoHandler(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <>
      <form className="form-class">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter To Do"
        />
        <button className="btn" type="submit" onClick={addTodoHandler}>
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
