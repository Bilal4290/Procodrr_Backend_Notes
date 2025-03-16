=>  When to use Data View and when to use Typed Arrays:

        Data View  =>  When some part of data is 8 bit, some 16 bit and some 32 bit, whole data is not of one type bit.

        Typed Arrays => When whole data is of same type bit, which may be 8 bit, 16 bit or 32 bit.

=>  Typed Arrays Unsigned Categories:

          1. Int8Array
          2. Int16Array
          3. Int32Array
          4. BigInt64Array
           

=>  Typed Arrays Signed Categories:

          1. Uint8Array
          2. Uint8ClampedArray
          3. Uint16Array
          4. Uint32Array
          5. BigUint64Array
   
=>  Float categories:

          1. Float32Array
          2. Float64Array
   

=>  Why it is called typed array:

      Because it stores one type of value and size should be same/fixed.


=>   How to create typed arrays:

        =>  First Way:

            const buffer = new ArrayBuffer(10)
            const uint8Array = new Uint8Array(buffer)
            unit8Array[0] = 0xfe
            unit8Array[1] = 0xee
            unit8Array[2] = 0x3a

        =>  Second Way:

            const uint8Array = new Uint8Array(10)
            unit8Array[0] = 0xfe
            unit8Array[1] = 0xee
            unit8Array[2] = 0x3a

        =>  Third Way:

            const uint8Array = new uint8Array([0xfe,0xee,0x3a])


=>  Second parameter in ArrayBuffer:

       const buffer = new ArrayBuffer(4,{maxByteLength:16})  // After this resizable turns true.


       Now we can the array as:
       buffer.resize(8)

            

