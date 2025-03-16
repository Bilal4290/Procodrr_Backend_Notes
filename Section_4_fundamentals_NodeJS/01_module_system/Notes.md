=> Module Systems in Node JS :

           Two module systems :
               (1)  Common JS
               (2)  ES6 Modules

=> Question : if I made a variable with var keyword then in which scope it is present in Node JS :

          var num = 45
          console.log(num)   =>   Scope in NodeJS  :  Local Scope
                 ||===========>   Scope in Browser :  Global Scope

=> Module system in Node JS :

Node.js uses a module system to help developers organize and manage code. There are two primary module systems in Node.js:

1. CommonJS (CJS) :
    
   Usage: This is the original module system used in Node.js. It uses require and module.exports to import and export modules.

   Syntax:

   Exporting a module:
   
   // file: myModule.js
   module.exports = function() {
   console.log('Hello from myModule!');
   };

   Importing a module:

   // file: app.js
   const myModule = require('./myModule');
   myModule(); // Output: Hello from myModule!


2. ECMAScript Modules (ESM)
   Usage: This is the standard module system used in modern JavaScript. It uses import and export statements. ESM support was introduced in Node.js v12 and is more compatible with the module system used in browsers.

   Syntax:

   Exporting a module:
   
   // file: myModule.mjs
   export function greet() {
   console.log('Hello from myModule!');
   }

   Importing a module:

   // file: app.mjs
   import { greet } from './myModule.mjs';
   greet(); // Output: Hello from myModule!


   Configuration
   CommonJS is used by default in Node.js. To use ESM, you need to:
   Change the file extension to .mjs, or
   Add "type": "module" to your package.json file.


   Example of package.json configuration:
  
   {
   "type": "module"
   }
   This tells Node.js to treat all .js files in the project as ESM. With this setting, you can use import and export syntax without needing the .mjs extension.
