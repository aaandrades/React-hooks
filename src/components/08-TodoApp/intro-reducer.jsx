import React from "react";


// Example of reducer concept - Intro to Redux
export const IntroReducer = () => {
  const initialState = [
    {
      id: 1,
      toDo: "Buy Drinks",
      done: false,
    },
  ];

  const toDoreducer = (state = initialState, action) => {
    if (action?.type === "Add") {
      return [...state, action.payload];
    }
    return state;
  };

  let todos = toDoreducer();
  console.log("INITIAL STATE: ", todos);

  const newTodo = {
    id: 2,
    toDo: "Wash Dishes",
    done: false,
  };

  const action = {
    type: "Add",
    payload: newTodo,
  };
  todos = toDoreducer(todos, action);

  console.log("SECOND STATE : ", todos);

  return (
    <>
      <h1>Hello World from IntroReducers</h1>
    </>
  );
};
