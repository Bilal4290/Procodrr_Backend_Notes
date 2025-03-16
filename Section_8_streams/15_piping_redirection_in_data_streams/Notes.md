1️⃣ Piping (|) in Node.js:

    Piping is used to send the output (stdout) of one process to the input (stdin) of another process.

    ✅ Example of piping:

        echo 'Hello from echo' | node app.js

    📌 Explanation:

        ⭐ echo 'Hello from echo' → Generates output: "Hello from echo"
        ⭐ | (Pipe operator) connects stdout of echo to stdin of node app.js
        ⭐ node app.js reads from stdin and processes the input

    📝 Code for app.js

        process.stdin.on('data', (chunk) => {
            console.log(chunk.toString());
        });

    🔄 Full Data Flow

        Process A (`echo`)
        ├── Step 1: Writes "Hello from echo\n" to stdout
        ├── Step 2: stdout is piped (|) to stdin of `node app.js`
        ↓
        Process B (`node app.js`)
        ├── Step 3: Reads from process.stdin
        ├── Step 4: Listens for 'data' event
        ├── Step 5: Receives "Hello from echo\n"
        ├── Step 6: Converts Buffer to string
        ├── Step 7: Prints "Hello from echo" to stdout

    🖥️ Terminal Output

        Hello from echo


    2️⃣ Piping Between Two Node.js Files:

        Now, let's say we have two files:

            📜 app.js (reads from stdin and logs the received data)
            📜 index.js (writes to stdout)

        📜 Code for app.js

            process.stdin.on('data', (chunk) => {
                console.log(chunk.toString());
            });

        📜 Code for index.js

            process.stdout.write('Hello from index.js\n');

        ✅ Now, we run the command:

            node index.js | node app.js

        🔄 Full Data Flow

            Process A (`node index.js`)
            ├── Step 1: Writes "Hello from index.js\n" to stdout
            ├── Step 2: stdout is piped (|) to stdin of `node app.js`
            ↓
            Process B (`node app.js`)
            ├── Step 3: Reads from stdin
            ├── Step 4: Listens for 'data' event
            ├── Step 5: Receives "Hello from index.js\n"
            ├── Step 6: Converts Buffer to string
            ├── Step 7: Prints "Hello from index.js" to stdout

        🖥️ Terminal Output

            Hello from index.js

                
    3️⃣ Why Does stderr Not Get Piped?
        
        By default, | only connects stdout of one process to stdin of another.

        ✅ Example:

            node index.js | node app.js

            ✅ Works for stdout because stdout of index.js is piped to stdin of app.js.
            ❌ Does NOT work for stderr because stderr is not piped.

    🛠️ Piping stderr Manually:

        To also pipe stderr, we need to use 2>&1 to merge stderr into stdout.

        node index.js 2>&1 | node app.js

           ⭐ 2>&1 means redirect stderr (2) to stdout (1)
           ⭐ Now both stdout and stderr are piped to app.js




📌 What is Redirection?

    🔄 Redirection (>, >>, <) is used to change where stdin (input), stdout (output), or stderr (errors) are directed.
    🔄 Instead of displaying output on the terminal, you can save it to a file or send it to another process.

🔹 Types of Redirection:

    Symbol	    Purpose
    >	        Redirect stdout (overwrite file)
    >>	        Redirect stdout (append to file)
    <	        Redirect stdin (read from a file)
    2>	        Redirect stderr (overwrite error log)
    2>>	        Redirect stderr (append error log)
    &>	        Redirect both stdout and stderr

    🔹 Example 1: Redirecting Output (stdout) to a File

        node script.js > output.txt

        ✅ What happens?

           ⭐ Normally, script.js prints output to the terminal.
           ⭐ But with >, the stdout is redirected to output.txt.

        🗺️ Diagram
        
            ┌──────────────┐    ┌──────────────┐
            │  script.js   │───▶│  output.txt  │
            │ (stdout)     │    │ (file)       │
            └──────────────┘    └──────────────┘


    🔹 Example 2: Redirecting Errors (stderr) to a File
   
        node script.js 2> error.log

        ✅ What happens?

            ⭐ If script.js has errors, they will be saved in error.log instead of being displayed on the screen.

        🗺️ Diagram
        
        ┌──────────────┐    ┌──────────────┐
        │  script.js   │───▶│  error.log   │
        │ (stderr)     │    │ (file)       │
        └──────────────┘    └──────────────┘


    🔹 Example 3: Redirecting Both stdout & stderr
   
        node script.js > output.txt 2> error.log

        ✅ What happens?

            ⭐ The normal output goes into output.txt.
            ⭐ The errors go into error.log.


    🔹 Example 4: Appending Output Instead of Overwriting
   
        node script.js >> output.txt

        ✅ What happens?

            ⭐ Instead of overwriting output.txt, it appends the new output at the end.


    🔹 Example 5: Using Input from a File (stdin)
   
        node script.js < input.txt
        
        ✅ What happens?

            ⭐ Instead of typing input manually, the script reads data from input.txt.

        🗺️ Diagram
        
        ┌──────────────┐    ┌──────────────┐
        │  input.txt   │───▶│  script.js   │
        │ (file)       │    │ (stdin)      │
        └──────────────┘    └──────────────┘
