import React from "react";
import AddTodo from "./app/components/AddTodo";
import Todo from "./app/components/Todo";

const App = () => {
  return (
    <>
      <h2 style={{textAlign :"center"}}>To Do Using Redux</h2>
      <AddTodo />
      <Todo />
    </>
  );
};

export default App;
