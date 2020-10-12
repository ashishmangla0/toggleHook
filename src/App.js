import React, { useEffect, useState } from 'react';
import './App.css';
import Image from './images';
function App() {
  const [title,setTitle] = useState('Hello React');
  const [isShowing,setIsShowing] =  useState(false);

  useEffect(()=>{
    console.log("app mounted");
  },[]);

  const handleClick = () =>{
    setIsShowing(!isShowing);
  }

  return (
    <div>
    {console.log("re renderd")}
      {title}
      <button onClick={handleClick}>
              Toggle img
      </button>
      {isShowing ? <Image/> : null}
      
    </div>   
  );
}

export default App;
