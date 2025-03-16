# Byte Order Mark (BOM) and Endianness

## BOM (Byte Order Mark)
The **Byte Order Mark (BOM)** is a **Unicode character** (U+FEFF) used at the beginning of a text file or data stream to indicate the encoding and the **endianness** (byte order) of the file. It plays an essential role in helping systems correctly interpret the text encoding, especially in encodings like **UTF-16** and **UTF-32**.

### Key Points About BOM:
- **Unicode Character**: BOM is encoded as the Unicode character **U+FEFF**. While it is a real Unicode character, it is not intended to appear in the visible text of the file.
- **Purpose**: Its main function is to signal the encoding of the text and, in the case of multi-byte encodings like UTF-16 and UTF-32, to specify the **byte order** (endianness).
- **UTF-8**: In UTF-8, the BOM is optional and is not strictly needed because UTF-8 is byte-oriented and does not have endianness issues. However, when present, the BOM in UTF-8 is represented by the byte sequence **`EF BB BF`**.

### BOM in Different Encodings:
- **UTF-16LE (Little Endian)**: The BOM is `FF FE`.
- **UTF-16BE (Big Endian)**: The BOM is `FE FF`.
- **UTF-32LE (Little Endian)**: The BOM is `FF FE 00 00`.
- **UTF-32BE (Big Endian)**: The BOM is `00 00 FE FF`.

---

## Endianness

**Endianness** refers to the order in which bytes are stored in memory or transmitted in a data stream. It is important in multi-byte encodings like **UTF-16** and **UTF-32**, where characters are represented by two or more bytes. The order in which these bytes are arranged determines how a system interprets the data.

There are two types of endianness:

### 1. Little Endian:
- In **Little Endian** systems, the **least significant byte (LSB)** is stored first (at the lowest memory address), and the **most significant byte (MSB)** is stored last.
- Example: For the hexadecimal number `0x12345678`, in little-endian format, it would be stored as `78 56 34 12`.

### Advantages of Little Endian:
- Easier for systems to perform operations on lower significant bytes first, which is useful in many low-level operations.
- Commonly used by modern hardware architectures like **Intel** and **AMD** processors.

### 2. Big Endian:
- In **Big Endian** systems, the **most significant byte (MSB)** is stored first (at the lowest memory address), and the **least significant byte (LSB)** is stored last.
- Example: For the hexadecimal number `0x12345678`, in big-endian format, it would be stored as `12 34 56 78`.

### Advantages of Big Endian:
- Easier for humans to read since the bytes are stored in the same order as the digits appear in a multi-byte value (e.g., a number written left to right).
- Commonly used in **network protocols** (often referred to as **network byte order**).

---

## How BOM and Endianness Work Together:
- In **UTF-16** and **UTF-32**, BOM is crucial because it indicates the **endianness** of the data.
  - For example, if a BOM of `FF FE` is detected, the system knows the data is in **little-endian** format.
  - If the BOM is `FE FF`, the system understands that the data is in **big-endian** format.

- In **UTF-8**, endianness doesn't apply because the encoding is byte-oriented, so the BOM is not strictly required. However, some applications may still include it (`EF BB BF`) as a signal that the file is UTF-8 encoded.

---

## Comparison Table

| Aspect        | Description                                                       | Usage/Encoding                                                 |
|---------------|-------------------------------------------------------------------|----------------------------------------------------------------|
| BOM (Byte Order Mark) | A Unicode character (U+FEFF) used to signal encoding and endianness.     | Present in UTF-8 (optional) and UTF-16/32 (required for endian detection). |
| Endianness            | Refers to the byte order in multi-byte encodings like UTF-16 and UTF-32. | Applicable to encodings like UTF-16/32 where byte order matters.           |
| Little Endian         | Least Significant Byte (LSB) stored first; used by Intel and AMD.        | Dominant in most modern hardware architectures.                            |
| Big Endian            | Most Significant Byte (MSB) stored first; used in network protocols.     | Used in network protocols and some older systems.                          |



##  Note :
            2 hexadecimal digits represents 1 byte.
            0x425A =>  2 bytes.


## Least Significant digit  :  The one with less place value.

## Most Significant digit  :  The one with more place value.


=>  node --inspect-brk app.js