import { toDoReducer } from "../../components/08-TodoApp/toDoReducer";
import { demoTodos } from "../../utils/demoTodos";

describe("Test for toDoReducer", () => {
  it("should return the default state", () => {
    const state = toDoReducer(demoTodos);
    expect(state).toEqual(demoTodos);
    expect(state.length).toEqual(2);
    expect(state).toEqual(demoTodos);
  });

  it("should add a toDo", () => {
    const addAction = {
      type: "Add",
      payload: {
        id: 3,
        desc: "Testing",
        done: false,
      },
    };
    const state = toDoReducer(demoTodos, addAction);
    expect(state.length).toEqual(3);
  });

  it("should delete a toDo", () => {
    const deleteAction = {
      type: "Delete",
      payload: {
        id: 1,
      },
    };
    const state = toDoReducer(demoTodos, deleteAction);
    expect(state.length).toEqual(1);
  });

  it("should update a toDo", () => {
    const updateAction = {
      type: "Update",
      payload: {
        id: 1,
      },
    };
    const state = toDoReducer(demoTodos, updateAction);
    expect(state[0].done).toEqual(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
