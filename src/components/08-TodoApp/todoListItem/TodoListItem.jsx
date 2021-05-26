import React from "react";

export const TodoListItem = ({ state, index, handleDelete, handleToggle }) => {
  return (
    <div
      key={state.id}
      className="containerOption"
      style={state.done ? { background: "#ACF7C1" } : { background: "" }}
      onClick={() => handleToggle(state.id)}
    >
      <p className="containerOption__text">
        {index + 1}. {state.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(state.id)}>
        Delete
      </button>
    </div>
  );
};
