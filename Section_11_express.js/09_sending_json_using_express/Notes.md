1️⃣ First Method Using res.send()

    import express from 'express'
    const app = express()

    app.get('/', (req, res) => {
        res.send({ name: 'Coder' })
    })

    app.listen(3000, () => {
        console.log('Server Running on http://localhost:3000')
    })


    What Happens If You Send Request from Postman?

        👉 Request:

            GET /
            Host: localhost:3000

        👉 Response ❌ (Error):

            TypeError: chunk argument must be of type string or an instance of Buffer or Uint8Array

        Why This Error Happens ❓

            Because res.send() only sends:

                Data Type	    Works
                String	        ✅ Yes
                Buffer	        ✅ Yes
                JSON Object	    ❌ No
                Array	        ❌ No


    2️⃣ How to Fix It 🔥

        ✅ Convert JSON Object to String First

            app.get('/', (req, res) => {
                res.send(JSON.stringify({ name: 'Coder' }))
            })

        👉 Request:

            GET /
            Host: localhost:3000

        👉 Response ✅:

            {
            "name": "Coder"
            }


    Problem with This 🔥

        Browser not recognizing JSON because the Content-Type Header is:

            Content-Type: text/html

    3️⃣ Set JSON Header Manually

        app.get('/', (req, res) => {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify({ name: 'Coder' }))
        })


    👉 Response Headers:

        Content-Type: application/json
        But Express Gives You Shortcut 🔥


    👉 Use res.json()

            app.get('/', (req, res) => {
                res.json({ name: 'Coder' })
            })

        What res.json() Automatically Do:

            Method	            What It Do
            res.setHeader()	    Automatically sets Content-Type: application/json
            JSON.stringify()	Automatically converts Object to JSON String


4️⃣ Sending Status Code 🔥


    By default Express sends:

        200 OK

    But you can manually set status codes like this:

        app.get('/', (req, res) => {
            res.status(201).json({ name: 'Coder' })
        })

        Common Status Codes:
        
            Status Code	    Meaning
            200	            OK
            201	            Created
            400	            Bad Request
            401	            Unauthorized
            403	            Forbidden
            404	            Not Found
            500	            Internal Server Error


🔥 Full Code

    import express from 'express'
    const app = express()

    app.get('/', (req, res) => {
        res.status(201).json({ name: 'Coder' })
    })

    app.listen(3000, () => {
        console.log('Server Running on http://localhost:3000')
    })


🔑 Request from Postman

    GET /

Response ✅

    {
    "name": "Coder"
    }


👉 Headers:

    Content-Type: application/json
    Etag: W/"13-abcdef"
    Status: 201 Created


🎨 Diagram Full Flow

    Browser ------> Server
        GET /
                    <-----
                JSON Data + Etag
                Status: 201
                Content-Type: application/json


Now What Is The Difference 🔥

    Method	                        Automatically Sets Headers	     Converts JSON	    Caching
    res.send()	                    ❌ No	                        ❌ No	          ❌ No
    res.setHeader() + res.send()	✅ Yes	                        ✅ Yes	          ❌ No
    res.json()	                    ✅ Yes	                        ✅ Yes	          ✅ Yes


Conclusion 🔥

    If You Want:

    Task	                    Use This
    Send Text	                res.send()
    Send JSON	                res.json()
    Set Custom Headers	        res.setHeader()
    Set Status Code	            res.status()
    Disable Cache	            app.set('etag', false)


Bonus Tip 💪

    If You Want to Send JSON + Status + Custom Header at Once:

        res.status(200).setHeader('X-Custom-Header', 'Hello Coder').json({ name: 'Coder' })










