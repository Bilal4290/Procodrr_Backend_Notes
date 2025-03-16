 📂 File Descriptor (FD) in Node.js

    A file descriptor (FD) is a non-negative integer that represents an open file in an operating system. Every open file, socket, or data stream has a unique FD assigned by the OS.


🔎 Understanding File Descriptors in Depth 

    1️⃣ What is a File Descriptor?

        It’s just a number 🏷️ that the OS gives when a file is opened.
        It acts as a reference to the file, allowing programs to read/write.
        File descriptors start from 0 and increment upwards.

        FD Number	    Purpose
        0	            Standard Input (stdin) ⌨️ (Keyboard Input)
        1	            Standard Output (stdout) 📤 (Console Output)
        2	            Standard Error (stderr) ❌ (Error Messages)
        3+	            Custom Opened Files 📂


    2️⃣ Opening a File using fs.open()

        📌 Example in Node.js:

            const fs = require('fs');

            fs.open('example.txt', (err, fd) => {
            if (err) {
                console.error("Error opening file:", err);
            } else {
                console.log("File Descriptor:", fd);
            }
            });

        💡 Explanation:

            ⭐ The function fs.open() takes a file path and a callback.
            ⭐ The callback returns an error (if any) and the file descriptor (fd).
            ⭐ If successful, the FD is printed.

        👀 Most likely output:

            File Descriptor: 3

        Why?

            ⭐ 0, 1, and 2 are reserved for stdin, stdout, and stderr.
            ⭐ The first opened file usually gets 3.


    3️⃣ Viewing File Descriptors in Node.js:

        Check the descriptors of standard streams:

            console.log("stdin FD:", process.stdin.fd);  // 0
            console.log("stdout FD:", process.stdout.fd); // 1
            console.log("stderr FD:", process.stderr.fd); // 2

        ✅ Output:

            stdin FD: 0
            stdout FD: 1
            stderr FD: 2


    4️⃣ File Descriptor Lifecycle ⏳

        📌 Opening a File:
            1️⃣ Request to Open the File 📨
            2️⃣ OS Assigns a File Descriptor 📍
            3️⃣ Read/Write Operations 🔄
            4️⃣ Closing the File ❌

        💡 Closing the file using fs.close():
        
            fs.open('example.txt', (err, fd) => {
            if (err) {
                console.error("Error opening file:", err);
            } else {
                console.log("File Opened with FD:", fd);
                fs.close(fd, () => console.log("File Closed"));
            }
            });


    5️⃣ Visual Representation of File Descriptors 🎨
  
        ---------------------------------
        |  FD  |    Purpose              |
        |------|--------------------------|
        |  0   |  Standard Input  (stdin) |
        |  1   |  Standard Output (stdout)|
        |  2   |  Standard Error  (stderr)|
        |  3   |  File: example.txt       |
        |  4   |  Another Open File       |
        ---------------------------------
        💡 When you open another file, the FD will be 4, then 5, and so on.



    6️⃣ Why Are File Descriptors Important? 🏗️

        ⭐ Efficient File Management 🚀
        ⭐ Avoids File Duplication 🛑
        ⭐ Helps in Process Communication (Sockets, Pipes, etc.) 🔗


    7️⃣ Important Notes on File Descriptors 📝

        ✔️ Always close files after use! Leaving them open can cause memory leaks.
        ✔️ Limited FDs: The OS has a max limit of open file descriptors per process.
        ✔️ Using fs.promises: If you prefer async/await, use fs.promises.open().

    Summary 🎯
    
        ✅ File descriptors are unique numbers assigned to open files.
        ✅ 0, 1, and 2 are reserved for standard input, output, and error.
        ✅ Node.js assigns file descriptors sequentially (starting from 3).
        ✅ Use fs.open() to open a file and fs.close() to close it.
        ✅ Check file descriptors using process.stdin.fd, process.stdout.fd, etc.

