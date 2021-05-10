import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "./memorize.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // Use useCallback when you need to pass a function but
  // need to have the function in memory to avoid render again
  // the child component
  const increment = useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>useCallback Hook</h1>
      <hr />
      <h3>Counter: {counter}</h3>
      <ShowIncrement increment={increment} />
    </div>
  );
};
