📝 Method 1: Using fs.writeFileSync (Synchronous):

    import fs from 'fs';

    console.time('Sync Write');

    for(let i = 1; i <= 100000; i++) {
        if (i === 1) {
            fs.writeFileSync('numbers.txt', `${i}, `);
        } else {
            fs.appendFileSync('numbers.txt', `${i}, `);
        }
    }

    console.timeEnd('Sync Write');


    ✅ What Happens?

        ⭐ fs.writeFileSync and fs.appendFileSync block the entire execution while writing to the file.
        ⭐ The loop waits for each write operation to finish before moving to the next iteration.
        ⭐ Each write operation accesses the file separately, causing high I/O overhead.

        ⏳ Time Taken: 11s 
            ⭐ Slowest because of multiple file operations blocking the event loop.



📝 Method 2: Using Streams (fs.createWriteStream):

    import fs from 'fs';

    console.time();

    const writeStream = fs.createWriteStream('D:\\Sigma\\ASP\\Backend_ASP\\practice_server\\StreamNumbers.txt');

    let i = 1;

    function write() {
        let isReady = true;
        
        while (i <= 100000 && isReady) {
            isReady = writeStream.write(`${i}, `);
            i++;
        }

        if (i <= 100000) {
            // Wait for 'drain' before continuing
            writeStream.once('drain', write);
        } else {
            writeStream.end();
        }
    }

    write();

    writeStream.on('finish', () => {
        console.timeEnd();
    });

    ✅ What Happens?

        ⭐ fs.createWriteStream writes data in chunks instead of writing small pieces repeatedly.
        ⭐ It buffers data efficiently, reducing disk I/O operations.
        ⭐ The finish event ensures we measure time accurately.

        ⏳ Time Taken: 450ms
            ⭐ Fastest because data is streamed efficiently instead of writing repeatedly.
            ⭐ Uses buffering, reducing system load.



⚡ Performance Comparison:

    Method	                         Blocking?	 Parallel Writes?	   Efficient?	               Time Taken (Approx)
    Sync (fs.writeFileSync)	         ✅ Yes	    ❌ No	            ❌ No	                   ⏳ Slowest
    Async (fs.writeFile)	         ❌ No	    ✅ Yes (Too Many)    ❌ No (Race Conditions)     ⚡Faster, but unstable
    Streams (fs.createWriteStream)	 ❌ No	    ✅ Yes (Optimized)   ✅ Yes (Efficient & Fast)   🚀 Fastest



📝 What Do You Mean by Parallel Write?

    Parallel writing refers to multiple write operations happening at the same time instead of one after another. This can increase performance but also cause race conditions (where multiple operations interfere with each other).


    🛑 Potential Problem (Race Condition):

    If the event loop schedules operations unpredictably, the file may not be written in the correct order:

        numbers.txt → 1, 3, 2, 5, 4,
        
    The numbers are not necessarily in order because writes happen in parallel.






