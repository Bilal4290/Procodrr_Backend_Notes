
Method-1: Reading file with normal buffer

    import fs from "node:fs/promises"

    console.time()
        ⭐ File Size: 1.84GB
        ⭐ Time Taken: 17s
        ⭐ Memory: 1905MB
        ⭐ CPU: 6%
    const bufferContent = await fs.readFile("D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4")
    await fs.writeFile('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\03_readable_streams\\video.mp4',bufferContent)
    console.timeEnd()

    Drawbacks:
        ⭐ Memory Usage: The entire file is loaded into memory. For large files (e.g., 1.84GB), this can cause the application to crash if the memory isn’t sufficient.
        ⭐ Time: Processing happens only after the entire file is read, which can delay the operation.
        ⭐ CPU Usage: Minimal, as there’s no active chunk processing.



Method-2: Using readable stream

    import fs from "node:fs"

    console.time()
        ⭐ File Size: 1.84GB
        ⭐ Time Taken: 21s
        ⭐ Memory: 305MB
        ⭐ CPU: 8%
    const readStream = fs.createReadStream('D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4',{highWaterMark: 100*1024*1024})

    readStream is like a event emitter and on this we can apply events.

    readStream.on('data',(chunkBuffer) => {
        fs.appendFileSync('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\03_readable_streams\\video.mp4',chunkBuffer)
    })

    By default, chunk size 64kb (65536 bytes)

    readStream.on('end',()=>{
        console.timeEnd()
    })


Step 1: Creating a Readable Stream:

    fs.createReadStream()
        ⭐ Creates a readable stream that allows you to read a file in chunks.
        ⭐ It doesn’t load the entire file into memory; instead, it reads a specified amount of data at a time (called a chunk).
        ⭐ Returns a Readable Stream, which is an event emitter.

    highWaterMark
        ⭐ Sets the size of each chunk in bytes.
        ⭐ Here, it is set to 100MB (100 * 1024 * 1024 bytes).
        ⭐ By default, Node.js streams have a chunk size of 64KB (65536 bytes). You can customize this for better performance.


Step 2: Listening to the data Event:

    readStream.on('data', callback)
        ⭐ The data event is emitted whenever a chunk of data is read from the file.
        ⭐ The chunkBuffer parameter contains the data read (a binary Buffer).

    What Happens Here?
        ⭐ A chunk of size 100MB (or smaller, for the last chunk) is read from the source file.
        ⭐ The chunk is immediately written to the destination file using fs.appendFileSync.

    fs.appendFileSync
        ⭐ Writes the chunk to the destination file.
        ⭐ Sync vs Async: The Sync method blocks the event loop until the operation completes, ensuring the write is done before the next chunk is processed.


Step 3: Listening to the end Event:

      The end event is emitted when there is no more data to read from the file.


Why Streams Use Less Memory:

        Instead of loading the entire file (1.84GB) into memory, streams only load a chunk (e.g., 100MB) at a time.
        As soon as a chunk is processed, it’s discarded from memory, making this approach memory-efficient.

Why Streams Take Slightly Longer:

        Processing data in chunks adds a bit of overhead (e.g., emitting events, writing chunks).


Key Concepts Explained

    fs.createReadStream():
        ⭐ Creates a readable stream for processing data in chunks.
        ⭐ Returns an event emitter, allowing you to listen for events like data, end, and error.

    readStream.on('data', callback):
        ⭐ Triggers whenever a chunk of data is available.
        ⭐ The callback receives the chunk as a Buffer.

    readStream.on('end', callback):
        ⭐ Signals that all chunks have been read.

    highWaterMark:
        ⭐ Determines the size of each chunk. Larger sizes reduce the number of events but increase memory usage per chunk.
    
    fs.appendFileSync():
        ⭐ Writes data to a file synchronously, ensuring the operation completes before proceeding.



=>   Problem using fs.appendFileSync:

        If you run the script multiple times without clearing or resetting the destination file, the new content will be appended to the existing file. This results in the file size increasing every time you execute the script, as the same data gets written repeatedly.

    Solution 1: Use fs.writeFileSync to Clear the File Beforehand

        import fs from "node:fs";

        console.time();

        // Clear the destination file before appending
        fs.writeFileSync('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\03_readable_streams\\video.mp4', '');

        // Stream the data in chunks and append
        const readStream = fs.createReadStream('D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4', { highWaterMark: 100 * 1024 * 1024 });

        readStream.on('data', (chunkBuffer) => {
            fs.appendFileSync('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\03_readable_streams\\video.mp4', chunkBuffer);
        });

        readStream.on('end', () => {
            console.timeEnd();
        });

    

    Solution 2: Use fs.createWriteStream:


        import fs from "node:fs";

        console.time();

        // Create a readable stream
        const readStream = fs.createReadStream('D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4', { highWaterMark: 100 * 1024 * 1024 });

        // Create a writable stream
        const writeStream = fs.createWriteStream('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\03_readable_streams\\video.mp4');

        // Pipe readable stream into writable stream
        readStream.pipe(writeStream);

        writeStream.on('finish', () => {
            console.timeEnd();
        });


        Advantages:
            ⭐ Automatically overwrites the file, preventing duplicate content.
            ⭐ Simplifies the code using the pipe method.
            ⭐ Efficient for large files as streams handle chunks internally.


