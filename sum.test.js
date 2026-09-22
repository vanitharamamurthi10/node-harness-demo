describe("Demo Test", () => {
  test("1 + 1 should equal 2", () => {
    expect(1 + 1).toBe(2);
  });

  test("lodash demo", () => {
    const _ = require("lodash");
    expect(_.capitalize("harness")).toBe("Harness");
  });
});
