import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../components/04-useRef/RealExampleRef";

describe("Tests of RealExampleRef", () => {
  const wrapper = shallow(<RealExampleRef />);

  it("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  it("should show the component MultipleCustomHooks", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
