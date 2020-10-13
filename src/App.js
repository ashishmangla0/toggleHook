import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Image from './images';
function App() {
  const [title, setTitle] = useState('Hello React');
  const [isShowing, setIsShowing] = useState(false);
  //const [isShowing,setIsShowing] =  useState(null); //this is jugard 
  const [update, setUpdate] = useState(false); //this is jugard2
  const moutRef =  useRef(false);
  useEffect(() => {
    // setUpdate(true)
    console.log("app mounted");
  }, []);

  //this code will help to stop run on every time


  //componet didmount
  useEffect(() => {
    if(moutRef.current){
      console.log('app update')
    }
    else{
      moutRef.current =  true;
    }
    // if (update) {
    //   console.log('app update')
    // }
  }, [isShowing])
  const handleClick = () => {
    setIsShowing(!isShowing);
  }
  return (
    <div>
      {console.log("re renderd")}
      {title}
      <button onClick={handleClick}>
        Toggle img
      </button>
      {isShowing ? <Image /> : null}
    </div>
  );
}

export default App;
