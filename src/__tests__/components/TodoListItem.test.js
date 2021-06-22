import { shallow } from "enzyme";
import { TodoListItem } from "../../components/08-TodoApp/todoListItem/TodoListItem";
import { demoTodos } from "../../utils/demoTodos";

jest.mock("");

describe("Test for TodoListItem", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      state={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  it("should create correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call delete function", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  it("should call toggle function", () => {
    wrapper.find(".containerOption").simulate("click");
    expect(handleToggle).toHaveBeenCalled();
  });

  it("should show the text correctly", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(1 + ". " + demoTodos[0].desc);
  });

});
