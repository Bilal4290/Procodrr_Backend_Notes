📝💾 File Modes & Writing to Files in Node.js:

    When opening a file in Node.js, we can specify different file modes to control how the file is accessed.

1️⃣ File Modes in Node.js 🏷️

    The second parameter in fs.openSync() or fs.open() defines the mode:

    Mode	Description 📖	                    File Must Exist?
    'r'	    Read-only mode (default)	        ✅ Yes
    'r+'	Read + Write	                    ✅ Yes
    'w'	    Write-only (Truncates file)	        ❌ No (Creates if missing)
    'w+'	Read + Write (Truncates file)	    ❌ No (Creates if missing)
    'a'	    Append-only	                        ❌ No (Creates if missing)
    'a+'	Append + Read	                    ❌ No (Creates if missing)

    📌 By default, fs.open() uses 'r' mode.


2️⃣ Opening a File in Different Modes:

    const fs = require('fs');

    // Open in Read-Only Mode (Default)
    const fd1 = fs.openSync('example.txt', 'r');

    // Open in Write Mode (Creates File if Not Exist)
    const fd2 = fs.openSync('example.txt', 'w');

    // Open in Append Mode
    const fd3 = fs.openSync('example.txt', 'a');

    console.log(fd1, fd2, fd3);

    💡 If you try to write in 'r' mode, you'll get:

         Error: EBADF: bad file descriptor

    💥 Because 'r' mode does not allow writing!


3️⃣ Writing to a File in Node.js ✍️

    Synchronous Method (Blocking):
    
        const fd = fs.openSync('example.txt', 'w'); // Open in write mode
        fs.writeSync(fd, "Hello, this is a test!");
        fs.closeSync(fd);
        console.log("File written successfully!");

    ✅ Writes "Hello, this is a test!" to example.txt.
    ✅ Overwrites existing content (because of 'w' mode).


4️⃣ Writing to a File Asynchronously (Non-Blocking):

    📌 Use fs.write() instead of fs.writeSync().

        const fs = require('fs');

        fs.open('example.txt', 'w', (err, fd) => { 
            if (err) throw err;

            fs.write(fd, "Hello, async world!", (err, bytesWritten) => {
                if (err) throw err;
                console.log("Async Write Complete!");
                fs.close(fd, () => console.log("File Closed!"));
            });
        });

    💡 Explanation:

        1️⃣ fs.open() opens the file asynchronously.
        2️⃣ fs.write() writes data to the file asynchronously.
        3️⃣ fs.close() closes the file after writing.

    ✅ Non-blocking execution.
    ✅ Allows other code to run while file operations complete.


5️⃣ Using fs.writeFile() (Simpler Alternative):

    💡 fs.writeFile() opens, writes, and closes the file in one step.

        fs.writeFile('example.txt', 'Hello from writeFile!', (err) => {
            if (err) throw err;
            console.log("File Written Successfully!");
        });

    ✅ Best for simple file writes.
    ✅ Automatically overwrites file (use { flag: 'a' } to append).


6️⃣ Appending Data to a File (Without Overwriting)

    📌 Use 'a' mode or fs.appendFile().

    Method 1: Using fs.write() with 'a' Mode
       
        fs.open('example.txt', 'a', (err, fd) => {
            if (err) throw err;

            fs.write(fd, "\nAppending new content!", () => {
                console.log("Data Appended!");
                fs.close(fd, () => console.log("File Closed!"));
            });
        });

        ✅ Adds content at the end of the file.

    Method 2: Using fs.appendFile() (Easier Alternative)
    
        fs.appendFile('example.txt', '\nAnother Line!', (err) => {
            if (err) throw err;
            console.log("Content Appended!");
        });

        ✅ Handles opening & closing automatically.

7️⃣ Writing with Custom Buffer 🏗️

    const buffer = Buffer.from("Writing with buffers!");
    fs.write(fd, buffer, 0, buffer.length, null, (err, written) => {
        console.log("Bytes Written:", written);
    });

    ✅ More control over memory usage!

🔚 Summary:

    ✅ Use fs.writeSync() for blocking writes
    ✅ Use fs.write() for async writes
    ✅ Use fs.writeFile() for simple writes
    ✅ Use 'w' mode to overwrite, 'a' to append
    ✅ Use fs.appendFile() to add data easily
