=>  Unsigned Binary Numbers:

      These numbers represent only non-negative integers (0 and positive values).

      With 8 bits: 0 to 255


=>  Signed Binary Numbers:

      These numbers represent both positive and negative integers by using the most significant bit (MSB) as a sign bit.
           MSB = 0: The number is positive.
           MSB = 1: The number is negative.

           With 8 bits: −128 to +127

=>  How our system determines that the given binary is signed or unsigned:

      The work of determination is of software.
      Our programming language determines that it is signed or unsigned.
      When we are writing then we tell that it is signed or unsigned number, then a label attaches on the number.

      Eg:  10000000
             ||=======> Unsigned => 128 value
             ||=======> Signed  => -128 value



=>  How to convert signed value in negative:

    Eg: 10000000

      Take the 2's complement:
         (1) Invert the digits: 01111111 == 127
         (2) Add 1 to it:       01111111+1 == 10000000 == -128


=> Note:

    The signed and unsigned values are same from 0 to 127.
    The signed and unsigned values of 128 is 128 and -128.  
     

