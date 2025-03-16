=> If we use eval() with useStrict, then it will skipped.

Yes, if you use eval() within a function or script that has "use strict" mode enabled, the behavior of eval() will be more restricted. However, it will not be ignored—it will still work, but under stricter rules.

Key Changes in eval() Under "use strict":
Cannot Create New Variables in Global Scope: In non-strict mode, eval() can introduce new variables into the global scope. However, in strict mode, any variables defined inside eval() are local to the eval() execution.

javascript
Copy code
"use strict";
eval("var x = 10;"); // 'x' is not accessible outside eval
console.log(typeof x); // undefined
In non-strict mode, x would be created in the global scope.

Cannot Use eval or arguments as Variable Names: In strict mode, you cannot redefine eval or arguments, as they are reserved keywords.

javascript
Copy code
"use strict";
eval("var eval = 5;"); // SyntaxError
Safer and More Secure: In strict mode, eval() is less powerful, meaning it has fewer chances to introduce security issues or affect the broader scope of the program.

Summary:
eval() is not ignored in strict mode, but its behavior is more contained and restricted to avoid some of the problems it can introduce in non-strict JavaScript.






=>    vm.runInThisContext() :

        =>   Scope Type	 =>   Global Scope

        =>   Affects Global Scope?   =>   Yes	 

        =>	 Description   =>   Executes code within the current global context.


=>    vm.runInNewContext() :

        =>   Scope Type	 =>   Isolated Scope

        =>   Affects Global Scope?   =>  No	 

        =>	 Description   =>   Executes code within a new, isolated context (sandbox).  



=>   How to make a variable in global scope using  'use strict'


        const vm = require('vm')
        vm.runInThisContext('var num = 7')
                   