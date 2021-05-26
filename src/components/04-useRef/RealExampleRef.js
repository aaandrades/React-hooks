import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "./useRef.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h3>Real Example Ref</h3>
      {show && <MultipleCustomHooks />}
      <br></br>
      <br></br>
      <button className="btn btn-secondary" 
                onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};
