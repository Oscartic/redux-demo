import React from 'react';
import { connect } from 'react-redux';
import Accumulator from './Components/Accumulator'
import Btn from './Components/Btn'
import './App.css';

function App(props) {
  return (
    <main className="main">
      <h1 className="title">CountApp with Redux</h1>
      <div className="card">
        <Accumulator count={props.count}/>
        <div className="btnContainer">
          <Btn handler={props.decrement} text="-"/>
          <Btn handler={props.increment} text="+"/>
        </div>
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);