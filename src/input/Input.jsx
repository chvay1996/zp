import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <input
      onChange={(event) => props.setValue(Number(event.target.value))}
      value={props.value}
      type={props.type}
    />
  );
};

export default Input;
