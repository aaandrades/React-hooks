import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  let initialState = {
    email: "",
    name: "",
  };

  const [formState, setFormState] = useState(initialState);
  const { email, name } = formState;

  // Will be executed just one time when the component render first time
  useEffect(() => {
    // console.log("Hey!");
  }, []);

  // Will be executed just when email change
  useEffect(() => {
    // console.log("FormState change");
  }, [email]);

  // Get the value of form and set new Values
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>Simple Form with useEffect</h1>
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
          type="text"
          name="email"
          autoComplete="false"
          className="form-control padding"
          placeholder="example@example.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
    </div>
  );
};
