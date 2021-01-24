import React from "react";
import "./styles.scss";

function NumberDisplay({ value, testId }) {
  return (
    <div data-testid={testId}>
      <p className="number">{value}</p>
    </div>
  );
}
export default NumberDisplay;
