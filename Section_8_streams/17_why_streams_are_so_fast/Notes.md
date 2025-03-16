🚀 Why Streams are Faster than writeFileSync and appendFileSync?

    📜 Scenario: Writing 1 Lakh Numbers to a File
        🔹 Method 1: writeFileSync / appendFileSync – Takes 11s
        🔹 Method 2: Streams (fs.createWriteStream) – Takes 450ms (🔥 25x Faster!)

🔍 Why Are Streams So Fast?

    ❌ Problem with writeFileSync and appendFileSync:

        When using sync methods, every write operation does this:

            1️⃣ 🔍 Find the File in the OS
            2️⃣ 📂 Open the File
            3️⃣ ✍️ Write Data to Disk
            4️⃣ ❌ Close the File
            5️⃣ 🔄 Repeat for Every Write Operation!

        🔴 Result:

            Every write operation opens & closes the file, causing huge performance overhead.
            Writing to disk is slow compared to memory (RAM).

    ✅ Why Streams are Faster?

        1️⃣ Streams Open & Close the File Only Once
            ✔ File Opens Once when calling fs.createWriteStream()
            ✔ File Closes Once when calling writeStream.end()

            🔹 No repeated open/close operations!

            🔄 How It Works:

                📂 File Opened Once (fs.createWriteStream)
                🔄 Writes Data in Chunks
                📂 File Closed Once (writeStream.end)
                📌 This alone makes streams much faster!


        2️⃣ Streams Use an Internal Buffer (RAM) 🧠⚡

            🟢 How Streams Work:

                ⭐ Streams first write data to an internal buffer (RAM).
                ⭐ RAM is thousands of times faster than disk.
                ⭐ When 16KB of data is stored in RAM, it is flushed to disk.

            🔄 Flow of Data in Streams:

                ✍️ Write Data to RAM (Internal Buffer) 🏎️ Fast!
                ⬇️ When Buffer is Full (16KB) → Write to Disk 🖴 Slow
                🔄 Repeat Until Done

            🔴 Sync Methods Write Directly to Disk (Slow)

                ✍️ Write to Disk (Slow)  
                🔄 Repeat Every Time

📌 RAM is super fast, so streams avoid writing to the disk every time!

    📊 Performance Comparison:

        Method                          	File Open/Close	    Writes to Disk	     Uses RAM?	    Speed
        writeFileSync / appendFileSync	    ❌ Every Time	   ❌ Every Time	      ❌ No	        🐌 Slow
        Streams (createWriteStream)	        ✅ Once	           ✅ In 16KB Chunks	  ✅ Yes	        🚀 Fast


    📊📜 Diagram Explanation:

    ❌ writeFileSync / appendFileSync (SLOW)
 
        📂 Open File ➡️ ✍️ Write ➡️ ❌ Close File
        📂 Open File ➡️ ✍️ Write ➡️ ❌ Close File
        📂 Open File ➡️ ✍️ Write ➡️ ❌ Close File
        🔄 (Repeats 1 Lakh Times!)

    ✅ fs.createWriteStream (FAST)
   
        📂 Open File (Once)
        🔄 [🏎️ Write to RAM] ➡️ [📥 Flush to Disk in 16KB Chunks]
        📂 Close File (Once)


    🎯 Summary:

        ✔ Sync Methods are slow because they open & close the file 1 lakh times.
        ✔ Streams are fast because they open & close the file only once.
        ✔ Streams use RAM (buffer), which is thousands of times faster than a disk.
        ✔ Writes in 16KB chunks, reducing the number of disk operations.