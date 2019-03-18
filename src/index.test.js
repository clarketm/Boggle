import React from "react";
import ReactDOM from "react-dom";
import BoggleLayout from "./components/Boggle/BoggleLayout";

it("should render base Boggle layout without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BoggleLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
