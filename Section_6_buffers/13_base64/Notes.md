=>  Base 64:

       It's a character encoding which takes binary data and converts it into string.
       Any type of binary data, which may be:
       1. Image binary data
       2. mp3 binary data
       3. mp4 binary data
       4. pdf binary data


=>  Base 64 Table:

      It has 64 characters in table. [0 to 63]

      [A-Z a-z 0-9 + / =]


=>  Why base64 has 64 characters?

        Because it works on 6bit binary.
        And the maximum value it store is 111111, which is 63 in decimal.


=>  btoa  [Converts binary data to base64 string]

          btoa('string')
          By default use utf-8 and converts the string into binary
          Then make the 6 bit groups.


=>  atob  [Converts base64 string to normal string]



=>  base64 Rules:

         1.  At least 3 bytes (24 bits) should be there to work with.
         2.  If 3 bytes (24 bits) are not there, then base64 encoding will add the required zeros to fill the remaining bits.
         3.  Data should be in multiples of 3 Bytes.