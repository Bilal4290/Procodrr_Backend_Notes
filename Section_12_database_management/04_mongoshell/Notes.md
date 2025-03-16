Is Mongo Shell (mongosh) Actually Node.js?

    Yes! Mongo Shell (mongosh) is built on top of Node.js, which means it supports many Node.js features. However, it is not a full Node.js runtime—it has some differences and limitations.

1️⃣ What is mongosh --nodb?

    📌 Runs MongoDB shell without connecting to any database.

    ✅ Why use --nodb?
        To test JavaScript/Node.js features without needing a MongoDB database.
        To experiment with MongoDB shell commands offline.
    💡 It works like a lightweight Node.js environment, but with MongoDB-specific commands.


2️⃣ Proof That Mongo Shell is Based on Node.js:

    You can check Node.js features inside the MongoDB shell (mongosh):

    ✅ Checking built-in Node.js modules in mongosh:

        console.log(typeof require('fs')); // fs module exists in mongosh
        console.log(typeof require('os')); // os module exists
        console.log(typeof require('path')); // path module exists
        console.log(typeof require('http')); // http module exists

    
    💡 Since these core modules are available, it confirms that mongosh runs on Node.js!



3️⃣ How to Prove That Mongo Shell Handles Promises Differently?

    Try this in Mongo Shell (mongosh):

        Promise.resolve({ hello: 'world' });

    ✅ MongoDB shell immediately prints:

        { hello: 'world' }

    💡 MongoDB shell automatically resolves promises instead of returning a pending promise.

    Try the same in Node.js (node):

        Promise.resolve({ hello: 'world' });

    ❌ Node.js returns a pending promise:

        Promise { <pending> }

    ✅ You must use .then() to see the resolved value in Node.js:

        Promise.resolve({ hello: 'world' }).then(console.log);


4️⃣ Checking the Constructor of a Promise in Mongo Shell and Node.js

    let a = Promise.resolve({ hello: 'world' });
    console.log(a.constructor);

    ✅ Both mongosh and node return:

        [Function: Promise]

    💡 This proves that Mongo Shell uses native Node.js Promises.


5️⃣  const redeclaration in mongosh and nodejs:

    Node.js gives a syntax error, if we redeclare a const varaible
    Mongosh not gives an error but redeclare it.


6️⃣ Multi-line Mode & .editor in Mongo Shell and Node.js:

    Use .editor for multi-line input.
    Press Ctrl+D to execute the code.


7️⃣ Can We Create an HTTP Server in Mongo Shell?

     ✅ Yes, you can create an HTTP server in Mongo Shell.

     const http = require('http');
     const server = http.createServer((req, res) => {
                            res.end('Hello from server!');
                     });
    server.listen(3000, () => console.log('Server running on port 3000'));


8️⃣ How to Exit Mongo Shell & Node.js?

    Command	                 Mongo Shell (mongosh)	      Node.js (node)
    Exit Command	           exit or quit()	        process.exit() or Ctrl+C
    Force Exit	                  exit	                process.exit(1)


9️⃣ Can We Run JavaScript Files in Mongo Shell?

    ✅ Yes, Mongo Shell (mongosh) can run .js files like Node.js.
            mongosh --nodb app.js


🔟 Can We Make an API Call in Mongo Shell?

    ✅ Yes, but we need fetch() (available in modern mongosh).

            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(console.log);

1️⃣1️⃣ Are There Variables Like db in Mongo Shell?

    ✅ Yes, MongoDB Shell provides special built-in variables like db.

    📌 Example:
            show dbs  # Shows all databases
            use myDatabase  # Switches to a database
            db  # Displays the current database

    But these available when we make a connection with database.