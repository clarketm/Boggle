import React from "react";

const Text = ({ text, style }) => {
  return (
    <div style={style}>
      <h3>{text}</h3>
    </div>
  );
};

export default Text;
