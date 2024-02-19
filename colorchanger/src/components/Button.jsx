import React, { useState } from 'react'

const Button = () => {

    const[color,setColor] = useState('');


  return (
    <div className="container" style={{backgroundColor:color}}>
    <div>
    <button onClick={()=>{setColor('red')}}   style={{backgroundColor:'red'}} >RED</button>
    <button onClick={()=>{setColor('black')}} style={{backgroundColor:'black'}}>BLACK</button>
    <button onClick={()=>{setColor('yellow')}} style={{backgroundColor:'yellow'}}>YELLOW</button>
    <button onClick={()=>{setColor('pink')}} style={{backgroundColor:'pink'}}>PINK</button>
    <button onClick={()=>{setColor('blue')}} style={{backgroundColor:'blue'}}>BLUE</button>
    <button onClick={()=>{setColor('grey')}} style={{backgroundColor:'grey'}}>GREY</button>
    </div>
    </div>
  )
}

export default Button