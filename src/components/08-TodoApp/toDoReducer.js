export const toDoReducer = (state = [], action = []) => {
  switch (action?.type) {
    case "Add":
      return [...state, action.payload];
    case "Delete":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "Update-old":
      return state.map((todo) => {
        if (action.payload.id === todo.id) {
          console.log("ENTER HERE?");
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    case "Update":
      return state.map((todo) =>
        action.payload.id === todo.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};
