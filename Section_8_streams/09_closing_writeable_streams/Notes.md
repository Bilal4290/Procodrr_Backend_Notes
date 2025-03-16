=>    Closing Writable Streams:

        Unlike readable streams, writable streams don’t close automatically. You need to explicitly close them when you're done writing. This is done by calling the writeStream.end() method.

        Why?
        Writable streams might still have data in their internal buffer that needs to be flushed to the destination (e.g., a file or network).
        Calling writeStream.end() ensures the stream finishes writing everything before it closes.


=>    writeStream.end():

        The writeStream.end() method signals that no more data will be written to the stream. It performs two actions:

        ⭐ Flushes any remaining data in the internal buffer.
        ⭐ Emits the 'finish' event when all the data has been written.

        You can optionally pass data as an argument to writeStream.end(data) to write one last piece of data before closing the stream.


=>   'finish' Event:

        The 'finish' event is emitted after writeStream.end() has been called and all the buffered data has been successfully written. This indicates the writable stream has finished its work but is still open.

        Key Points:
        It only runs after all data has been flushed to the destination.
        It's a good place to perform any final cleanup or log completion.


=>   'close' Event:

        The 'close' event is emitted after the stream has been fully closed. This happens after 'finish', but not all writable streams emit 'close' unless explicitly closed.

        To ensure the stream closes properly, you can call writeStream.destroy() or listen to 'close' if the underlying resource (like a file descriptor) is no longer needed.

        Key Points:
        If you want to free up resources immediately, manually close the stream.
        Use the 'close' event to detect when this has happened.



=>    How Events Work Together
 
        Write some data: Using writeStream.write().
        End the stream: Call writeStream.end().
        'finish' event: Once all data is written, this is emitted.
        'close' event: If the underlying resource (file, socket, etc.) is closed.



Method	                        finish Event Fires?	close Event Fires?	  Explanation
writeStream.end()	        ✅ Yes	               ✅ Yes (after finish)	Normal graceful shutdown
writeStream.destroy()	        ❌ No	               ✅ Yes (immediately)	Abrupt termination
