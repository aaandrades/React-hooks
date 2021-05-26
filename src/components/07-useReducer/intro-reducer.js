console.log("HOLA MUNDO");

const initialState = {
  id: 1,
  todo: "Buy milk",
  done: false,
};

const newTodo = {
  id: 2,
  todo: "Buy milk",
  done: true,
};

const toDoReducer = (state = initialState, action) => {
  return state;
};

let todos = toDoReducer();

const agregarTodoACtion = {
  type: "Add milk",
  payload: newTodo,
};

todos = toDoReducer(todos, agregarTodoACtion);

