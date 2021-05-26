import React from "react";
import { TodoListItem } from "../todoListItem/TodoListItem" ;

export const TodoList = ({ states, handleDelete, handleToggle }) => {
  return (
    <ul>
      {states.map((state, index) => {
        return (
          <div key={state.id}>
            <TodoListItem
              state={state}
              index={index}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          </div>
        );
      })}
    </ul>
  );
};
