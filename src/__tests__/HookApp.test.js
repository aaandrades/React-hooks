import React from "react";
import { shallow } from "enzyme";
import { HookHello } from "../HookHello";

describe("Testing in HookApp", () => {
  it("Should show correctly the component", () => {
    const wrapper = shallow(<HookHello />);
    expect(wrapper).toMatchSnapshot();
  });
});
