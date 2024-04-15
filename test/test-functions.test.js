const { calculateValue } = require("../test-functions");

describe("test-coverage test suite", () => {
  it("tests something", () => {
    expect(calculateValue(10, 20).value).toBe(30);
  });
});
