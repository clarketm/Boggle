import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("should render <Header> component", () => {
  const wrapper = shallow(<Header />);

  const img = <img width="100px" height="auto" src="/boggle.png" alt="Boggle Logo" />;

  expect(wrapper.contains(img)).toBe(true);
});
