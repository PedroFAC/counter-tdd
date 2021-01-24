function sum(a, b) {
  try {
    return a + b;
  } catch (error) {
    console.log(error);
    return error;
  }
}

describe("testing sum function", () => {
  it("should return a sum if both numbers are fullfiled", () => {
    const x = sum(1, 1);
    expect(x).toEqual(2);
  });
  it("should return a error if one of the numbers have not been called", () => {
    const x = sum(1);
    expect(x).not.toEqual(1);
  });
});
