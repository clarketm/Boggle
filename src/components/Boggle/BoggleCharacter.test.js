import React from "react";
import { shallow } from "enzyme";
import List from "./List";

it("should render <List> component", () => {
  const title = "Hello";
  const list = ["1", "2", "3", "4"];

  const wrapper = shallow(<List title={title} list={list} />);

  const h4 = <h4>{title}</h4>;
  const ul = (
    <ul>
      <li key="1">1</li>
      <li key="2">2</li>
      <li key="3">3</li>
      <li key="4">4</li>
    </ul>
  );

  expect(wrapper.contains(h4)).toBe(true);
  expect(wrapper.contains(ul)).toBe(true);
});
