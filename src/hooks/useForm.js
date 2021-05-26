import {  useState } from "react";

export const useForm = (initialState = {}) => {
  // Set the values
  const [values, setValues] = useState(initialState);

  // Get the value of form and set new Values in input
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  // when submit form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { values, handleInputChange, handleSubmit };
};
