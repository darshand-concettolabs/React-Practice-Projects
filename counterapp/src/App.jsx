import React, { useState } from 'react'
import './App.css'

const App = () => {

  const[count,setCount]=useState(0);

  const addValue = ()=>{
    if(count<10){
      setCount(count +1);
    }
    else{
      return setCount(count);
    }
  }

  const removeValue = ()=>{
    if(count<=0){
      return setCount;
    }
    else{
      setCount(count-1);
    }
  }

  return (
    <div>Counter App value : {count}<br />
    <button onClick={addValue}>Add value</button><br />
    <button onClick={removeValue}>Remove value</button>
    </div>
    
  )
}

export default App
