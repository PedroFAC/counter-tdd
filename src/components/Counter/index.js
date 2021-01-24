import React, { useState } from "react";
import Button from "../Button";
import Container from "../Container";
import NumberDisplay from "../NumberDisplay";

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Button testId="minus-button" onClick={() => setValue(value - 1)}>
        -
      </Button>
      <NumberDisplay testId="value-number" value={value} />
      <Button testId="plus-button" onClick={() => setValue(value + 1)}>
        +
      </Button>
    </Container>
  );
}

export default Counter;
