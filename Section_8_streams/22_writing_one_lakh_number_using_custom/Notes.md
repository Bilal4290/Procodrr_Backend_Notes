Writing One Lakh Numbers to a File in Node.js 🚀
Your current approach is correct, but it's not optimized for performance because fs.writeSync() is called 100,000 times, which causes frequent disk I/O operations. Let's analyze and improve it!

🔴 Current Approach (Inefficient)
js
Copy
Edit
const fs = require('fs');

console.time("Write Time");

const fd = fs.openSync('numbers.txt', 'w');

for (let i = 1; i <= 100000; i++) {
    fs.writeSync(fd, `${i}, `); // Writes each number separately (slow)
}

fs.closeSync(fd);
console.timeEnd("Write Time");
⚠️ Problems with This Approach
1️⃣ Too many disk writes (each iteration writes separately).
2️⃣ Slow performance due to frequent I/O operations.
3️⃣ High CPU usage because of multiple function calls.

✅ Optimized Approach (Using Buffer & Batch Writing)
Instead of writing each number separately, let's accumulate them in a buffer and write in batches to reduce disk operations.

js
Copy
Edit
const fs = require('fs');

console.time("Optimized Write Time");

const fd = fs.openSync('numbers.txt', 'w');
let batch = [];

for (let i = 1; i <= 100000; i++) {
    batch.push(i); // Store numbers in an array
    if (i % 10000 === 0) { // Write in batches of 10,000
        fs.writeSync(fd, batch.join(", ") + ", ");
        batch = []; // Clear batch
    }
}

if (batch.length > 0) {
    fs.writeSync(fd, batch.join(", ") + ", "); // Write remaining numbers
}

fs.closeSync(fd);

console.timeEnd("Optimized Write Time");
🚀 Why is This Faster?
✅ Batch Writing: Instead of 100,000 writes, it writes 10 times (reduces disk I/O).
✅ Less Function Calls: Joins multiple numbers into a single string before writing.
✅ Improved Performance: Runs significantly faster (try running both versions!).