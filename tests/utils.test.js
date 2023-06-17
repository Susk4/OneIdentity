import {
  convertToFraction,
  parseOperand,
  parseFraction,
  greatestCommonDivisor,
} from "../src/utils";

test("test parseOperand() to return correct number for correct input", () => {
  expect(parseOperand("1&1/2")).toBe(parseInt("1") + parseFraction("1/2"));
  expect(parseOperand("1&1/3")).toBe(parseInt("1") + parseFraction("1/3"));
  expect(parseOperand("1/2")).toBe(parseFraction("1/2"));
  expect(parseOperand("1/3")).toBe(parseFraction("1/3"));
});

test("test parseFraction() to return correct number for correct input", () => {
  expect(parseFraction("1/2")).toBe(parseInt("1") / parseInt("2"));
  expect(parseFraction("1/3")).toBe(parseInt("1") / parseInt("3"));
});

test("test greatestCommonDivisor() to return correct greatest common divisor", () => {
  expect(greatestCommonDivisor(12, 18)).toBe(6);
  expect(greatestCommonDivisor(13, 17)).toBe(1);
  expect(greatestCommonDivisor(8, 32)).toBe(8);
  expect(greatestCommonDivisor(-15, 30)).toBe(15);
  expect(greatestCommonDivisor(1234567890, 9876543210)).toBe(90);
  expect(greatestCommonDivisor(42, 42)).toBe(42);
});

test("test convertToFraction() to return correct fraction string for decimal", () => {
  expect(convertToFraction(5)).toBe("5");
  expect(convertToFraction(3.75)).toBe("3&3/4");
  expect(convertToFraction(0.3333)).toBe("33/100");
  expect(convertToFraction(0.25)).toBe("1/4");
  expect(convertToFraction(2.5)).toBe("2&1/2");
  expect(convertToFraction(0.6)).toBe("3/5");
  expect(convertToFraction(0.8)).toBe("4/5");
  expect(convertToFraction(4.0)).toBe("4");
});
