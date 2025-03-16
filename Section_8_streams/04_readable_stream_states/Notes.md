# Readable Stream States

1. **Initial State**:

   - The stream is newly created. It hasn't started flowing or been paused, so no data is being consumed, and the stream hasn't ended. At this point, no reading action has been taken.
   - **`readableFlowing`: `null`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

2. **Flowing State**:

   - The stream is actively reading and pushing data automatically to the consumer via the `'data'` event. The stream hasn’t reached the end of its data yet.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

3. **Paused State**:

   - The stream is paused, meaning it’s not pushing data automatically.
   - **`readableFlowing`: `false`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `true`**

4. **Ended State**:
   - The stream has consumed all available data and emitted the `'end'` event. No more data will flow, and the stream is considered finished.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `true`**
   - **`isPaused()`: `false`**

---

### Readable Stream States Comparison Table

| Stream State      | `readableFlowing` | `readableEnded` | `isPaused()`                                    |
| ----------------- | ----------------- | --------------- | ----------------------------------------------------------- |
| **Initial State** | `null`            | `false`         | `false`              |
| **Flowing State** | `true`            | `false`         | `false`              |
| **Paused State**  | `false`           | `false`         | `true`               |
| **Ended State**   | `true`            | `true`          | `false`              |

---


## 1. readStream.bytesRead:

        What it is:
            This property gives you the total number of bytes that have been read from the stream so far.

        How it works:
            Every time the data event emits a chunk, the stream updates bytesRead with the size of the chunk.

            If the file has chunks of 64KB, and two chunks have been read, bytesRead will show 65536 after the first chunk and 131072 after the second.

        Use Case:
            Useful for tracking the progress of file reading.


## 2. readStream.readableHighWaterMark:

        What it is:
            The maximum size of each chunk that the readable stream will attempt to read at a time, set by the highWaterMark option during stream creation.

        Default Value:
            16KB (16384 bytes) for streams working with strings or buffers.

        Use Case:
            Determines how much data the stream reads at once. Larger values can improve throughput but use more memory.


## 3. readStream.pause():

        What it is:
            Pauses the flow of data from the readable stream. The data event stops emitting chunks until the stream is resumed.

        How it works:
            When paused, the stream doesn’t pull any more data from the underlying source until resume() is called.
            Already buffered data remains available but isn't emitted.

        Use Case:
            Useful for controlling the flow of data, e.g., slowing down processing when the consumer (like a writable stream) can't keep up.


## 4. readStream.resume():

        What it is:
            Resumes the flow of data from a paused readable stream, causing the data event to emit chunks again.

        How it works:
            If the stream is paused, calling resume() makes it start flowing again.
        Use Case:
            Used to restart the flow of data when needed.


## 5. readStream.on('resume', callback):

        What it is:
            An event triggered when the stream is resumed using readStream.resume().

        How it works:
            The 'resume' event is emitted whenever the stream switches from a paused state to flowing mode.

        Use Case:
            Useful for tracking when the stream resumes, often for debugging or logging.


## 6. readStream.on('pause', callback):

        What it is:
            An event triggered when the stream is paused using readStream.pause().

        How it works:
            The 'pause' event is emitted whenever the stream switches from flowing mode to paused mode.

        Use Case:
            Useful for logging or debugging when the stream pauses.