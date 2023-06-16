const readline = require('readline');

// function parseFraction(fraction) {
function validateString(input) {
  const regex = /^[0-9&/]+$/;
  return regex.test(input);
}
// Function to validate the operand string
function validateOperand(operand) {
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
function validateFraction(fraction) {
  const [numerator, deniminator] = fraction.split('/');
  if (numerator > deniminator) {
    throw new Error('Numerator should be less than deniminator');
  }
}

// Function to parse and convert the operand string
function parseOperand(operand) {
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
function convertToFraction(decimal) {
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

// Function to perform the arithmetic operation on fractions
function performOperation(operator, operand1, operand2) {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      throw new Error(`'${operator}' is not a valid operator. Valid operators are +, -, *, and /.`);
  }
  return result;
}

// Main function to read input, perform operations, and display the result
function runCalculator() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.setPrompt('? ');
  rl.prompt();

  rl.on('line', (input) => {
    if (input === 'exit') {
      rl.close();
      return;
    }

    try {
      const split = input.split(' ').filter((item) => item !== '');

      if (!input.includes(' ')) {
        throw new Error('Operands and operator must be separated by spaces.');
      }
      else if (split.length !== 3) {
        throw new Error('Only binary operations are supported.');
      }
      const [operand1, operator, operand2] = split;
      const decimal1 = parseOperand(operand1);
      const decimal2 = parseOperand(operand2);

      const result = performOperation(operator, decimal1, decimal2);
      const fractionResult = convertToFraction(result);
      console.log(`= ${fractionResult}`);
      rl.prompt();
    } catch (error) {
      console.log(error.message)
      rl.prompt();
    }


  });

  rl.on('close', () => {
    console.log('Exiting the program...');
    process.exit(0);
  });
}

// Start the calculator program
runCalculator();
