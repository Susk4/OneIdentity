# OneIdentity Coding Test

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

### One Identity Coding Challenge

### The Problem

Write a command-line program that takes operations on fractions as input and produces a fractional result.

- The command-line program shall repeatedly prompt the user for input and display the result until user types "exit".
- Legal operators shall be \*, /, +, - (multiply, divide, add, subtract).
- Operands and operators shall be separated by one or more spaces.
- Mixed numbers shall be represented by whole&numerator/denominator; for example, "3&1/4", “-1&7/8”.
- Improper fractions, whole numbers, and negative numbers are allowed as operands.

### Example runs (where '?' represents the command prompt):

? 1/2 \* 3&3/4
= 1&7/8

? 2&3/8 + 9/8
= 3&1/2

? 1&3/4 - 2

= -1/4

## Getting Started <a name = "getting_started"></a>

To run the project locally, you need to install the required dependencies. Follow the instructions below:

### Prerequisites

Before getting started, ensure that you have the following prerequisites installed:

- Node.js (version X.X.X or higher)
- npm (Node Package Manager)

### Installing

1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official Node.js website: [https://nodejs.org](https://nodejs.org).

2. Open a command-line interface or terminal.

3. Navigate to the root directory of the project.

4. Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

## Usage <a name = "usage"></a>

To run the project, use the following command:

```bash
npm start
```

This command will start the project and execute the main entry point defined in your `package.json` file.

Now you can start typing in the desired calculations. The program will display the results or any messages regarding the input.

To exit the program, just type the following command:

```bash
? exit
```

### Testing

To run the unit tests for the project, use the following command:

```bash
npm test
```

This command will execute the test suite and provide the test results, including any failures or errors.

Make sure to customize the scripts in your `package.json` file according to your project structure and testing framework.

Feel free to explore and modify the code to fit your needs!

### Known issues

- Precision for long fractions
- Handling infinite fractions
