import React from "react";

const Button = ({ text, disabled, handleClick, style }) => {
  return (
    <div style={style}>
      <button disabled={disabled} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
