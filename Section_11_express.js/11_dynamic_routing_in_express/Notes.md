📌 What is Routing in Express.js?

    Routing in Express.js allows us to define how our server should respond to different URL requests like:

    GET 🏗️ → Fetch data
    POST 📨 → Submit data
    PUT ✏️ → Update data
    DELETE 🗑️ → Remove data


📝 Basic Express.js Route:

    const express = require('express');
    const app = express();

    app.get('/home', (req, res) => {
        res.send('🏡 Welcome to Home Page');
    });

    app.listen(3000, () => {
        console.log('🚀 Server running on port 3000');
    });


    📌 When you visit: http://localhost:3000/home
    💡 Response: "🏡 Welcome to Home Page"


📍 Types of Routing in Express.js:

1️⃣ Static Routing (Fixed URL):

    💡 Routes that are predefined and never change.

        app.get('/about', (req, res) => {
            res.send('ℹ️ About Page');
        });

    📌 URL: http://localhost:3000/about
    📤 Response: "ℹ️ About Page"

2️⃣ Dynamic Routing 🌀 (Changing URLs):

    💡 Allows variable values inside the URL.

        app.get('/user/:id', (req, res) => {
            res.send(`👤 User ID is ${req.params.id}`);
        });

    📌 URL Examples & Responses:

        URL Entered	    Response
        /user/101	    "👤 User ID is 101"
        /user/999	    "👤 User ID is 999"

    📌 Diagram Representation:

        /user/:id  ➝ Matches ➝  /user/101 or /user/999


3️⃣ Optional Dynamic Routing (Optional : Parameter):

    💡 Some parameters may or may not be provided in the URL.

        app.get('/profile/:username?', (req, res) => {
            if (req.params.username) {
                res.send(`👤 Profile of ${req.params.username}`);
            } else {
                res.send('🔧 Default Profile Page');
            }
        });

    📌 URL Examples & Responses:

        URL Entered 	    Response
        /profile/john	    "👤 Profile of john"
        /profile/	        "🔧 Default Profile Page"


4️⃣ Wildcard Routing (Catch-All *):

    💡 Handles undefined routes (like a 404 page).

        app.get('*', (req, res) => {
            res.send('🚫 404 - Page Not Found');
        });

    📌 Any undefined URL → "🚫 404 - Page Not Found"

🎯 Difference Between req.params and req.query:

    Feature	        req.params 🔄 (Dynamic Route Params)	    req.query ❓ (Query Parameters)
    Use Case	    Capture dynamic route values	            Capture query string values
    Syntax	        /user/:id	                                /search?name=John&age=25
    Example URL	    /user/500	                                /search?name=John&age=25
    Access Data	    req.params.id → 500	                        req.query.name → "John"

    Example Code for Both req.params & req.query:

        app.get('/product/:id', (req, res) => {
            console.log(req.params.id); // Dynamic parameter
            console.log(req.query.sort); // Query parameter
            res.send(`📦 Product ID: ${req.params.id}, Sort: ${req.query.sort}`);
        });

    📌 Example URLs & Responses

        URL	Response
        /product/100?sort=asc	"📦 Product ID: 100, Sort: asc"
        /product/200?sort=desc	"📦 Product ID: 200, Sort: desc"