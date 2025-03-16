📌 Difference Between CPU and I/O Operations in Node.js:

    Node.js is single-threaded and asynchronous, which means it handles different types of tasks in a non-blocking way. To fully understand how Node.js works, let's break it down:


    1️⃣ What is a CPU Operation?

        CPU (Central Processing Unit) operations are tasks that require direct computation and processing power. These tasks are executed on the main thread of Node.js. Since Node.js is single-threaded, these operations can block the execution of other tasks if they take too long.

        📌 Examples of CPU-Intensive Operations:

            Mathematical Calculations (e.g., factorial(1000))
            Sorting Large Arrays (e.g., QuickSort, MergeSort)
            Searching Algorithms (e.g., Binary Search, Linear Search)
            Data Compression / Decompression
            Image Processing / Video Encoding
            Encryption / Hashing (e.g., bcrypt for password hashing)
            
        ⚠️ Problem with CPU Operations in Node.js:

            Since Node.js has only one main thread, if a CPU-heavy task runs, it will block other operations (including handling HTTP requests). This reduces the efficiency of the application.

        Solution?

            For CPU-intensive tasks, use:

            Worker Threads (worker_threads module)
            Child Processes (child_process module)
            Cluster Module (For multi-core utilization)


    2️⃣ What is an I/O Operation?

    I/O (Input/Output) operations are tasks that involve communication with external systems, such as databases, file systems, or networks. These operations are asynchronous in Node.js and are handled by the event loop and the libuv library, so they don’t block the main thread.

    📌 Examples of I/O Operations in Node.js:

        Reading/Writing Files (fs.readFile(), fs.writeFile())
        Database Queries (MongoDB, MySQL, PostgreSQL queries)
        Network Requests (http.get(), fetch(), axios)
        Reading User Input from CLI (process.stdin)
        Working with Streams (e.g., fs.createReadStream(), http request streams)

    ⚡ How Node.js Handles I/O Operations Efficiently?

        Instead of blocking the main thread, Node.js delegates I/O operations to the libuv library and worker threads (from the thread pool) in the background.


    3️⃣ Key Differences Between CPU and I/O Operations:

    Feature                  CPU Operations	                                  I/O Operations
    Execution Type	         Synchronous (Blocks the main thread)	          Asynchronous (Non-blocking)
    Examples	             Sorting, searching, mathematical computations	  File reading, database queries, network 
    Where it runs?	         Main Thread	                                  Worker threads & libuv
    Impact on Performance	 Blocks other tasks if it takes too long	      Does not block the main thread
    How to Optimize?	     Use Worker Threads or Clustering	              Use async/await, callbacks, Promises


    🎯 Final Summary:
    
        CPU Operations (Sorting, Searching, Encryption) run on the main thread and can block execution.
        I/O Operations (File Read, Database Calls, Network Requests) run asynchronously and do not block the main thread.
        Node.js is optimized for I/O operations because of its event loop and non-blocking architecture.
        For CPU-heavy tasks, use Worker Threads or Child Processes.



