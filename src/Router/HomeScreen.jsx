import React from "react";
import { RealExampleRef } from "../components/04-useRef/RealExampleRef";
import { MemoHook } from "../components/05-memos/MemoHook";
export const HomeScreen = () => {
  return (
    <>
    <br/>
      <sup>To see the magic, open React DevTools.</sup>
      <div className="cardContainer">
        <h1>useRef</h1>
        <RealExampleRef />
      </div>
      <div className="cardContainer">
        <h1>React.memo</h1>
        <MemoHook />
      </div>
      <sup>Go to the repo and explore other hooks.</sup>
    </>
  );
};
