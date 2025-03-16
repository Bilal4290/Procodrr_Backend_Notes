=>  Piping Streams in Node.js:

        Piping streams is a core feature in Node.js that simplifies connecting a readable stream to a writable stream.


=>    Is pipe() Mainly Used for Read Streams?

        Yes, pipe() is typically called on a readable stream to direct its data to a writable stream.

        readableStream.pipe(writableStream);

        What Happens Internally:
            The readable stream reads chunks of data.
            These chunks are passed directly to the writable stream for writing.
            Node.js handles the flow automatically, including managing backpressure.


=>   How Does Backpressure Work in pipe()?

        Backpressure ensures that the writable stream is not overwhelmed by data from the readable stream. Here's how it works in a piped setup:

        Readable Stream Pauses:

        If the writable stream’s internal buffer is full, it signals that it can't accept more data.
        The readable stream automatically pauses to stop emitting more data.
        
        Writable Stream Resumes:

        Once the writable stream processes some data and has room in its buffer, it signals readiness.
        The readable stream resumes, sending more data.
        This automatic flow control is built into the pipe() mechanism, so you don’t need to manually handle pause() and resume().


=>   readStream.unpipe():

        The readStream.unpipe(writableStream) method disconnects a readable stream from a writable stream, stopping the flow of data.

        If you don’t pass a writable stream as an argument, it unpipes from all connected writable streams.



=>   pipe' Event:

        The 'pipe' event is emitted on the writable stream whenever a readable stream is piped to it. This can be used to log or customize behavior when a stream starts piping.


=>   'unpipe' Event:

        The 'unpipe' event is emitted on the writable stream whenever a readable stream is unpiped from it. This can help track when the connection between streams is terminated