=>  The Internal Buffer (Water in the Glass):

        The internal buffer in a readable stream is like the glass. It temporarily holds data that is read from the source (like a file).
        Data flows into the buffer (glass) from the source (faucet).
        Your job is to "drink" (consume the data) by using the read() method.


=>  How Data Flows into the Buffer:

        When the stream starts, it begins filling the buffer with chunks of data from the source.
        The size of the buffer is controlled by highWaterMark. 
        For example:
                ⭐ If highWaterMark is 16KB, the buffer holds a maximum of 16KB of data at a time.
                ⭐ The buffer fills continuously until it is empty or paused.



=>  1. readStream.read(size):

        This method takes data from the buffer. You are "sipping" water from the glass.

        If the buffer is empty: read() returns null because there’s nothing to sip.


=>  2. readStream.readableLength:

        It tells you how much water is currently in the glass (how much data is in the buffer).


=>  3. readStream.on('readable'):

        What it does:
            This event tells you when there’s water in the glass (data in the buffer).

        When it fires:
            It fires when new data is added to the buffer.
            You can then call read() to consume that data.


=>  Flow of Events:

        Data arrives in the buffer:
            The stream starts reading data from the source (like a file).
            The data is stored in the buffer.
            When there’s data, the 'readable' event fires.

        You consume the data:
            You call read() to take data from the buffer.
            The buffer’s size decreases (readableLength decreases).

        If the buffer is empty:
            read() returns null.
            The stream waits for more data to be loaded into the buffer.