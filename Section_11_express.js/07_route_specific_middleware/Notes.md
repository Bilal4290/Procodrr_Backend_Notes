🔥 What is Route Specific Middleware?

    Route Specific Middleware only runs on a specific route URL but can run for any HTTP method (GET, POST, PUT, PATCH, DELETE).

How to Create Route Specific Middleware?

    Syntax:

        app.use('/route', (req, res, next) => {
            // Middleware Code
            next()
        })

1️⃣ Your First Question:

    Why does this middleware run on /login even if I only mentioned / route?

    Code:

        app.use('/', (req, res, next) => {
            console.log(req.headers)
            console.log(req.url)
            console.log(req.method)
            next()
        })

        app.get('/', (req, res) => {
            res.send('🏠 Home Route')
        })

    Answer 🔑:

        👉 In Express.js, route paths are compared as Prefix Match

        ✅ This means:

            If you define:

                app.use('/')

            It will match:

                /
                /login
                /profile
                /about


How Express Compares URL 🔍?

    Middleware Path	    Request URL	    Will it Run?
    /	                /login	        ✅ Yes
    /	                /about	        ✅ Yes
    /login	            /login	        ✅ Yes
    /login	            /profile	    ❌ No

🔑 How Express Compares URL Behind the Scenes?

    👉 Express compares like this:

        if (req.url.startsWith(middlewarePath)) {
            // Middleware Runs
        }

    Example Diagram 🎨
   
        Request URL: /login
        Middleware Path: /
        Does /login Start with / ? ✅ Yes
        Middleware Will Run 🔥


2️⃣ What is req.url and req.originalUrl? 🤔

    ✅ req.url ➡️ Gives the URL after the matched middleware path
    ✅ req.originalUrl ➡️ Gives the full URL without trimming

Example Code 🔥

    app.use('/admin', (req, res, next) => {
        console.log('req.url:', req.url)
        console.log('req.originalUrl:', req.originalUrl)
        next()
    })

    app.get('/admin/dashboard', (req, res) => {
        res.send('Admin Dashboard')
    })

Request 🔥

    👉 URL:

        http://localhost:3000/admin/dashboard

    ✅ Console Output:

        req.url: /dashboard
        req.originalUrl: /admin/dashboard


How it Works Behind the Scenes 💪

    Express checks:

        /admin === /admin/dashboard ✅
        req.url = /dashboard
        req.originalUrl = /admin/dashboard

Now Your Example 💪

        app.use('/admin', (req, res, next) => {
            if (req.body.password === 'adminPassword') {
                next()
            } else {
                res.send('❌ Invalid Credentials')
            }
        })

        app.post('/admin', (req, res) => {
            res.send('👑 Hello Admin')
        })


Postman Request 🔥

    👉 URL:

        http://localhost:3000/admin

    👉 Headers:

        Content-Type: application/json

    👉 Body:

        {
        "password": "adminPassword"
        }


✅ Response:

    👑 Hello Admin

What Happens Step by Step?

    Request comes to /admin
    app.use('/admin') Middleware Runs
    It checks the password 🔑
    If Password ✅ ➡️ Calls next()
    Goes to app.post('/admin')


What if Password is Wrong?

    👉 Body:

        {
        "password": "wrongPassword"
        }

    ❌ Response:

        Invalid Credentials


Important Concept 🔥

    Order Matters

        👉 Always write app.use() before your routes.

    Order Example 🔥

        ❌ Wrong Order:

            app.post('/admin', (req, res) => {
                res.send('Hello Admin')
            })

            app.use('/admin', (req, res, next) => {
                console.log('Middleware Runs')
                next()
            })
            
        ✅ Right Order:

            app.use('/admin', (req, res, next) => {
                console.log('Middleware Runs')
                next()
            })

            app.post('/admin', (req, res) => {
                res.send('Hello Admin')
            })