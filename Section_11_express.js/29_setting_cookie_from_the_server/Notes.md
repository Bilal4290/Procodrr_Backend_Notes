Setting a Cookie from the Server 🖥️ → 🌐

    ✔ Basic Example (Express.js Server)

        res.set({
            'Set-Cookie': 'name=Bilal'
        });
        
    📌 The browser stores this cookie and automatically sends it back with future requests.


HttpOnly Cookies 🔒

    📌 HttpOnly cookies cannot be accessed via JavaScript (document.cookie).
    📌 They are set by the server only and used for authentication tokens.

    ✔ Example:

        res.cookie('token', 'abc123', { httpOnly: true });
        
    💡 Why? Prevents XSS attacks (JavaScript can’t steal this cookie).


Why Is My Cookie Not Stored in the Browser? 🤔

    If you're sending a Set-Cookie header but it doesn't appear in the browser, possible reasons are:

        ❌ Cross-Origin Requests (CORS Issue)
        ✔ If your frontend (127.0.0.1:5000) is different from the backend (localhost:4000), the cookie won't be saved unless:

    1️⃣ Use credentials: 'include' in fetch request

        fetch('http://localhost:4000', { credentials: 'include' });

    2️⃣ Set CORS headers on the server

        res.set({
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5000', // Allow frontend
            'Access-Control-Allow-Credentials': 'true', // Allow cookies
        });

        ❌ SameSite Restriction

            By default, cookies have SameSite=Lax, meaning cross-site requests won't include cookies.

        ✔ Fix: Use SameSite=None; Secure

            res.set({
                'Set-Cookie': 'name=Bilal; SameSite=None; Secure',
                'Access-Control-Allow-Credentials': 'true'
            });

        📌 Secure means it only works on HTTPS (except localhost).


Sending Multiple Cookies from Server 🍪🍪

    ✔ Method 1: Using Set-Cookie Array

        res.set({
            'Access-Control-Allow-Credentials': 'true',
            'Set-Cookie': [
                `name=Bilal; SameSite=None; Secure`,
                `age=20; SameSite=None; Secure`,
            ]
        });


    ✔ Method 2: Using res.cookie (Express.js)

        res.cookie('name', 'Bilal', {
            sameSite: 'none',
            secure: true,
            maxAge: 60 * 1000 // Expires in 60s
        });
        res.cookie('age', '20', {
            sameSite: 'none',
            secure: true
        });

    💡 Express automatically formats multiple Set-Cookie headers.


Cookie-Parser Library 🍪📦

    📌 cookie-parser is a middleware for parsing cookies from incoming requests.

    ✔ Why Use It?

        Normally, req.headers.cookie gives a raw string (name=Bilal; age=20).
        cookie-parser converts this into an object ({ name: 'Bilal', age: '20' }).

    ✔ Installation & Usage

        npm i cookie-parser

        import cookieParser from 'cookie-parser';

        app.use(cookieParser()); // Use middleware

        app.get('/', (req, res) => {
            console.log(req.cookies); // { name: 'Bilal', age: '20' }
            console.log(req.cookies.name); // Bilal
            res.send('Cookies parsed!');
        });

    💡 Now, we can easily access cookies from req.cookies instead of manually parsing strings.


Final Summary 🏁

    ✔ Cookies are automatically sent to the server.
    ✔ HttpOnly cookies can't be accessed by JS (only the server).
    ✔ Cross-origin issues? Use credentials: 'include' + SameSite=None; Secure.
    ✔ Multiple cookies? Use Set-Cookie array or res.cookie().
    ✔ Need to read cookies easily? Use cookie-parser.