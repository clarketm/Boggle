import React from "react";
import { shallow } from "enzyme";
import Text from "./Text";

it("should render <Text> component", () => {
  const expected = "Hello";
  const wrapper = shallow(<Text text={expected} />);
  expect(wrapper.text()).toEqual(expected);
});
