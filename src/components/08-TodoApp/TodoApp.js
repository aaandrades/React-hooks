import React, { useReducer, useState, useEffect } from "react";
import "./TodoApp.scss";
import { TodoList } from "./todoList/TodoList";
import { toDoReducer } from "./toDoReducer";

export const TodoApp = () => {
  // Init state in Reducer
  const initialState = [];

  // Recover info in LocalStorage
  const init = () => {
    return JSON.parse(localStorage.getItem("toDos")) || [];
  };

  // Hooks
  const [states, dispatch] = useReducer(toDoReducer, initialState, init);
  const [description, setDescription] = useState("");

  // Save in localStorage
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(states)); // Save in localStorage when the states changes
  }, [states]);

  // Delete an Item
  const handleDelete = (todoId) => {
    const newTodo = {
      id: todoId,
    };
    const action = {
      type: "Delete",
      payload: newTodo,
    };
    dispatch(action);
  };

  // Update an Item
  const handleToggle = (todoId) => {
    const newTodo = {
      id: todoId,
    };
    const action = {
      type: "Update",
      payload: newTodo,
    };
    dispatch(action);
  };

  // Add new Item
  const handleSubmit = (e) => {
    e.preventDefault();
    setDescription("");

    // Creates the new state
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // Create the action
    const action = {
      type: "Add",
      payload: newTodo,
    };

    // Dispatch the action
    dispatch(action);
  };

  // set Description Value
  const handleInput = (e) => setDescription(e.target.value);

  // Scroll to top
  const scrollToTop = () => document.getElementById("top").scrollIntoView();

  return (
    <div id="top">
      <h1> To Do App</h1>
      <h3>Current items({states.length})</h3> <hr />
      <TodoList
        states={states}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      <br /> <hr />
      <div className="add-to-do">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Add toDo"
            autoComplete="off"
            value={description}
            onChange={handleInput}
          />
          <div className="buttons">
            <button
              type="submit"
              className="btn btn-outline-primary internalButton"
            >
              Add
            </button>
          </div>
        </form>
        <button className="btn btn-primary" onClick={() => scrollToTop()}>
          Scroll to Top
        </button>
      </div>
    </div>
  );
};
