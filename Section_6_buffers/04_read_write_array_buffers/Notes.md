The DataView interface in JavaScript provides a way to interact with an ArrayBuffer at a low level, allowing you to read and write various data types at specific offsets. This is especially useful for handling binary data with different types and controlling byte order (endianness).

Here’s a focused explanation of how to use DataView for reading and writing binary data:

1. Basics of DataView:

        A DataView is a wrapper around an ArrayBuffer that allows access to its data with specific types and offsets.
        It supports reading and writing different data types like Int8, Uint8, Int16, Uint16, Float32, etc.

    Creating a DataView:

        const buffer = new ArrayBuffer(16); // Create a buffer of 16 bytes
        const view = new DataView(buffer); // Wrap the buffer in a DataView

        view.setInt8(byteOffset,value) 
                       ||         ||=====> Here, we can give decimal, hexadecimal, octal & binary value.
                       ||
                       ||
                       ||========> Here byteoffset indicates at which index of ArrayBuffer we are going to store a value.


    Note:  We can connect one ArrayBuffer with multiple DataView.

         const view2 = new DataView(arrayBuffer,byteOffset)
                                                   ||======> Here byteoffset indicates from which index of ArrayBuffer this view 0 indexing starts.

    Problem:  What if i set 260 in view.setUint8(0,260)  
              Binary of 260: 0001 0000 0100
              Now the nibble 0001 neglected
              Final: 0000 0100 === 4 in decimal


    Properties in DataView:
           1. buffer
           2. byteLength
           3. byteOffset

    1. Writing Data to an ArrayBuffer:
  
        The set<Type> methods are used to write data to the buffer.

        Example: Using setInt8 and setUint8
        setInt8(byteOffset, value): Writes an 8-bit signed integer at the specified byte offset.
        setUint8(byteOffset, value): Writes an 8-bit unsigned integer at the specified byte offset.

        const buffer = new ArrayBuffer(4); // Create a 4-byte buffer
        const view = new DataView(buffer);

        // Write values to the buffer
        view.setInt8(0, -5); // Write -5 as an 8-bit signed integer
        view.setUint8(1, 255); // Write 255 as an 8-bit unsigned integer
        view.setInt8(2, 127); // Write 127 as an 8-bit signed integer
        view.setUint8(3, 128); // Write 128 as an 8-bit unsigned integer

        // Check the raw binary content
        console.log(new Uint8Array(buffer)); // Uint8Array(4) [251, 255, 127, 128]
    
    2. Reading Data from an ArrayBuffer:
     
        The get<Type> methods are used to read data from the buffer.

        Example: Using getInt8 and getUint8
        getInt8(byteOffset): Reads an 8-bit signed integer from the specified byte offset.
        getUint8(byteOffset): Reads an 8-bit unsigned integer from the specified byte offset.
        
        // Reusing the buffer from the writing example
        console.log(view.getInt8(0)); // -5 (8-bit signed integer)
        console.log(view.getUint8(1)); // 255 (8-bit unsigned integer)
        console.log(view.getInt8(2)); // 127 (8-bit signed integer)
        console.log(view.getUint8(3)); // 128 (8-bit unsigned integer)
        
    3. Controlling Endianness:

        For multi-byte values (e.g., Int16, Uint16, etc.), DataView allows you to specify endianness:

        Little-endian: Least significant byte comes first.
        Big-endian: Most significant byte comes first.

        const buffer = new ArrayBuffer(4); // Create a 4-byte buffer
        const view = new DataView(buffer);

        // Writing 16-bit values with different endianness
        view.setInt16(0, 258, true); // Little-endian
        view.setInt16(2, 258, false); // Big-endian

        // Reading the values back
        console.log(view.getInt16(0, true)); // 258 (Little-endian)
        console.log(view.getInt16(2, false)); // 258 (Big-endian)


