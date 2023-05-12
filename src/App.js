import Accumulator from './Components/Accumulator'
import Btn from './Components/Btn'
import { useRecoilState } from 'recoil';
import { counterState } from './state';
import Recoil from './images/recoil.png'
import './App.css';

function App() {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => setCount(count + 1);
  const decrement = () => { 
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <main className="main">
      <img src={Recoil} alt="Zustand logo" className="option-state"/>
    <h1 className="title">CountApp with Recoil</h1>
    <div className="card">
      <Accumulator count={count}/>
      <div className="btnContainer">
        <Btn handler={decrement} text="-"/>
        <Btn handler={increment} text="+"/>
      </div>
    </div>
  </main>
  );
}

export default App;
