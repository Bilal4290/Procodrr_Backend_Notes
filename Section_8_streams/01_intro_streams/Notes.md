=>  What are Streams in Node.js?

        Streams in Node.js are a way to handle continuous data flows. Instead of waiting for all the data to load and then processing it, streams process the data in chunks as it arrives. This makes them ideal for working with large amounts of data or data that comes in over time (e.g., files, network requests, or logs).


=>  Why Do We Need Streams?

      1. Efficient Memory Usage
            Streams process data piece by piece instead of loading the entire data into memory. This is crucial for large files or when dealing with limited resources.

            Example:
                    Imagine reading a 10GB file. Loading the entire file into memory would crash your system. With streams, you read it in manageable chunks.

      2. Faster Data Processing
            Since streams work on chunks of data as they arrive, you can start processing data immediately instead of waiting for everything to download or load.

            Example:
                    While downloading a video, you can start playing the first part before the download finishes (like YouTube or Netflix).

      3. Pipelining and Composability
            Streams can be connected in a chain (pipeline), where the output of one stream becomes the input for another. This makes complex workflows like data compression or encryption easy and efficient.

            Example:
                    Reading a file → Compressing it → Writing to disk → All in one pipeline.


=>  Types of Streams in Node.js:

    Node.js has four main types of streams:

       1. Readable:
            Data flows into your application (e.g., reading from a file or an HTTP request).

       2. Writable:
            Data flows out of your application (e.g., writing to a file or sending an HTTP response).

       3. Duplex:
            Handles both reading and writing (e.g., a TCP socket).

       4. Transform:
            A special type of duplex stream that modifies the data as it passes through (e.g., zipping or encrypting).



=>  How Streams Work: An Analogy:

    Think of a stream like a water pipeline:
        Readable stream: Water flows from a reservoir (source) into the pipeline.
        Writable stream: Water flows out of the pipeline into a bucket (destination).
        Duplex stream: The pipeline can flow water in both directions.
        Transform stream: The pipeline has a filter that modifies the water (e.g., adding chlorine or filtering dirt).


=>  Example: Reading a File with and Without Streams:

        Without Streams (Inefficient)
    
            const fs = require('fs');

            fs.readFile('largeFile.txt', (err, data) => {
            if (err) throw err;
            console.log(data.toString());
            });

        Reads the entire file into memory before printing it.
        For large files, this can crash the system.

         
        With Streams (Efficient)
           
            const fs = require('fs');

            const stream = fs.createReadStream('largeFile.txt');
            stream.on('data', (chunk) => {
                console.log(chunk.toString());
            });

        Reads the file in small chunks.
        Doesn’t overload the memory


=>   When Should You Use Streams?

        Large Files:
           For reading or writing big files efficiently.

        Continuous Data:
           For handling data that doesn’t arrive all at once (e.g., logs, audio, video).

        Real-Time Processing:
           For tasks like video streaming, real-time chat, or analytics pipelines.

        Network Requests:
           For handling data from APIs or clients without waiting for the entire response.