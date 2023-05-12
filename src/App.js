import { useState } from 'react'
import Accumulator from './Components/Accumulator'
import Btn from './Components/Btn'
import React from './images/react.png'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(prevState => prevState + 1);
  }
  const decrementHandler = () => {
    if (count <= 0) return;
    setCount(prevState => prevState - 1);
  }
  return (
    <main className="main">
      <img src={React} alt="Zustand logo" className="option-state"/>
    <h1 className="title">CountApp</h1>
    <div className="card">
      <Accumulator count={count}/>
      <div className="btnContainer">
        <Btn handler={decrementHandler} text="-"/>
        <Btn handler={incrementHandler} text="+"/>
      </div>
    </div>
  </main>
  );
}

export default App;
