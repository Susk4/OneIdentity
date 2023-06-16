import { validateOperand } from './validators.js';

// Function to parse and convert the operand string
export function parseOperand(operand) {
  validateOperand(operand);
  if (operand.includes('&')) {
    const [whole, fraction] = operand.split('&');
    return parseInt(whole) + parseFraction(fraction);
  } else {
    return parseFraction(operand);
  }
}

// Function to parse and convert the fraction string
function parseFraction(fraction) {
  const [numerator, deniminator] = fraction.split('/');
  console.log(numerator, deniminator);
  console.log(parseInt(numerator) / parseInt(deniminator))
  return parseInt(numerator) / parseInt(deniminator);
}

// Function to convert a decimal number to a fraction string
export function convertToFraction(decimal) {
  let whole = Math.floor(decimal);
  let fractional = decimal - whole;
  let numerator = fractional.toFixed(2) * 100;
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

// Function to find the greatest common divisor of two numbers
function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}