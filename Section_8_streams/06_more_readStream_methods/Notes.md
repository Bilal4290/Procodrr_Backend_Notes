##  1. readStream.setEncoding():

        Purpose: Sets the character encoding for the stream data (e.g., 'utf8', 'ascii', etc.).

        By default, Node.js streams provide Buffer objects. When you set an encoding, the stream converts the Buffer data into a string of the specified encoding.

        Key Point: Use setEncoding() when working with text files. It’s unnecessary for binary files (like images or videos).


##  2. readStream.destroy():

        Purpose: Immediately destroys the stream and clears the internal buffer.

        It’s used to:
            Stop reading when you no longer need data.
            Prevent unnecessary processing (e.g., if an error occurs).

        Behavior:
            Once destroyed, the stream fires the 'close' event, but not the 'end' event.
            This is because the 'end' event signifies that all data has been read, and destroy() skips that.



##  3. readStream.on('close', callback) vs readStream.on('end', callback):

        'end':
            Fired when the stream has completely read all data from the source.
            This event signifies the normal end of a stream.
            Not fired if the stream is destroyed prematurely.

        'close':
            Fired when the stream is fully closed (e.g., file descriptors released).
            Always fired, even if the stream is destroyed (destroy()).
            May also fire after the 'end' event in normal cases.

        Key Difference:
            'end' is about data being fully read; 'close' is about the resource being released.



##  4. readStream.on('error', callback):

        Purpose: Handles errors that occur during streaming (e.g., file not found, permission denied).
        Behavior:
                The 'error' event fires before the 'close' event.
                If an error occurs, it prevents the 'end' event from firing.



##  5. readStream.on('open', callback):

        Purpose: Fired when the stream is successfully opened (e.g., file descriptors are ready).
        Useful for tracking the beginning of the stream’s lifecycle.


##  6. readStream.on('ready', callback):

        Purpose: Fired when the stream is ready to be used (internally signals initialization is complete).
        It’s similar to 'open', but 'ready' is part of the stream's more generalized readiness, not just files.
        Not commonly used.


##  7. Combining highWaterMark and encoding:

        You can specify both when creating a stream:
        { highWaterMark: 4, encoding: 'utf-8'}


##  8. Stream Prototype and Class Hierarchy:

       readStream is an object created from the Readable class.
       The Readable class is a subclass of the Stream class.       
       The Stream class itself is built on Node.js’s EventEmitter class.


##  9. readStream.pipe() and readStream.unpipe():

        readStream.pipe(destination):

            Purpose: Directly connects the output of a readable stream to a writable stream.

            This allows data to flow automatically without manual event handling.

        
        readStream.unpipe(destination):

            Purpose: Stops piping data to the specified writable stream.
