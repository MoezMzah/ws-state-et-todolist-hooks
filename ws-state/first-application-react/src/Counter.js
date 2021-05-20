import React from 'react'

const Counter = () => {
    //to handle the state in functional component we must use hooks
    const [counter,setCounter]=useState(0)
    const increment=()=>{
setCounter(counter+1)
    }
    const decrement=()=>{
setCounter(counter -1);
    }
    const reset=()=>{
        setCounter(0);
    }
    return (
      <div>
        <h1>COUNTER (FUNCTIONAL COMPONENT)</h1>
        <button
          className="decrement-btn"
          onClick={() => {
            decrement;
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          className="increment-btn"
          onClick={() => {
            increment;
          }}
        >
          +
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            reset;
          }}
        >
          Reset
        </button>
      </div>
    );
}

export default Counter
