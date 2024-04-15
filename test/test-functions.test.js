const { calculateValue } = require("../test-functions");

describe("test-coverage test suite", () => {
  it("tests something", () => {
    const result = calculateValue(10, 20);
    expect(result.value).toBe(30);
    expect(result.message).toBe(null);
  });

  it("calculateValue test 2", () => {
    const result = calculateValue(100, 20);
    expect(result.value).toBe(120);
    expect(result.message).toBe("Warning: result is greater then 100");
  });
});
