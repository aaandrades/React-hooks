import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  let initialState = {
    name: "",
    email: "",
    password: "",
  };

  const { values, handleInputChange, handleSubmit } = useForm(initialState);
  const { email, name, password } = values;

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Form with Custom Hook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          autoComplete="false"
          className="form-control"
          placeholder="Your name here"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          autoComplete="false"
          className="form-control padding"
          placeholder="aaandrades@outlook.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          autoComplete="false"
          className="form-control padding"
          placeholder="****"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
      <button type="submit"  className="btn btn-primary padding">
          Enviar
      </button>
    </form>
  );
};
