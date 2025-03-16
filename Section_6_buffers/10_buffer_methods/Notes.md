=>  Buffer Methods:

    import {buffer} from 'buffer'

    const nodeBuffer = Buffer.alloc(byteLength)


1. nodeBuffer.toString('utf-8/utf-16le')
   
       const nodeBuffer = Buffer.alloc(8)
       nodeBuffer[0] = 97
       nodeBuffer[7] = 104

       console.log(nodeBuffer)               //  <Buffer 61 00 00 00 00 00 00 68>
       console.log(nodeBuffer.toString())   //   ah

      🛑 Means it ignores the zeros in between.

       What if decode it using TextDecoder()

       const nodeBuffer = Buffer.alloc(8)
       nodeBuffer[0] = 97
       nodeBuffer[7] = 104 

       const decoder = new TextDecoder('utf-8')
       const decodedValue = decoder.decode(nodeBuffer)

       console.log(nodeBuffer)      //  <Buffer 61 00 00 00 00 00 00 68>
       console.log(decodedValue)   //   ah

       🛑 Means it also ignores the zeros in between.

       What if i write it in text file:

       import fs from 'node:fs'
       
       const nodeBuffer = Buffer.alloc(8)
       nodeBuffer[0] = 97
       nodeBuffer[7] = 104 

       fs.writeFile('text.txt',nodeBuffer)

       🛑 It not ignores the zeros in between, and in the file for zeros it shows null.
       


2.  nodeBuffer.write('string',encoding)
  

3.  nodeBuffer.toJSON()
        This method returns an object.
        {
            type: 'Buffer',
            data: [97,98,0,0,67]
        } 

        Now we can make this object as JSON string and sent whereever we want.
        We can use this method when we want to send binary data in JSON format.


4.  nodeBuffer.subArray()
  

5.  nodeBuffer.copy(nodeBuffer2,0,0,5)
        Above I am saying, copy the nodeBuffer from 0 to 5 index in nodeBuffer2.
        Means nodeBuffer is copied in nodeBuffer2  


6.  nodeBuffer.includes()

7.  nodeBuffer.fill()  

8.  nodeBuffer.readInt8()

9.  nodeBuffer.readInt16LE()

10. nodeBuffer.writeInt8()

11. nodeBuffer.writeInt16LE()

12. nodeBuffer.at()


=>  Properties:

1. nodeBuffer.buffer
2. nodeBuffer.byteLength
3. nodeBuffer.byteOffset

