import React, { useState } from "react";
import Button from "../Button";
import NumberDisplay from "../NumberDisplay";

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Button testId="minus-button" onClick={() => setValue(value - 1)}>
        -
      </Button>
      <NumberDisplay testId="value-number" value={value} />
      <Button testId="plus-button" onClick={() => setValue(value + 1)}>
        +
      </Button>
    </div>
  );
}

export default Counter;
