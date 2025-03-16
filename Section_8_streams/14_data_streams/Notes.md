🚀 Understanding Data Streams in Node.js Processes:

    When a process starts, it has three default data streams:

    1️⃣ Standard Input (stdin):
        
        📌 Definition: Used to receive input data from the user or another process.
        🖥 Default Connection: Keyboard ⌨️
        🔄 Type: Duplex (Bidirectional), but mostly used as Readable Stream.
        🔢 Associated Number (File Descriptor): 0
        🎯 Access in Node.js: process.stdin

    2️⃣ Standard Output (stdout):

        📌 Definition: Used to send normal output data from the process.
        🖥 Default Connection: Monitor (Console) 🖥 
        🔄 Type: Duplex, but mostly used as Writable Stream.
        🔢 Associated Number (File Descriptor): 1
        🎯 Access in Node.js: process.stdout

    3️⃣ Standard Error (stderr):

        📌 Definition: Used to send error messages and diagnostics.
        🖥 Default Connection: Monitor (Console) 🖥
        🔄 Type: Duplex, but mostly used as Writable Stream.
        🔢 Associated Number (File Descriptor): 2
        🎯 Access in Node.js: process.stderr



🖥 Methods to Work with Streams in Node.js:

    📥 Reading from stdin (User Input):

        process.stdin.on('data', (chunk) => {
            console.log('User typed:', chunk.toString());
        });

        Reads user input from the keyboard (stdin).
        The input data comes as a Buffer, so we convert it to a string.


    📤 Writing to stdout (Output to Console):

        process.stdout.write('Hello, World!\n');
        Writes to stdout, similar to console.log().


    ⚠️ Writing to stderr (Error Output):

        process.stderr.write('An error occurred!\n');
        Used to print error messages.


    📝 Behind the Scenes of console.log()

        console.log = function(message) {
            process.stdout.write(message + '\n');
        };
        console.log() internally calls process.stdout.write().



🛠 When does stdout act as a Readable Stream?

    Normally, stdout is a Writable Stream, but it behaves as a Readable Stream when:
        ⭐ It is piped into another process (e.g., using child_process.spawn()).
        ⭐ It is redirected (e.g., node script.js | another_command).


    Example:
        
        const { spawn } = require('child_process');

        const ls = spawn('ls', ['-lh']); // Run 'ls -lh' command

        ls.stdout.on('data', (data) => {
            console.log(`Output: ${data}`);
        });

        Here, ls.stdout acts as a Readable Stream, providing output data.



🔄 When does stdin act as a Writable Stream?

    Normally, stdin is a Readable Stream, but it behaves as Writable when:
        ⭐ It receives input from another process (e.g., echo "Hello" | node script.js).
        ⭐ Used in Inter-Process Communication (IPC).

    Example:
       
        const { spawn } = require('child_process');

        const child = spawn('node', ['child.js']);

        child.stdin.write('Hello from parent process\n');

        Here, child.stdin acts as a Writable Stream, receiving data.



🔗 Connecting Two Processes with Streams:

    We can use pipe() to connect streams of two processes.

    Example: Connecting Two Node.js Processes
    We create two files:

    1️⃣ Parent Process (parent.js):

        const { spawn } = require('child_process');

        const child = spawn('node', ['child.js']); // Create child process

        // Pipe the child's stdout to the parent's stdout
        child.stdout.pipe(process.stdout);

        // Send data to the child's stdin
        child.stdin.write('Hello Child Process\n');


    2️⃣ Child Process (child.js)
        
        process.stdin.on('data', (data) => {
            console.log('Child received:', data.toString());
        });


    🌀 Full Data Flow for Parent-Child Communication
       
        Parent Process (parent.js)
        ├── Step 1: Spawns Child Process (child.js)
        ├── Step 2: Connects child's stdin (Writable Stream) and stdout (Readable Stream)
        ├── Step 3: Writes "Hello Child Process\n" to child.stdin
        ↓
        Child Process (child.js)
        ├── Step 4: process.stdin (Readable Stream) receives input from Parent Process
        ├── Step 5: Listens for 'data' event on process.stdin
        ├── Step 6: Callback receives "Hello Child Process\n" as a Buffer
        ├── Step 7: Converts Buffer to string
        ├── Step 8: Logs "Child received: Hello Child Process" to its stdout
        ├── Step 9: Writes "Child received: Hello Child Process" to stdout
        ↓
        Parent Process (parent.js)
        ├── Step 10: child.stdout (Readable Stream) pipes data to parent's stdout
        ├── Step 11: Parent prints "Child received: Hello Child Process" to console




