=>  Understanding express():

      When you import Express and call express(), it internally calls the createApplication function.

      What does express() return?

          import express from 'express';

          const app = express();

          console.log(typeof app); // Outputs: function ❗

    
      You're expecting typeof app to be "object" because express() returns an Express application instance, which is indeed an object.

      However, in JavaScript, functions are also objects—they can have properties and methods attached to them. Express makes use of this to enhance the returned object with additional functionality.


      Why Is typeof app === "function"?

        The app instance is actually both an object and a function. This is because Express makes the returned object callable—you can call it like a function.

        ✅ app is a function because:
            Express enhances the returned object (app) by making it callable:
            Internally, Express sets up the app instance to behave like a function, allowing you to use it as a middleware handler.
            This means you can call app(req, res, next), and it behaves like a function.
            app still behaves like an object because:
            It has properties like app.use(), app.get(), app.listen(), etc.


     How Express Makes app a Function?

        Express does this trick using JavaScript’s prototype-based inheritance and function augmentation.
        If you check Express’s source code, createApplication() looks something like this:  

                function createApplication() {
                    let app = function(req, res, next) {
                        app.handle(req, res, next); // This makes app callable!
                    };

                    Object.setPrototypeOf(app, proto); // proto contains all app methods
                    return app;
                }

        What’s Happening Here?
            app is a function (app(req, res, next)).
            The prototype (proto) is set to an Express object, giving app all Express methods (app.use, app.get, etc.).
            So, app is both callable (a function) and has properties like an object.


         Proof That app is an Object Too:

            Even though typeof app returns "function", we can still verify that app behaves like an object.

            console.log(typeof app); // "function"
            console.log(app instanceof Object); // true ✅
            console.log(app.use); // [Function: use] ✅
            console.log(app.get); // [Function: get] ✅
            console.log(app.listen); // [Function: listen] ✅

            Since app has properties like app.use(), app.get(), and app.listen(), it is indeed an object—just a special type of object that is callable.


    Why is typeof app === "function"?
        Because Express makes the app callable (i.e., you can use app(req, res, next) like a function).
        Because JavaScript treats functions as objects (you can attach properties/methods to functions).
        Because Express sets the app’s prototype to an object with all the Express methods, making it both a function and an object.



=>   How express works behind the scenes?


What Happens When You Import Express?

    import express from 'express';

    You are actually importing a function (not an object).
    This function, when called, returns an instance of an Express application.


What Happens When You Call express()?

    const app = express();

        This internally calls createApplication(), which does several things:
            Creates a function (app) that can be called as a middleware.
            Attaches various Express methods (app.use(), app.get(), etc.).
            Sets up an empty array to store middleware and route handlers.



                function createApplication() {
                    let app = function(req, res, next) {
                        app.handle(req, res, next); // Makes app callable like a function
                    };

                    Object.setPrototypeOf(app, proto); // Attach Express methods to app

                    app.stack = []; // Stores middleware and routes
                    return app;
                }


            app is a function, but it also has properties (like app.use and app.get).
            The stack property stores all middleware and route handlers.



What Happens When You Define a Route?

    When you define a route:

        app.get('/home', (req, res) => {
            res.send('Hello, Home!');
        });

    Express does not immediately execute the function.
    Instead, it stores the route inside the stack array.

     Behind the Scenes:

     app.stack.push({
        method: 'GET',
        path: '/home',
        handler: (req, res) => res.send('Hello, Home!')
     });

     Now, Express knows that when a GET request comes to /home, it should execute this function.




What Happens When a Request Comes In?

    When a request is made (e.g., GET /home):
        The request enters Express and app.handle(req, res, next) is called.
        Express iterates over the stack array and checks:
        Does this request match any middleware?
        Does this request match any defined routes?
        If a match is found, it executes the correct route handler.
        If no match is found, it moves to the next middleware or returns a 404 Not Found.


            function handle(req, res, next) {
                for (let layer of app.stack) {
                    if (layer.method === req.method && layer.path === req.url) {
                        return layer.handler(req, res);
                    }
                }
                res.statusCode = 404;
                res.end('Not Found');
            }



What Happens When You Use Middleware?

    Middleware functions modify the request/response or decide if the request should continue. 

        app.use((req, res, next) => {
            console.log('Request received');
            next();
        }); 

    This middleware function is added to the stack array.
    When a request comes in, it executes before reaching the route handler.

    Behind the Scenes (Middleware Execution)

            app.stack.push({
                path: '*', // Middleware runs for all routes
                handler: (req, res, next) => {
                    console.log('Request received');
                    next();
                }
            });

    next() moves the request to the next middleware or route handler.



What Happens When You Call app.listen()?

    When you call:

        app.listen(3000, () => console.log('Server running'));

    Express creates an HTTP server using Node.js's built-in http module.
    The server listens for incoming requests.
    When a request is received, Express processes it through the middleware and routing system.


    Behind the Scenes (app.listen() Calls http.createServer()):

        const http = require('http');

        app.listen = function(port, callback) {
            const server = http.createServer(app);
            return server.listen(port, callback);
        };


    The http.createServer(app) makes app function as the request handler.


🔥 Summary: How Express Works Step-by-Step:

        express() is called → Returns an app (a function + object).
        Middleware & routes are added → Stored in an internal stack.
        app.listen(port) is called → Starts a Node.js HTTP server.
        When a request comes in:
            Middleware runs first (app.use).
            Express checks if a route matches (app.get, app.post, etc.).
            If a match is found, it runs the handler.
            If no match is found, it returns 404 Not Found.


💡 Final Takeaways:

        Express is just a function that behaves like an object.
        It stores middleware and routes in an internal stack.
        When a request comes, Express iterates through middleware and routes to find a match.
        It internally uses Node.js’s http.createServer() to handle requests.
        Middleware plays a key role in modifying requests and responses before reaching the route.