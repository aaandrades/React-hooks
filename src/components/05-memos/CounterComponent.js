import React, {memo} from "react";

export const CounterComponent = memo(({ counter }) => {

  console.log("VALUES: ", counter);
  return <small>{counter} </small>;
});
