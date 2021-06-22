import { useForm } from "../../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Tests of useForm Hook", () => {
  const initialForm = {
    name: "Andres",
    email: "aaandrades@outlook.com",
  };

  it("should return a form by default", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { values } = result.current;
    const { handleInputChange } = result.current;
    const { handleSubmit } = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toEqual("function");
    expect(typeof handleSubmit).toEqual("function");
  });

  it("should change the value of the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;

    const newState = {
      target: { name: "name", value: "Alexander" },
    };

    act(() => {
      handleInputChange(newState);
    });

    const { values } = result.current;
    expect(values).toEqual({ ...initialForm, name: "Alexander" });
    expect(values.name).toEqual("Alexander");
  });

});
