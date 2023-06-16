import readline from 'readline';
import { parseOperand, convertToFraction } from './utils.js';

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
