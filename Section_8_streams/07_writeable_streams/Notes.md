=>  Creating a Write Stream:

        The fs.createWriteStream() method is used to create a writable stream that writes data to a specified file.

        import fs from 'fs'
        const writeStream = fs.createWriteStream(filePath, options);

        Parameters:
            1. filePath: Path of the file where the data will be written.  Example: 'output.txt'
            2. options (optional):
                flags: File system flags, e.g., 'w' for writing (default), 'a' for appending.
                encoding: Character encoding for the file, e.g., 'utf8'.
                highWaterMark: The size of the internal buffer in bytes (default: 16 KB for writable streams).
                mode: File permission mode (default: 0o666).
                autoClose: Whether the stream should close automatically after the operation (default: true).



=>   Writing Data with writeStream.write():

        The write() method writes data to the stream.
        writeStream.write(data, encoding, callback);

        Parameters:
            data: The data you want to write to the file (string or Buffer).
            encoding (optional): Encoding of the data (default: 'utf8').
            callback (optional): A function that gets called when the data has been written.


=>   Understanding highWaterMark:

        Default Value: 16 KB (16 * 1024 bytes) for writable streams.
        It specifies the maximum size of the internal buffer.
        When the buffer exceeds this size, write() will return false to prevent overloading.






=>   Comparing Two Methods:

     (a)  Using fs.appendFileSync():
          
           readStream.on('data', (chunkBuffer) => {
                 fs.appendFileSync('target_path', chunkBuffer);
           });


           Synchronous Nature:
                Blocks the event loop for each chunk, slowing down the process.
           Performance Impact:
                Higher CPU usage (20%) and longer execution time (27 seconds).


    
     (b)  Using writeStream.write():

           readStream.on('data', (chunkBuffer) => {
                  writeStream.write(chunkBuffer);
           });


           Asynchronous Nature:
                Non-blocking, as writeStream.write() uses buffering to handle chunks.
           Performance Boost:
                Lower CPU usage (16%) and faster execution time (16 seconds).



=>   Why is writeStream Faster?

            Efficient Buffer Management: The writable stream writes data asynchronously, allowing the read and write operations to overlap.
            Non-Blocking: The app does not wait for each chunk to be written before processing the next one.