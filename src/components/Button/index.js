import React from "react";
import "./styles.scss";

function Button({ onClick, value, children, testId }) {
  return (
    <button
      className="button"
      onClick={onClick}
      value={value}
      data-testid={testId}
    >
      {children}
    </button>
  );
}

export default Button;
