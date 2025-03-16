=>   Character Set: 

       Defines the range of characters and tells you which characters exist and what their numeric codes are.

       A character set (often called a "charset") is essentially a way to represent characters (like letters, numbers, and symbols) in computers using numeric codes. Computers store everything as numbers (binary), and a character set helps define how these numbers map to readable text.


=>   Popular Charactersets :

        (1)  ASCII
        (2)  UNICODE



=>   ASCII (American Standard Code for Information Interchange) : 

        Character Set: ASCII is a character set that maps 128 characters (basic Latin letters, digits, punctuation, and control characters) to numeric codes.

        Numeric Values: In ASCII, each character is assigned a unique number. For example:
        A is represented by the number 65
        B is represented by the number 66
        a is represented by the number 97
        0 is represented by the number 48

        Storage: Each character in ASCII is stored in 1 byte (or 8 bits), but the actual character value is stored as a decimal number.
                 Uses 7 bits to store a number.


=>   Unicode  =>  Universal Coded Character Set (UCS) :

        Character Set: Unicode is a much larger character set designed to represent characters from all languages, including symbols, emojis, and more. It includes ASCII as a subset.

        Numeric Values: Unicode assigns each character a code point, which is just a numeric value representing that character. For example:
        A is represented by U+0041 in Unicode, which is the same as ASCII's value of 65.
        A character like 你 (Chinese) is represented by U+4F60, which is 20320 in decimal.

        Storage: Unicode characters are stored in different encodings like UTF-8, UTF-16, or UTF-32, depending on the number of bytes required to store a particular character.
        Unicode is a character set that maps 1.1 million characters.



=>   Numeric Forms of Characters :

        Decimal: Humans usually think of ASCII values in decimal (e.g., A = 65).
        Hexadecimal: Unicode values are typically shown in hexadecimal (e.g., A = U+0041).
        Binary: Internally, computers store everything in binary. So, whether it's an ASCII or Unicode character, it will be converted to binary for storage or processing.



=>   Storage in Bytes:

        UTF-8: Uses 1 to 4 bytes per character.
        UTF-16: Uses 2 to 4 bytes per character.
        UTF-32: Uses 4 bytes per character (fixed length).


=>    UTF-8 (8-bit Unicode Transformation Format) :

        Variable-length encoding: Uses 1 to 4 bytes per character.

        1 byte (for ASCII characters) – covers code points 0-127, so basic English letters (like 'A', 'B', etc.) are stored as 1 byte.
        2 bytes for characters with code points between 128 and 2047.
        3 bytes for most characters from non-Latin scripts like Greek, Cyrillic, Arabic, and Hebrew.
        4 bytes for characters outside the Basic Multilingual Plane (BMP), such as emojis, ancient scripts, or rare symbols.

        Common Usage: UTF-8 is the most widely used encoding because it's backward compatible with ASCII and efficient for representing a wide range of characters.



=>    Character Encoding: 
                          
            Defines how those numeric values are stored in binary form. 
            For example, UTF-8 encodes characters in 1 to 4 bytes.