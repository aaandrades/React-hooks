import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { CounterComponent } from "./CounterComponent";
import { heavyProcess } from '../../helpers/heavyProcess'

import "./memorize.css";

export const MemoHook = () => {
  const { state, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const memoProcess = useMemo(() => heavyProcess(state), [state]);

  return (
    <div>
      <h1> MemoHook</h1>
      <hr />
      <h3>
        Counter: <CounterComponent counter={state} />
      </h3>
      <h3>Heavy operation: {memoProcess}</h3>
      <button className="btn btn-primary mt-4" onClick={increment}>
        +1
      </button>
      <br />
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
