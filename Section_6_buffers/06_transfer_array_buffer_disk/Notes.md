=>  How to decode a text:

    const decoder = new TextDecoder('utf-8')
    const decodedValue = decoder.decode(uint8Array)
    console.log(decodedValue);

=>  Problem:

      const decoder = new TextDecoder('utf-8')
      const decodedValue = decoder.decode(uint8Array.buffer)
      console.log(decodedValue)  // Error came

      TypeError :  The data argument inside [decoder.decode(data)] must be of:
          1. type string
          2. instance of buffer [NodeJS buffer]
          3. TypedArray
          4. DataView 
   

=>  Transferring Array buffer to disk:

     To transfer array buffer to disk, we have to create an ArrayBuffer, then trasfer this buffer as an argument to writeFile.

=>  Transferring Array buffer to one point from another via network.


=>  res.json()
=>  res.text()
=>  res.arrayBuffer()
