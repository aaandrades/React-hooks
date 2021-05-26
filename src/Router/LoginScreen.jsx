import React from "react";
import { CounterWithCustomHook } from "../components/01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "../components/02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "../components/03-examples/MultipleCustomHooks";

export const LoginScreen = () => {
  return (
    <>
      <br />
      <sup>To see the magic, open React DevTools </sup>
      <div className="cardContainer">
        <h1>useEffect + useState</h1>
        <hr />
        <MultipleCustomHooks />
      </div>
      <div className="cardContainer">
        <h1>useState</h1>
        <hr />
        <CounterWithCustomHook />
      </div>
      <div className="cardContainer">
        <h1>useEffect</h1>
        <hr />
        <FormWithCustomHook />
      </div>
    </>
  );
};
