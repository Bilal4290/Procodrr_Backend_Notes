=>   Different types of modules in Node JS :

        (1)  Local Modules / User defined modules
        (2)  Native or Core Modules
        (3)  NPM Modules / Third Party Modules



=>   Local Modules :

          These are custom modules created by developers to encapsulate specific functionality within a project. They are files or directories that are manually defined by the developer, and are imported using require or import.


 math.js (Local Module):

js
Copy code
// file: math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };


app.js (Main file):

js
Copy code
const math = require('./math');
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2



=>   Native Modules :
  
        These modules are built into Node.js, meaning you don't need to install them; they are included with Node.js out of the box.

        Common core modules include:

             fs: File System operations.
             http: Create servers and handle HTTP requests.
             path: Handle file and directory paths.
             os: Get information about the operating system.
             crypto: Perform cryptographic operations.
             events: Handle events.




=>    NPM Modules :

             These are external modules developed by others and made available via the Node Package Manager (NPM). You can install these modules via npm install and use them in your application.




=>    Global Modules :

           These are modules installed globally using npm install -g. Global modules are not required in the application code but are instead used as command-line tools. Some examples include:


nodemon: Automatically restarts the Node.js application when files change.

bash
Copy code
npm install -g nodemon
You can now use the nodemon command globally in your terminal:

bash
Copy code
nodemon app.js
npm: Node.js's package manager itself is installed as a global module.