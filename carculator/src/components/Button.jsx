import React from "react";

const Button = ({ type, children, onClick }) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
