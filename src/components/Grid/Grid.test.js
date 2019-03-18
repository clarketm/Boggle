import React from "react";
import { shallow } from "enzyme";
import Grid from "./Grid";

it("should render <Grid> component", () => {
  const children = <div>kids</div>;

  const wrapper = shallow(<Grid>{children}</Grid>);

  const section = <section>{children}</section>;

  expect(wrapper.contains(section)).toBe(true);
});
