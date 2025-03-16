State 1: Writable (Initial) State:

        The stream is ready to accept data.
        Data can be written using writeStream.write(data).

        Check: writeStream.writable   // true if the stream is writable


State 2: Corked State:

        The stream is buffering written data instead of sending it immediately.
        This state occurs after calling cork().

        Check: writeStream.writableCorked   // 0 means not corked, > 1 means corked


State 3: Ended State:

        The stream has been signaled to end after calling writeStream.end().
        No more writes are allowed, but the stream may still have buffered data that needs to be flushed.

        Check: writeStream.writableEnded   // true after end() is called


State 4: Finished State:

        The stream has been completely flushed, and all data has been written to the destination.
        This state is reached after the 'finish' event is emitted.

        Check: writeStream.writableFinished   // true when all data is flushed




What Happens During writeStream.cork()?

        When you call cork(), the writable stream temporarily stops sending data to the destination. Instead, it holds (buffers) the data in memory.

        Imagine you're writing a letter:

        Without buffering: You send each word to the recipient one by one, which is inefficient because the recipient receives the words separately.
        With buffering: You write the entire letter first (store it in memory) and send it all at once (more efficient).



What Happens During writeStream.uncork()?

        When you call uncork(), all the buffered data is sent to the destination as one batch. This reduces the number of write operations and improves performance.

        Continuing the analogy:

        After writing the entire letter (buffering), you put it in an envelope and send it all at once when you "uncork."