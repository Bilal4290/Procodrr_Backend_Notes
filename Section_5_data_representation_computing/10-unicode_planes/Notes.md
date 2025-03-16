# Unicode Planes and Their Usage

In Unicode, characters are grouped into different **planes** based on their code points. Each plane consists of **65,536 code points** (or 2^16), which are represented as hexadecimal numbers ranging from **U+0000** to **U+FFFF**. Unicode defines **17 planes** in total, which can be thought of as different layers of the Unicode character set, each serving specific purposes.

## Plane 0: Basic Multilingual Plane (BMP)

- **Range**: U+0000 to U+FFFF (65,536 code points)
- **Purpose**: 
  - Contains characters for most modern scripts including Latin, Greek, Cyrillic, Arabic, Hebrew, Chinese, Japanese, and Korean.
  - Includes punctuation marks, digits, mathematical symbols, and control characters.
  
- **Examples**:
  - Latin alphabet: U+0041 (A), U+0061 (a)
  - Chinese characters: U+4E00 to U+9FFF
  - Punctuation: U+002E (period), U+003F (question mark)

## Plane 1: Supplementary Multilingual Plane (SMP)

- **Range**: U+10000 to U+1FFFF (65,536 code points)
- **Purpose**: 
  - Contains rare or historical scripts and specialized symbols, including ancient languages and emoji.
  
- **Examples**:
  - Linear B Syllabary: U+10000 to U+1007F
  - Egyptian Hieroglyphs: U+13000 to U+1342F
  - Emoji: U+1F600 (😀), U+1F680 (🚀)

## Plane 2: Supplementary Ideographic Plane (SIP)

- **Range**: U+20000 to U+2FFFF (65,536 code points)
- **Purpose**: 
  - Dedicated to rare and historic Chinese, Japanese, and Korean (CJK) ideographs.
  
- **Examples**:
  - Rare CJK Ideographs: U+20000 to U+2A6DF

## Plane 3: Tertiary Ideographic Plane (TIP)

- **Range**: U+2F000 to U+2FFFF (65,536 code points)
- **Purpose**: 
  - Reserved for additional ideographs, largely unused.

## Plane 14: Supplementary Special-purpose Plane (SSP)

- **Range**: U+E0000 to U+EFFFF (65,536 code points)
- **Purpose**: 
  - Reserved for special purposes, including language tagging and non-visible formatting characters.
  
- **Examples**:
  - Language tags: U+E0001 (Language Tag)

## Plane 15 & 16: Private Use Planes (PUA)
  
- **Range**: 
  - Plane 15: U+F0000 to U+FFFFF
  - Plane 16: U+100000 to U+10FFFF
- **Purpose**: 
  - Reserved for private use, meaning that no standard characters are assigned here.
  
- **Examples**:
  - Custom symbols or experimental scripts.

## Other Unused Planes

Planes 4 to 13 (U+30000 to U+DFFFF) are currently **unassigned** and reserved for future use by the Unicode standard.

## Summary of Unicode Planes:

| Plane  | Name                                | Code Point Range        | Primary Usage                                      |
|--------|-------------------------------------|-------------------------|---------------------------------------------------|
| Plane 0| Basic Multilingual Plane (BMP)       | U+0000 to U+FFFF         | Modern scripts, common symbols, punctuation, etc.  |
| Plane 1| Supplementary Multilingual Plane (SMP)| U+10000 to U+1FFFF       | Rare/historical scripts, music, emoji              |
| Plane 2| Supplementary Ideographic Plane (SIP)| U+20000 to U+2FFFF       | Rare and historic CJK ideographs                   |
| Plane 3| Tertiary Ideographic Plane (TIP)     | U+2F000 to U+2FFFF       | Additional ideographs (mostly unused)              |
| Plane 14| Supplementary Special-purpose Plane (SSP) | U+E0000 to U+EFFFF  | Special-purpose characters (formatting, tags)      |
| Plane 15| Private Use Plane 1 (PUA)           | U+F0000 to U+FFFFF       | Private use                                        |
| Plane 16| Private Use Plane 2 (PUA)           | U+100000 to U+10FFFF     | Private use                                        |

The remaining planes (Planes 4-13) are currently unassigned but reserved for future expansions of Unicode.
