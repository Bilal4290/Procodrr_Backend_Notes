=>   What is xxd?

        xxd is a Unix/Linux command-line utility that creates a hex dump of a file or a string. It can also convert a hex dump back to its original binary form. In simpler terms, it is a tool for viewing the binary content of files in a readable hexadecimal format.


          (1)  xxd fileName:

                Creates a hexadecimal dump of the file, showing both hex values and ASCII characters.

          (2)  xxd -b fileName:

                Creates a binary dump of the file, showing the file content as a series of binary digits (1s and 0s) alongside the ASCII characters.
                
          (3)  xxd -g 1 fileName:

                Creates a hex dump but groups the output in 1-byte blocks rather than the default 2-byte groups, making the output easier to analyze on a per-byte basis.




=>   UTF-8 Encoding Rules:

            ## For 1 byte character:
               
               `0xxxxxxx`   =>  Character stores in 7 bits.

            ## For 2 bytes character:

               `110xxxxx 10xxxxxx`   =>  Character stores in 11 bits.

            ## For 3 bytes character:

               `1110xxxx 10xxxxxx 10xxxxxx`  =>  Character stores in 16 bits.

            ## For 4 bytes character: 

               `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` =>  Character stores in 21 bits.



=>  In node.js when we read a file then it gives buffer, buffer is an array, we can use forEach on bufferarray,
    then it gives a single element in decimal form we use toString(2) in each element and can see binary.

   
   import fs from 'node:fs/promises'

   const buffer = await fs.readFile(filePath)

   const binaryStr = ''

   buffer.forEach((el) => {
         binaryStr += el.toString(2) + ' '
   })

   console.log(binaryStr)