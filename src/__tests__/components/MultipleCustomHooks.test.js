import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");

describe("Test of Multiple Custoom Hooks", () => {


  it("should show correctly", () => {
    useFetch.mockReturnValue({ data: null, loading: true, err: null });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show the info", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Andrés Andrade",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      err: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
  });
});
