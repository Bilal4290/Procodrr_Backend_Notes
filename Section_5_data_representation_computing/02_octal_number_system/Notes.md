In Node.js (and JavaScript in general), you can work with octal numbers using various approaches. Here’s a brief overview of how to use the octal number system:

1. Octal Literals (ES6+):
   Starting from ECMAScript 6 (ES6), octal literals can be represented using the 0o prefix.

      Example:

      js
      Copy code
      let octalNumber = 0o17; // equivalent to decimal 15
      console.log(octalNumber); // Output: 15 

2. Using parseInt():
You can also convert a string representation of an octal number to a decimal number using parseInt(). You need to pass the base (8 for octal) as the second argument.

      Example:

      let octalString = '17';
      let decimalNumber = parseInt(octalString, 8); // '17' in octal is 15 in decimal
      console.log(decimalNumber); // Output: 15


3. Converting Decimal to Octal:
To convert a decimal number to its octal representation, you can use the toString() method with 8 as the argument.

      Example:

      let decimalNumber = 15;
      let octalNumber = decimalNumber.toString(8);
      console.log(octalNumber); // Output: 17


4. Working with Octal in Math Operations:
Since JavaScript internally treats numbers as base-10, you can seamlessly use octal numbers in mathematical operations.

      Example:

      let octal1 = 0o10; // 8 in decimal
      let octal2 = 0o12; // 10 in decimal

      let result = octal1 + octal2; // 8 + 10 = 18 in decimal
      console.log(result); // Output: 18


Summary:
      Prefix octal literals with 0o.
      Use parseInt() to convert an octal string to a decimal number.
      Use toString(8) to convert a decimal number to octal.
