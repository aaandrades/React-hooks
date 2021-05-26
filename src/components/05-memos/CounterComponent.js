import React, {memo} from "react";

export const CounterComponent = memo(({ counter }) => {
  return <small>{counter} </small>;
});
