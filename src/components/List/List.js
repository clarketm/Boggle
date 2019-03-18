import React from "react";

const List = ({ title, list, style }) => {
  return (
    <div style={style}>
      <p>hi</p>
      <h4>{title}</h4>
      <ul>
        {[...list].map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
