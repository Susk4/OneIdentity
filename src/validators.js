

export function validateString(input) {
  const regex = /^[0-9&/]+$/;
  return regex.test(input);
}
export function validateOperand(operand) {
  if (!validateString(operand)) {
    throw new Error("Operand should be a number,fraction or improper fraction");
  }

  if (!operand.includes("&")) {
    if (operand.includes("/")) {
      validateFractionFormat(operand);
    }
  } else if (operand.split("&").length === 2) {
    const [_, fraction] = operand.split("&");
    validateFractionFormat(fraction);
  } else {
    throw new Error("Operand should be in format whole&numerator/denominator");
  }
}
export function validateFraction(fraction) {
  const [numerator, denominator] = fraction.split("/");
  if (numerator >= denominator) {
    throw new Error("Numerator should be less than deniminator");
  }
}

export function validateFractionFormat(fraction) {
  if (fraction.split("/").length === 2) {
    validateFraction(fraction);
  } else {
    throw new Error(
      "Fraction should be in the format of numerator/deniminator"
    );
  }
}
