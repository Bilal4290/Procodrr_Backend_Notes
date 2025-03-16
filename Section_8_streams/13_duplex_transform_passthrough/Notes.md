=>  What Are Streams in Node.js?

    Streams are like pipes that let you move water (data) from one place to another. There are different types of pipes:

        Readable stream: Water flows out of this pipe (e.g., reading a file).
        Writable stream: Water flows into this pipe (e.g., writing to a file).
        Duplex stream: Water can flow both into and out of this pipe.
        Transform stream: As water flows through this pipe, it is changed (e.g., filtering or coloring it).
        PassThrough stream: A special Transform stream that doesn’t change the water—it just lets it pass through.


=>  Duplex Streams:

        A Duplex stream is a stream that is both readable and writable. It can be used to simultaneously read and write data, but these operations are independent. The data you write into the stream does not affect the data you read from it.


=>  Transform Stream:

        A Transform stream modifies the data as it passes through. You write data in, and it gives you back the transformed (changed) data.

        Real-World Example:
        Imagine a water filter:

        Dirty water goes in (write).
        Clean water comes out (read).
        The water gets transformed (filtered) while passing through.


=>  PassThrough Stream:

        A PassThrough stream is like a Transform stream, but it doesn’t modify the data—it just lets it pass through unchanged.

        Real-World Example:
        Imagine a transparent pipe:

        Water flows in.
        The same water flows out, untouched.
        You can use it to measure the flow but not change it.

=>  Can You Use the fs Module to Create a Duplex Stream?

    No, the fs module doesn’t directly give you Duplex streams. It provides:
        Readable streams for reading files.
        Writable streams for writing files.