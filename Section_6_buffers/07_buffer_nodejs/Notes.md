=>  Buffer in Node JS:

       Buffer in NodeJS is like a typed array with some extra properties nad methods.


=>  Creating a buffer in NodeJS:

       const nodeBuffer = new Buffer(byteLength)

       Runs but with a warning that this is deprecated.Please use:
          1. Buffer.alloc()
          2. Buffer.allocUnsafe()
          3. Buffer.from()

        If i write Buffer.alloc(), then it gives no suggestions.
        For suggestions, we have to do two things:
           1. import { Buffer } from 'buffer' 
           2. npm i @types/node -D


        Now it gives suggestions:

        Now you can create buffer like this:

        const nodeBuffer = Buffer.alloc(byteLength)

        Note:
             If you create ArrayBuffer, and you want to connect that ArrayBuffer with Node Buffer, then use Buffer.from().

        const arrayBuffer = new ArrayBuffer(byteLength)
        const nodeBuffer = Buffer.from(arrayBuffer)


=>  toString() method in node buffer:

        const decodedValue = nodeBuffer.toString(encoding)  // encoding means utf-8, utf-16le
        console.log(decodedValue)  // You get decoded value.


=>  If buffer in node is an array of bytes then why you are saying above that it is a global object:

        When I mentioned that Buffer is a global object, I was referring to the class Buffer itself, which is a global object in Node.js. This means you can use the Buffer class without requiring it explicitly, as it's built into the Node.js runtime.

        However, the instances of the Buffer class, which you create using methods like Buffer.alloc, Buffer.from, etc., represent binary data as an array of bytes. These instances are not "global objects" themselves; they are just objects in memory that hold raw binary data.