import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

it("should render <Button> component", () => {
  const text = "Hello";
  const disabled = false;
  const handleClick = () => {};

  const wrapper = shallow(<Button text={text} disabled={disabled} handleClick={handleClick} />);

  const button = (
    <button disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  );

  expect(wrapper.contains(button)).toBe(true);
});
