import React from "react";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <div>
      <h3>Counter with Hook: {state}</h3>
      <button className="btn btn-primary inLine" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary inLine" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary inLine" onClick={() => decrement(2)}>
        -1
      </button>
    </div>
  );
};
