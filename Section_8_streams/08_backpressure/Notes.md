=>  Write Streams and Buffers:

        A Write Stream in Node.js is a way to send data to a destination incrementally. Instead of writing everything at once, data is sent in chunks.

        When you write data to a stream, it goes into an internal buffer. The buffer is a temporary holding area that stores data before it gets written to the destination (like a file or a network).


=>  writeStream.writeableLength:

        The writeableLength property tells you how much data is currently in the internal buffer waiting to be processed. This is useful for monitoring the status of the buffer.


=>  Backpressure:

        Backpressure is a mechanism to handle cases where the write speed exceeds the read speed. When the buffer becomes full, the write stream temporarily pauses accepting new data.

        This is where writeStream.write() plays an important role:

        When you call writeStream.write(data), it returns:
        true: If the data was successfully written to the buffer.
        false: If the buffer is full and backpressure is applied. This means you should stop writing for now.


=>  writeStream.on('drain', callback):

        The 'drain' event is your signal to resume writing. It gets emitted when the buffer has been flushed enough to make room for more data.


=>  Real-Life Analogy:

        Imagine you're pouring water into a funnel:

        Write speed: How fast you pour water.
        Read speed: How fast water flows out of the funnel.
        Buffer: The funnel itself.
        Backpressure: If you pour too fast, the funnel overflows. You need to pause until the funnel clears.
        The 'drain' event is like someone saying, "Okay, the funnel is clear now. You can pour more water."