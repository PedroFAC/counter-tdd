import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

describe("Testing counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  afterEach(() => cleanup());
  it("should render the Counter component", async () => {
    const minusButton = await screen.findByTestId("minus-button");
    const plusButton = await screen.findByTestId("plus-button");
    const valueNumber = await screen.findByTestId("value-number");
    expect(minusButton).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
    expect(valueNumber).toBeInTheDocument();
  });
  it("should render the initial number value as 0", async () => {
    const valueNumber = await screen.findByTestId("value-number");

    expect(valueNumber).toHaveTextContent("0");
  });
  it("should update the number value to 1 when plus is clicked once", async () => {
    const valueNumber = await screen.findByTestId("value-number");
    const plusButton = await screen.findByTestId("plus-button");

    fireEvent.click(plusButton);
    expect(valueNumber).toHaveTextContent("1");
  });
  it("should update the number value to -1 when minus is clicked once", async () => {
    const valueNumber = await screen.findByTestId("value-number");
    const minusButton = await screen.findByTestId("minus-button");

    fireEvent.click(minusButton);
    expect(valueNumber).toHaveTextContent("-1");
  });
});