📝 Your Files:

    File 1: app.js
   
        console.log('Hello from App file...');

        👉 What does this do?

            This simply prints "Hello from App file..." to stdout (the console).


    File 2: index.js
      
        import { spawn } from 'child_process';

        const child_process = spawn('node', ['app.js']);

        child_process.stdout.on('data', (chunk) => {
            console.log(chunk.toString());
        });

        👉 What does this do?

            It spawns a new child process that runs node app.js.
            It listens to the stdout of the child process (app.js).
            When data is received from the child’s stdout, it logs it.


    🔎 Behind-the-Scenes Execution Flow:

        Let’s go step by step and see how data moves between the processes.

        Step 1: Running index.js:

            When you run:
                node index.js

            The Node.js runtime starts executing index.js.


        Step 2: spawn() Creates a New Process:

            const child_process = spawn('node', ['app.js']);

            👉 What happens in the background?

                The parent process (index.js) creates a child process (app.js).
                The child process runs the command:
                    node app.js

                Now, two processes exist:
                    ⭐ Parent Process (index.js)
                    ⭐ Child Process (app.js)

                👉 How Streams Are Set Up:
                    ⭐ The parent connects to the child's stdout.
                    ⭐ Now, the parent can receive output from app.js.


        Step 3: app.js Runs Inside Child Process:
           
            console.log('Hello from App file...');

            👉 What happens in the background?
                ⭐ console.log() writes "Hello from App file...\n" to process.stdout in app.js.
                ⭐ Since app.js is a child process, its stdout is redirected to the parent process (index.js).
                ⭐ The child process does not print directly to the terminal.


        Step 4: Child's stdout Emits Data:

            In index.js, we listen for data:

                child_process.stdout.on('data', (chunk) => {
                console.log(chunk.toString());
                });

            👉 What happens in the background?
                ⭐ The child process (app.js) writes to stdout.
                ⭐ That output is sent to the parent process (index.js).
                ⭐ child_process.stdout.on('data', callback) receives the output.
                ⭐ chunk.toString() converts the buffered data into a readable string.
                ⭐ console.log(chunk.toString()) prints "Hello from App file..." to the console.



        🌀 Complete Data Flow Visualization:

            Parent Process (index.js)
            ├── Spawns Child Process (app.js)
            ├── child_process.stdout (Readable Stream) gets connected to child's stdout
            ├── Waits for child's stdout to send data
            ↓
            Child Process (app.js)
            ├── Runs console.log('Hello from App file...')
            ├── Writes "Hello from App file..." to stdout
            ├── stdout sends this data to Parent Process (index.js)
            ↓
            Parent Process (index.js)
            ├── child_process.stdout.on('data', callback) receives data
            ├── Callback converts chunk to string
            ├── Logs "Hello from App file..." to the console



🛠️ What If We Modify app.js to Use stdin?

    📝 Modified app.js:

        process.stdin.on('data', (data) => {
            console.log('Child Process Received:', data.toString());
        });


    📝 Modified index.js:

        const { spawn } = require('child_process');

        const child_process = spawn('node', ['app.js']);

        child_process.stdout.on('data', (chunk) => {
        console.log(chunk.toString());
        });

        // Send input to child process
        child_process.stdin.write('Hello from Parent\n');
        child_process.stdin.end();


    🌀 Complete Data Flow for child_process.stdin.write():

        Parent Process (index.js)
        ├── Spawns Child Process (app.js)
        ├── child_process.stdin (Writable Stream) gets connected to child's stdin
        ├── Writes "Hello from parent\n" to child_process.stdin
        ↓
        Child Process (app.js)
        ├── process.stdin (Readable Stream) receives input from Parent Process
        ├── Listens for 'data' event on process.stdin
        ├── Callback receives "Hello from parent\n" as a Buffer
        ├── Converts Buffer to string
        ├── Logs "Child Process Received: Hello from parent" to its stdout
        ├── Writes "Child Process Received: Hello from parent" to stdout
        ↓
        Parent Process (index.js)
        ├── child_process.stdout.on('data', callback) receives the message
        ├── Callback converts chunk to string
        ├── Logs "Child Process Received: Hello from parent" to the console