const { calculateValue } = require("../test-functions");

describe("test-coverage test suite", () => {
  it("tests something", () => {
    const result = calculateValue(10, 20);
    expect(result.value).toBe(30);
    expect(result.message).toBe(null);
  });
});
