import React from "react";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          Axios in React
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
