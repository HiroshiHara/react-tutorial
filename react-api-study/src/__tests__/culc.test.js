import { culc } from "../component/culc";

test("add 1 + 2 to equal 3", () => {
  expect(culc(1, 2)).toBe(3);
});
