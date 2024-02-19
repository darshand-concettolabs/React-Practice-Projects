import React, { useContext } from "react";
import AppContext from "../AppContext";

const ContextApi = () => {
  const { data, updateData } = useContext(AppContext);

  return (
    <>
      <h2>Context api </h2>
      {data.name}
      {data.age}
      {updateData()}
    </>
  );
};

export default ContextApi;
