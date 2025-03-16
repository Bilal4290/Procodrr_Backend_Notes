🚀 Implementing Internal Buffer for Efficient Writing in Node.js
You're trying to write one lakh numbers efficiently using an internal buffer. This approach reduces the number of disk I/O operations by storing data in memory before flushing it to disk in batches.

Let’s break it down step by step.

📝 Step-by-Step Breakdown of Your Code
js
Copy
Edit
const fs = require('fs');

const fd = fs.openSync('filePath', 'w'); // Open file in write mode
const buff = Buffer.allocUnsafe(bytes); // Allocate an internal buffer

let totalBytesWrittenInBuff = 0; // Tracks how many bytes are written in buffer
let lostStr = ''; // Stores leftover string data when buffer overflows

for (let i = 1; i <= 100000; i++) {
    let str = `${i}, `; // Convert number to string
    str = lostStr + str; // Append leftover string from previous iteration (if any)

    // Write the string into the buffer from the last written position
    const bytesWritteninBuff = buff.write(str, totalBytesWrittenInBuff);
    lostStr = ''; // Reset leftover string

    // Check if some part of the string was NOT written due to buffer overflow
    const bytesWrittenDiff = str.length - bytesWritteninBuff; 
    if (bytesWrittenDiff !== 0) {
        lostStr += str.slice(bytesWritteninBuff); // Store the part that didn’t fit
    }

    // Update total bytes written in buffer
    totalBytesWrittenInBuff += bytesWritteninBuff;

    // If buffer is full, write to file and reset buffer position
    if (totalBytesWrittenInBuff === buff.byteLength) {
        fs.writeSync(fd, buff); // Write the full buffer to disk
        totalBytesWrittenInBuff = 0; // Reset buffer position
    }
}

// Write remaining data in buffer that wasn’t flushed
fs.writeSync(fd, buff.subarray(0, totalBytesWrittenInBuff));

// Write any remaining overflow string
fs.writeSync(fd, lostStr);

fs.closeSync(fd); // Close file
🔎 Explanation of Key Parts
🔹 Step 1: Allocate Buffer & Variables
js
Copy
Edit
const fd = fs.openSync('filePath', 'w');
const buff = Buffer.allocUnsafe(bytes); 
✅ fs.openSync('filePath', 'w') → Opens the file in write mode ('w').
✅ Buffer.allocUnsafe(bytes) → Creates a buffer of bytes size without initializing it (faster than alloc()).

🔹 Step 2: Loop Over 100,000 Numbers
js
Copy
Edit
for (let i = 1; i <= 100000; i++) {
    let str = `${i}, `;
    str = lostStr + str; // Attach any leftover string from last iteration
✅ Convert the number to a string (e.g., 5 → "5, ").
✅ If there was leftover data (lostStr), prepend it to ensure it gets written.

🔹 Step 3: Write to Buffer
js
Copy
Edit
const bytesWritteninBuff = buff.write(str, totalBytesWrittenInBuff);
lostStr = ''; // Reset leftover string
✅ Writes str into buff at totalBytesWrittenInBuff position.
✅ Returns bytesWritteninBuff, which is how many bytes actually got written.

🔹 Step 4: Handle Buffer Overflow
js
Copy
Edit
const bytesWrittenDiff = str.length - bytesWritteninBuff;
if (bytesWrittenDiff !== 0) {
    lostStr += str.slice(bytesWritteninBuff); // Store leftover part
}
✅ If not all of str fit in the buffer, store the leftover part in lostStr.
✅ This happens when buffer is almost full and cannot fit the entire str.

🔹 Step 5: Flush Buffer to File When Full
js
Copy
Edit
totalBytesWrittenInBuff += bytesWritteninBuff;

if (totalBytesWrittenInBuff === buff.byteLength) {
    fs.writeSync(fd, buff); // Write buffer to file
    totalBytesWrittenInBuff = 0; // Reset buffer position
}
✅ If the buffer is full, write it to disk using fs.writeSync(fd, buff).
✅ Reset totalBytesWrittenInBuff to start writing from the beginning again.

🔹 Step 6: Write Remaining Data After Loop
js
Copy
Edit
fs.writeSync(fd, buff.subarray(0, totalBytesWrittenInBuff)); 
fs.writeSync(fd, lostStr);
✅ Flush any remaining data in the buffer (if it wasn’t full in the last iteration).
✅ Write any leftover string (lostStr) that didn’t fit into the buffer.

🔹 Step 7: Close File
js
Copy
Edit
fs.closeSync(fd);
✅ Always close the file after writing to prevent resource leaks.

🚀 Why is This Approach Efficient?
✅ Minimizes Disk I/O → Writes in large chunks instead of writing one number at a time.
✅ Uses an Internal Buffer → Reduces the number of fs.writeSync() calls.
✅ Handles Buffer Overflow → Ensures all data is written, even if it doesn’t fit in the buffer.

📊 Performance Comparison
Approach	File Writes	Speed 🚀
Basic fs.writeSync() in Loop	100,000 writes	🐢 Slow
Buffered Writing (This Code)	~10 writes (depends on buffer size)	⚡ Much Faster
🔚 Summary
✅ Opens a file in write mode ('w')
✅ Uses an internal buffer (Buffer.allocUnsafe(bytes))
✅ Writes numbers into the buffer and only flushes when full
✅ Handles leftover data when buffer overflows
✅ Flushes remaining data & closes file at the end