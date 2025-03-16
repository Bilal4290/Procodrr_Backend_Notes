=>  Why pipe() Does Not Handle Errors:

        The pipe() method focuses on transferring data between streams and does not attach any error handlers. If an error occurs and you haven't added error listeners, the default behavior will result in an uncaught exception, which can crash your application.

=>   How to Properly Handle Errors in pipe():

        You need to manually listen for 'error' events on both the readable and writable streams to prevent crashes.


        const fs = require('fs');

        const readStream = fs.createReadStream('nonexistent-file.txt');
        const writeStream = fs.createWriteStream('output.txt');

        // Handle errors on the readable stream
        readStream.on('error', (err) => {
        console.error('Readable stream error:', err.message);
        writeStream.destroy(); // Clean up the writable stream
        });

        // Handle errors on the writable stream
        writeStream.on('error', (err) => {
        console.error('Writable stream error:', err.message);
        readStream.destroy(); // Clean up the readable stream
        });

        // Pipe the streams
        readStream.pipe(writeStream);

        writeStream.on('finish', () => {
        console.log('Write completed successfully.');
        });



=>   Using pipeline() for Piping Streams in Node.js:

        The pipeline() function in Node.js (introduced in v10.0.0) is a modern alternative to the traditional pipe() method. It simplifies the process of connecting streams and automatically handles errors and resource cleanup.


=>   Why Use pipeline()?

        Error Handling: pipeline() automatically listens for 'error' events on all streams in the pipeline and calls a callback function if an error occurs.
        Resource Management: Ensures proper cleanup of resources if any stream fails.
        Convenience: Provides a clear and structured way to connect multiple streams.


        const fs = require('fs');
        const { pipeline } = require('stream');

        // Create a readable stream (input file)
        const readStream = fs.createReadStream('input.txt');

        // Create a writable stream (output file)
        const writeStream = fs.createWriteStream('output.txt');

        // Use pipeline to connect the streams
        pipeline(readStream, writeStream,
        (err) => {
            if (err) {
            console.error('Pipeline failed:', err.message);
            } else {
            console.log('Pipeline succeeded.');
            }
          }
        );

