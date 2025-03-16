1️⃣ What is Middleware?

        Middleware is a function that runs between an incoming request and the final response.

        🔹 Simple Definition:
        Middleware is a function that processes the request before sending the response.

        It can modify the request, terminate it, or pass control to the next middleware using next().

        🔍 How Middleware Works in Express
        When a request comes in:

        Middleware intercepts the request.
        It modifies or processes the request.
        It calls next() to pass control to the next middleware or route handler.
        If no middleware sends a response, Express will return 404 Not Found.


2️⃣ Is a Route Handler (app.get('/', handlerFunc)) a Middleware?

        Yes! A route handler (like app.get('/', handlerFunc)) is a special type of middleware because:

        It receives req, res and can modify them.
        It can send a response or call next().
        ✅ Example of a route handler as middleware:


            app.get('/', (req, res) => {
                res.send('Hello, World!');
            });


        This acts like middleware, but it ends the request-response cycle by sending a response.


3️⃣ Can We Set Multiple Handler Functions in app.get()?

    Yes! You can pass multiple functions as handlers in a route.

    ✅ Example with multiple handlers:

          app.get('/', handlerFunc1, handlerFunc2);

          🔹 How does this work?
                handlerFunc1 runs first.
                If handlerFunc1 calls next(), then handlerFunc2 runs.
                If handlerFunc1 sends a response and does not call next(), then handlerFunc2 will never run.


    ✅ Example:

           app.get('/test', (req, res, next) => {
                console.log('First middleware');
                next();  // Moves to next middleware
            }, (req, res) => {
                console.log('Second middleware');
                res.send('Response sent from second middleware');
            });


    Output in terminal:

        First middleware
        Second middleware

    Response in browser:

        Response sent from second middleware



4️⃣ Types of Middleware in Express:

        There are two main types of middleware:

        1️⃣ Request-Handling Middleware
        Used for processing requests before sending a response.
        Has 3 parameters: (req, res, next).
        Can be used globally (app.use()) or on specific routes (app.get()).

        ✅ Example: Global Middleware

            app.use((req, res, next) => {
                console.log('Middleware executed');
                next();  // Pass to next middleware
            });

        This runs on every request before reaching a route.


        ✅ Example: Middleware for a Specific Route

            app.get('/user', (req, res, next) => {
                console.log('Middleware for /user route');
                next();
            }, (req, res) => {
                res.send('User Page');
            });


        2️⃣ Error-Handling Middleware
            Handles errors in the application.
            Has 4 parameters: (err, req, res, next).
            Runs when an error is passed to next(err).


        ✅ Example:

            app.use((err, req, res, next) => {
                console.error('Error:', err);
                res.status(500).send('Something went wrong!');
            });



5️⃣ When Does Error Middleware Get Called?

     Error middleware is executed in two cases:

        ✅ Condition 1: When next(err) is called
        If you pass an error in next(err), Express skips normal middleware and calls the error handler.

        ✅ Example:

        app.get('/error', (req, res, next) => {
            next('Something went wrong'); // Skips normal middleware & calls error handler
        });


       ✅ Condition 2: When an error is thrown
        If an error is thrown inside a middleware or route handler, Express catches it and passes it to the error middleware.

        ✅ Example:

        app.get('/throw-error', (req, res, next) => {
            throw new Error('Unexpected error!');
        });


