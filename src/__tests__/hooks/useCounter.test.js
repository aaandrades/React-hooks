// import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Test in customHook", () => {
  it("should return the default values", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.state).toEqual(10);
    expect(typeof result.current.increment).toEqual("function");
    expect(typeof result.current.reset).toEqual("function");
    expect(typeof result.current.decrement).toEqual("function");
  });

  it("should have the custom initial value", () => {
    const { result } = renderHook(() => useCounter(20));
    expect(result.current.state).toEqual(20);
  });

  it("should increment the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => increment());
    const { state } = result.current;
    expect(state).toEqual(11);
  });

  it("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => decrement());
    const { state } = result.current;
    expect(state).toEqual(9);
  });

  it("should reset the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { reset } = result.current;

    act(() => reset());
    const { state } = result.current;
    expect(state).toEqual(10);
  });
});
