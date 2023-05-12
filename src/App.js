import useStore from './useStore';
import Accumulator from './Components/Accumulator'
import Btn from './Components/Btn'
import Zustand from './images/zustand.png'
import './App.css';

function App() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <main className="main">
      <img src={Zustand} alt="Zustand logo" className="option-state"/>
    <h1 className="title">CountApp with Zustand</h1>
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
