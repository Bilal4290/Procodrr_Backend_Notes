=>   Common JS Module :
   
       (1)   Synchronous file loading/reading.   ⭐
       (2)   Execution on main thread.
       (3)   File extension optional.
       (4)   If we give full file path then we can load any file using CJS module.
       (5)   It is a convention to add cjs in the file extension.
       (6)   The value of 'this' keyword in CJS module points to 'module.exports'.  ⭐
       (7)   CJS module imports are not hoisted.   ⭐
       (8)   Top level await is not allowed.  ⭐
       (9)   Only one value can be exported.
       (10)  Strict mode is not enabled by default.   ⭐
       (11)  __dirname,__filename



=>   ES6 Module :

        (1)   Asynchronous file loading/reading.  ⭐
        (2)   Execution on main thread.
        (3)   File extension mandatory.
        (4)   We can only load file with .js or .mjs extension.
        (5)   It is a convention to add mjs in the file extension.
        (6)   The value of 'this' keyword in ES6 module is 'undefined'.  ⭐
        (7)   ES6 module imports are hoisted.  ⭐
        (8)   Top level await is allowed.   ⭐
        (9)   Multiple values can be exported.
        (10)  Strict mode is enabled by deafault.   ⭐
        (11)  dirname,filename  =>  import.meta.dirname