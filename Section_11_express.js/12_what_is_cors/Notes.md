What is CORS? 🌐

    CORS allows one website (frontend) to request data from another website (backend server) if both websites are on different origins.

📅 When CORS Was Introduced?

    In 2006 by World Wide Web Consortium (W3C).

🛑 Before CORS (Same-Origin Policy - SOP)

    Before CORS, there was Same Origin Policy (SOP) 🔐:

    SOP says: Client + Server must be on the same URL to share data.
    It was more secure but very strict.

Why CORS Came? 🔥

    When Microservices Architecture and Frontend + Backend separation started:

        Frontend on http://localhost:3000
        Backend on http://localhost:5000

    SOP blocked these requests.

What is Origin?

    👉 Origin = Protocol + Domain Name + Port

    Example:

        URL	Origin:

            http://localhost:3000	http://localhost:3000
            http://localhost:5000	http://localhost:5000
            http://example.com:3000	http://example.com:3000
            http://example.com	http://example.com

🔍 Where Can You See Origin?

    In Browser Developer Tools (Request Headers → Origin)
    In Server using:    console.log(req.headers.origin)

How Browser Automatically Attaches Origin Header 🔥

    When Request Goes:

    Same Origin → No Origin header attached
    Cross Origin → Browser automatically attaches:

    Origin: http://frontend.com

What Happens When CORS is Not Allowed ❌

    👉 Request:

        GET http://backend.com/data
        Origin: http://frontend.com

    👉 Response:

        Access-Control-Allow-Origin: (Not Present)
        Result: Blocked by CORS Policy

How to Allow CORS ✅

    Backend Side (Express.js):

        app.get('/', (req, res) => {
            res.set('Access-Control-Allow-Origin', '*')
            res.send({ message: 'Hello Coder' })
        })

    What Does This Line Do?

        res.set('Access-Control-Allow-Origin', '*')

        ✅ It Allows All Origins
        ❌ But It's Not Good Practice (Security Risk 🔥)

        Best Practice:

            Allow Only Specific Origin:

                res.set('Access-Control-Allow-Origin', 'http://frontend.com')


What is cors Package?

    Instead of setting headers manually, Express provides cors package:

        npm i cors

    How to Use?

        import cors from 'cors'
        app.use(cors({
            origin: 'http://frontend.com'
        }))

    What Does cors() Do Automatically?

        ✅ Sets Headers:

        Access-Control-Allow-Origin: http://frontend.com
        Access-Control-Allow-Methods: GET, POST, PUT, DELETE
        Access-Control-Allow-Headers: Content-Type

How Browser Handles CORS Request 🚀

    Request	                Response	             Notes
    First Request	        No CORS Header	         Blocked ❌
    Second Request	        CORS Header ✅	        Allowed 🔥
    Preflight Request	    OPTIONS	                 For Non-GET Methods
    Caching	                ETag + CORS	             Faster Requests

What is Preflight Request?

    When Client Sends:

        PUT
        DELETE
        PATCH
        POST (with JSON Content-Type)

    👉 Browser First Sends:

        OPTIONS /data

        If CORS Header is Present → Then it sends the Actual Request.

    How to Allow Preflight Request?

    By using cors() package:

        app.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type']
        }))

Conclusion 🔥

    Method	                            Best Practice
    Manual Header Setting	            ❌ No
    cors Package	                    ✅ Yes
    Allow All Origins *	                ❌ No
    Allow Specific Origins	            ✅ Yes
    Preflight Requests Handling	        ✅ Automatic by cors()


🎯 Bonus Tip:

    If you want to allow multiple origins:

    const allowedOrigins = ['http://frontend.com', 'http://another.com']
    app.use(cors({
        origin: (origin, callback) => {
            if (allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed'))
            }
        }
    }))