import React from "react";

function NumberDisplay({ value, testId }) {
  return <div data-testid={testId}>{value}</div>;
}
export default NumberDisplay;
