import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              className="btn-remove"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
