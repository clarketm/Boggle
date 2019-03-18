import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

it("should render <Footer> component", () => {
  const wrapper = shallow(<Footer />);

  const footer = <footer>&copy; 2019 Travis Clarke</footer>;

  expect(wrapper.contains(footer)).toBe(true);
});
