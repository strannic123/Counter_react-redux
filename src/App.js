import React from 'react';
import {connect} from "react-redux";
import './App.css';
import {increment, decrement} from "./actions";



function App(props) {
  function handleIncrement(value) {
    props.incrementCount(value)
  }

  function handleDecrement(value) {
    props.decrementCount(value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>Counter: {props.counter}</h1>
            <div
              style={{display: 'inline-block'}}
            >
              <button
                className="ui green button"
                onClick={() => handleIncrement(1)}
              >Increment</button>
            </div>
            <div
              style={{display: 'inline-block'}}
            >
              <button
                className="ui red button"
                onClick={() => handleDecrement(1)}
              >Decrement</button>
            </div>

        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: number => dispatch(increment(number)),
    decrementCount: number => dispatch(decrement(number))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
