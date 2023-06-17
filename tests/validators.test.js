import {
  validateFraction,
  validateOperand,
  validateString,
  validateFractionFormat,
} from "../validators";

test("test validateOperand() to throw Error if format is incorrect", () => {
  expect(() => validateOperand("2&&3/4")).toThrow();
});
test("test validateOperand() not to throw Error if format is correct", () => {
  expect(() => validateOperand("2&3/4")).not.toThrow();
});

test("test validateString() to return true for correct input", () => {
  expect(validateString("1")).toBe(true);
  expect(validateString("1/2")).toBe(true);
  expect(validateString("1&1/2")).toBe(true);
});
test("test validateString() to return false for incorrect input", () => {
  expect(validateString("1a")).toBe(false);
  expect(validateString("1a/2b")).toBe(false);
  expect(validateString("1a&1b/2b")).toBe(false);
});

test("test validateFractionFormat to throw error for incorrect fraction format", () => {
  expect(() => validateFractionFormat("2//3")).toThrow();
});
test("test validateFractionFormat to not throw error for incorrect fraction format", () => {
  expect(() => validateFractionFormat("2/3")).not.toThrow();
});
test("test validateFraction() to throw Error if numerator > denominator", () => {
  expect(() => validateFraction("3/1")).toThrow();
  expect(() => validateFraction("3/0")).toThrow();
});
test("test validateFraction() to not throw Error if numerator < denominator", () => {
  expect(() => validateFraction("1/3")).not.toThrow();
});
