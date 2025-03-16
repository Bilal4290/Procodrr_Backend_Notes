In Node.js (and JavaScript in general), you can work with hexadecimal numbers using a few different methods. Here’s how to handle hexadecimal numbers in Node.js:

1. Hexadecimal Literals:
     Hexadecimal numbers can be represented using the 0x prefix.

        Example:

        let hexNumber = 0x1F; // equivalent to decimal 31
        console.log(hexNumber); // Output: 31


2. Using parseInt():
You can convert a string representation of a hexadecimal number to a decimal number using the parseInt() function. Pass 16 as the second argument to indicate the base is hexadecimal.

        Example:

        let hexString = '1F';
        let decimalNumber = parseInt(hexString, 16); // '1F' in hex is 31 in decimal
        console.log(decimalNumber); // Output: 31


3. Converting Decimal to Hexadecimal:
To convert a decimal number to its hexadecimal representation, you can use the toString() method with 16 as the argument.

        Example:

        let decimalNumber = 31;
        let hexNumber = decimalNumber.toString(16);
        console.log(hexNumber); // Output: 1f


4. Uppercase Hexadecimal:
If you want the hexadecimal string in uppercase, you can use toUpperCase().

        Example:

        let decimalNumber = 31;
        let hexNumber = decimalNumber.toString(16).toUpperCase();
        console.log(hexNumber); // Output: 1F


5. Working with Hexadecimal in Math Operations:
JavaScript treats hexadecimal numbers as base-10 internally, so you can perform math operations with them directly.

        Example:

        let hex1 = 0x10; // 16 in decimal
        let hex2 = 0x20; // 32 in decimal

        let result = hex1 + hex2; // 16 + 32 = 48
        console.log(result); // Output: 48


Summary:
        Prefix hexadecimal literals with 0x.
        Use parseInt() to convert hexadecimal strings to decimal.
        Use toString(16) to convert decimal numbers to hexadecimal.
