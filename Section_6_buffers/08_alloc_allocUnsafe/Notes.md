=>  Buffer.alloc(size):

        Purpose: Creates a new buffer of a specified size (in bytes) and initializes it by filling it with zeros.

        Key Point: Safe but potentially slower because it ensures that the allocated memory is cleared.

        Eg:
            const buf = Buffer.alloc(10);   // Allocates 10 bytes, filled with 0
            console.log(buf);              // Outputs: <Buffer 00 00 00 00 00 00 00 00 00 00>


=>  Buffer.allocUnsafe(size):

        Purpose: Creates a new buffer of the specified size (in bytes), but does not initialize it. This means the buffer may contain old, arbitrary data left in memory, making it unsafe unless you overwrite it before use.

        Key Point: Faster than Buffer.alloc because it skips initialization. Use it only when you intend to overwrite the buffer immediately.

        Eg:
            const buf = Buffer.allocUnsafe(10);   // Allocates 10 bytes without clearing memory
            console.log(buf);                    // Outputs: Random garbage data (uninitialized memory)


=>  Buffer.from(data, [encoding]):

        Purpose: Creates a buffer from existing data, such as a string, array, or another buffer. Optionally, you can specify an encoding if the data is a string (e.g., utf8, base64).

        Key Point: Does not preallocate memory; it directly converts the provided data into a buffer. 

        Eg:
            const buf = Buffer.from("Hello");     // Creates a buffer from a string
            console.log(buf);                    // Outputs: <Buffer 48 65 6c 6c 6f>
            console.log(buf.toString());        // Outputs: Hello