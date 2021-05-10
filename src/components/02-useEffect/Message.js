import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coordsState, setCoordsState] = useState({ x: 0, y: 0 });

  const { x , y } = coordsState;

  useEffect(() => {
    const mouseMove = (e) => {
      setCoordsState({
        ...coordsState,
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div>
      <h3>Coords!</h3>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
};
