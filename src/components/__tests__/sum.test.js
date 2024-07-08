import { sum } from "../sum";

test("It is used to find the sum of two numbers", () => {
  const result = sum(1, 2);

  //Assertion
  expect(result).toBe(3);
});
