import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error,setError] = useState([]);

  const getApiData= async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data)
    } catch (error) {
      setError(error.message)
    }
  }

useEffect(()=>{
  
  //  axios.get("https://jsonplaceholder.typicode.com/posts")
  //  .then((res)=>{
  //   setData(res.data)
  //  })
  //  .catch((error)=>{
  //   setError(error.message)
  //  })

  getApiData();
})



  return (
    <div>
    <h1>Axios Tutorial</h1>
     <div>{error != "" && error}</div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.id}</h3>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
          
        );
      })}
    </div>
  );
}

export default App;
