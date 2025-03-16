=>   Spawning a process :

        When a parent process starts or triggers a child process.

        In computing, spawning a process refers to creating a new process (a running instance of a program) from an existing process. The new process is often called a "child process," and the process that creates it is referred to as the "parent process."


        Spawning a process takes more time as compared to spawning a thread.


=>    Thread : 

          In computing, a thread is the smallest unit of execution within a process. A process can have multiple threads, all of which share the same resources but execute independently. 

          Thread is the worker of the process.


=>   Process vs. Thread:

          A process is an independent execution unit containing its own state, memory space, and resources. It can contain multiple threads.

          A thread is a subdivision of a process. Multiple threads within the same process share the same memory space but can run concurrently.


=>   Concurrency and Parallelism :

          Concurrency mai let's suppose single core hai aur 3 threads hain to aik instance par aik thread execute ho ga.

          Parallelism mai let's suppose 4 cores hain aur 3 threads hain to aik instance par 3 cores mai 3 threads simultaneously execute hn gay.


=>    Node JS is single threaded language by default, but we make it multiple threaded 
      language by :

            (1)  Worker threads
            (2)  Child processes
            (3)  Cluster Modules
            (4)  Native Modules


=>   Can a process exist without a thread ?

       When a process starts, then by default it has minimum one thread called main thread.





=>    Relative Path Issues:

           If you use relative paths (like './worker_1.js'), the resolution of these paths depends on the current working directory of the process. If you run the script from a directory other than where index.js is located, Node.js will not be able to find the worker files, leading to MODULE_NOT_FOUND errors.