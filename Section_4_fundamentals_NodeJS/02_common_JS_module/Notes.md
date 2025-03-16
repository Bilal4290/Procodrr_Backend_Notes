=>    JavaScript Modules :

           Modules in JavaScript are reusable pieces of code that can be exported from one file and imported into another. Modules help organize code into separate files, improving maintainability and readability. They allow you to break down complex applications into smaller, manageable parts.

=>    CommonJS (CJS) in Node.js:

           Default module system in Node.js.
           Each file in Node.js is treated as a separate module.
           The require function is used to load modules, and module.exports or exports is used to export them.

           Features:

               Synchronous loading of modules.
               Every module gets its own instance and is cached after the first load.
               Can be used in older versions of Node.js.

           Example:

                 // moduleA.js
                 const message = 'Hello from moduleA';
                 module.exports = message;

                 // main.js
                 const message = require('./moduleA');
                 console.log(message); // Output: Hello from moduleA



=>    require('path in string'):

             'require' is a function.

             =>   Argument       :    Takes path in string

             =>   Return Value   :    module.exports


=>    module.exports :

             It is an object and return value of require function.


=>    How to export two functions using module.exports :

            module.exports = { sum, product }

            const { sum,product } = require('./math.js')

                     or another way

            module.exports.sum = sum
            module.exports.products = products

            const { sum,product } = require('./math.js')


=>   WE CANNOT RETURN MULTIPLE THINGS. IF WE HAVE TO RETURN THEN WRAP INTO AN OBJECT.


=>   WHY WE DON'T RETURN MULTIPLE THINGS FROM A FUNCTION ? 

        Because function can return only one thing at a time.
        But he can return an object and an array which has multiple things.



        