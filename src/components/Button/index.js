import React from "react";

function Button({ onClick, value, children, testId }) {
  return (
    <button onClick={onClick} value={value} data-testid={testId}>
      {children}
    </button>
  );
}

export default Button;
