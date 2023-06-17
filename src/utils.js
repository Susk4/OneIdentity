import { validateOperand } from "./validators.js";

export function parseOperand(operand) {
  validateOperand(operand);
  if (operand.includes("&")) {
    const [whole, fraction] = operand.split("&");
    return parseInt(whole) + parseFraction(fraction);
  } else if (operand.includes("/")) {
    return parseFraction(operand);
  } else {
    return operand;
  }
}

export function parseFraction(fraction) {
  const [numerator, deniminator] = fraction.split("/");
  return parseInt(numerator) / parseInt(deniminator);
}

export function convertToFraction(decimal) {
  let whole = decimal > 0 ? Math.floor(decimal) : Math.ceil(decimal);
  let fractional = decimal - whole;
  if (fractional === 0) {
    return `${whole}`;
  }
  let numerator = fractional.toFixed(2) * 100; // here some precision is lost
  let denominator = 100;
  let gcd = greatestCommonDivisor(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;
  if (whole === 0) {
    return `${numerator}/${denominator}`;
  } else {
    return `${whole}&${numerator}/${denominator}`;
  }
}

export function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return Math.abs(a);
  }
  return greatestCommonDivisor(b, a % b);
}
