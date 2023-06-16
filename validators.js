// function parseFraction(fraction) {

export function validateString(input) {
  const regex = /^[0-9&/]+$/;
  return regex.test(input);
}
// Function to validate the operand string
export function validateOperand(operand) {
  if (!validateString(operand)) {
    throw new Error('Operand should be a number,fraction or improper fraction');
  }

  if (operand.includes('&')) {
    const [_, fraction] = operand.split('&');
    if (fraction.includes('/')) {
      validateFraction(fraction);
    }
    else {
      throw new Error('Fraction should be in the format of numerator/deniminator');
    }
  } else {
    if (operand.includes('/')) {
      validateFraction(operand);
    }
  }
}
// Function to validate the fraction string
export function validateFraction(fraction) {
  const [numerator, deniminator] = fraction.split('/');
  if (numerator > deniminator) {
    throw new Error('Numerator should be less than deniminator');
  }
}