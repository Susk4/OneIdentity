const readline = require('readline');

// Function to parse and convert the fraction string to a decimal number
function parseFraction(fraction) {
  if (fraction.includes('&')) {
    const [whole, fr] = fraction.split('&');
    const [numerator, denominator] = fr.split('/');
    return parseInt(whole, 10) + parseInt(numerator, 10) / parseInt(denominator, 10);
  } else {
    const [numerator, denominator] = fraction.split('/');
    return parseInt(numerator, 10) / parseInt(denominator, 10);
  }
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
      throw new Error('Invalid operator');
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

    const [operand1, operator, operand2] = input.split(' ');
    try {
      const decimal1 = parseFraction(operand1);
      const decimal2 = parseFraction(operand2);

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
