# Types of Streams in Node.js

Node.js streams allow you to work with data efficiently by processing it incrementally, without loading the entire data into memory. Streams are particularly useful for handling large datasets or continuous data flows. There are four types of streams in Node.js:

## 1. Readable Streams
Readable streams are used to **read data** from a source, such as reading files or receiving HTTP requests.

## 2. Writable Streams
Writable streams are used to **write data** to a destination, such as writing to a file or sending HTTP responses.

## 3. Duplex Streams
Duplex streams are streams that can **both read and write data**. These are useful for situations like network communication, where you both send and receive data.

## 4. Transform Streams
Transform streams are a special type of duplex stream where the **output is a transformation of the input**. They modify or process the data as it passes through the stream, such as compressing or encrypting data.




# Ideal Chunk Sizes

The ideal chunk size depends on the use case:

## 1. File System Streams

Default size: 64KB (Node.js uses this for file streams).
Larger files: Increase the chunk size for faster throughput.
Smaller files: Stick to the default size to avoid overhead.

## 2. Network Streams

Default size: 16KB for readable streams and writable streams in Node.js.
For high-performance applications, tune the size based on network speed and buffer capacity.

## 3. Custom Data

Experiment with sizes like 4KB, 16KB, 64KB, or 256KB based on your application’s performance and memory profile.
Smaller chunks → Less memory usage but more overhead.
Larger chunks → Higher throughput but more memory usage.