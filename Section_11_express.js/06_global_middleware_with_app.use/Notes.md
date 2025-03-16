🔥 What is Middleware?

    👉 Middleware is like a security guard 🚔 or custom function that runs between the client request and the server response.


Why Do We Need Global Middleware? 🤔

    ✅ Global middleware is used to:

        Authenticate users 🔑
        Parse incoming JSON data 🔍
        Log request headers 📄
        Check if the user is logged in 🔐
        Modify request data 🔧
        Handle errors ⚠️


What is Global Middleware? 🌐

    Global Middleware runs on every incoming request 🚪 whether the request is:

        GET 🧐
        POST ✍️
        PUT 🔄
        PATCH 🔧
        DELETE ❌


How to Define Global Middleware?

✅ Global Middleware Example:

    app.use((req, res, next) => {
        console.log('Global Middleware Running 🚨')
        next()
    })

    How It Works 🔥:

    ✅ If you make a request like:

        http://192.168.100.89:3000/
        http://192.168.100.89:3000/login
        http://192.168.100.89:3000/contact

    The Global Middleware will run first for every URL.


🔑 Important Point:

    👉 If you don't call next(), then the next middleware will not run and the request will be stuck ❌.

    Example to Understand 👇:

        app.use((req, res, next) => {
            console.log('Middleware 1')
            next()  // If you remove this line, next middleware will not run
        })

        app.get('/', (req, res) => {
            res.send('Home Route')
        })

        app.get('/login', (req, res) => {
            res.send('Login Route')
        })


    Output Sequence for:

        👉 http://192.168.100.89:3000/login

            Middleware 1 🔥
            Login Route


What is Parsing? 🔍

    👉 Parsing means converting incoming data (JSON String, XML, Form Data) into JavaScript Object.

Why Do We Need Parsing?

    When a client sends data in JSON format like:

        {
        "name": "Ali",
        "email": "ali@gmail.com"
        }

    The server receives this data as String 🔡:

        "{name: 'Ali', email: 'ali@gmail.com'}"


    We can't access this data directly like:

        req.body.name ❌

    That's why we Parse it into an Object:

        req.body.name ✅ // Ali

    How to Parse JSON Data Manually 🔥

    ✅ Custom Global Middleware:

        app.use((req, res, next) => {
            req.on('data', (chunk) => {
                const reqBody = JSON.parse(chunk.toString()) // 🔥 Parsing JSON
                req.body = reqBody
                next()
            })
        })


    Express Built-in Middleware:

        👉 Express provides express.json() which automatically parses JSON without writing custom code.

    ✅ Example:

        app.use(express.json())  // Global Middleware
        app.post('/', (req, res) => {
            console.log(req.body)
            res.send('Post Request')
        })


How Does express.json() Work?

    It only works if:

        The Content-Type Header is application/json
        JSON data is valid

What is Content-Type Header?

    When the client sends data, it sends a header like:

        Content-Type: application/json

    Express only parses data if this header is present.

Difference between Custom Middleware and express.json() 🔥

    Custom Middleware	    express.json()
    Manual Parsing 🔧	    Automatic Parsing 🚀
    Need to write code	    Built-in function
    Parses Any Data	        Only JSON Data
    More Control 🔥	        Simple and Easy


In Early Times ⏳

    Before express.json(), developers used a library called: 👉 body-parser

    ✅ Example:

    const bodyParser = require('body-parser')
    app.use(bodyParser.json())

    Now Express has built-in express.json() and doesn't need body-parser anymore.


How Global Middleware Works 🔥
   
    Client Request 🔥
    🔽
    [ Global Middleware 1 🧐 ]
    🔽 next()
    [ Global Middleware 2 🔍 ]
    🔽 next()
    [ Route Middleware 🔥 ]
    🔽 next()
    Server Response 🎯


Final Code 💪

        const express = require('express')
        const app = express()

        // Global Middleware (Parsing JSON)
        app.use(express.json())

        // Logging Middleware
        app.use((req, res, next) => {
            console.log(req.url)
            console.log(req.headers)
            next()
        })

        // Route Middleware
        app.get('/', (req, res) => {
            res.send('Home Route')
        })

        app.post('/', (req, res) => {
            console.log(req.body)
            res.send('Post Request')
        })

        app.listen(3000, () => {
            console.log('Server Running...')
        })


Final Diagram 🔥

    HTTP Request 🔥
        🔽
    [ Global Middleware 🌐 ]
        🔽 next()
    [ express.json() 🔍 ]
        🔽 next()
    [ Route Middleware 🛣️ ]
        🔽 next()
    [ Response 🎯 ]



Think to remember ❌

    If you parse the data directly inside the route handler:

        It will only work for POST requests.
        You will have to write the parsing code in every route.
        What if there are 100 routes? Will you write the same code again and again? 🔁 😓
        What if you forget to parse the data on one route? 🔥💥


    This is where Global Middleware comes into play 🌐🚀

        Why Parsing in Middleware is the Best Practice? ✅

            ✅ Global Middleware solves all the above problems:

            Method	                Parsing Location	Reusable	 DRY Principle
            Inside Route	        Every Route	        ❌ No	    ❌ No
            Global Middleware	    app.use()	        🔥 Yes	     ✅ Yes