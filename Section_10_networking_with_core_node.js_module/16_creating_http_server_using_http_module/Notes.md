🔥 How HTTP Server Works in Node.js with http Module:

    1. First let's understand what happens behind the scenes 🧠
     
        Whenever a browser or client sends a request to the server, the request follows this process:

        🛑 What is TCP and HTTP Connection?

            👉 HTTP protocol internally uses TCP (Transmission Control Protocol).
            👉 TCP is a low-level connection that works on bytes and streams of data.

        🛑 How a Request is Made?

            When we type this in the browser:

                http://localhost:3000

            ✅ Browser creates a TCP connection first 🔌
            ✅ Then sends an HTTP request inside the TCP connection.

        Here's How Data Looks Inside TCP Socket
        If we print the data from the socket connection:

            server.on('connection', (socket) => {
                socket.on('data', (chunk) => {
                    console.log(chunk.toString());
                });
            });

        👉 Output will be something like this:

            GET / HTTP/1.1
            Host: localhost:3000
            User-Agent: Mozilla/5.0
            Connection: keep-alive
            Accept: */*
            \r\n\r\n

        🧐 Why Do We See Headers Here?
            
            Because TCP sends the whole request in raw format 🔥 — including:

                Method
                URL
                HTTP Version
                Headers
                Blank Line \r\n\r\n
                Request Body (if any)


    2. Now Let's Use HTTP Module 📌
     
        🖥️ When we create the server like this:

            import http from 'node:http';

            const server = http.createServer((req, res) => {
                console.log(req.url);
                console.log(req.method);
                console.log(req.headers);
                
                res.setHeader('Content-Type', 'text/plain');
                res.write('Hello from HTTP Server!');
                res.end();
            });
            server.listen(3000, () => {
                console.log('Server is running on port 3000');
            });

        💡 What Happens Here?

            When we open http://localhost:3000 🔥:

                ✅ The request event fires automatically.
                ✅ We get two objects:

                    💡 Object Name	What It Is:

                        1️⃣ req	Incoming Request (Readable Stream) 🔥
                        2️⃣ res	Outgoing Response (Writable Stream) 🔥


    3. Why Don't We See Headers in req.on('data')? 🔥

        👉 In TCP connection — All request headers + body are combined in the data chunk.
        👉 But in HTTP server — The req.on('data') gives only the request body.

        🤔 Why?

            Because HTTP Module:

                ⭐ Automatically parses headers separately into req.headers
                ⭐ Starts the body after the \r\n\r\n line.

            🔥 Let's See the Difference

                TCP Connection	                        HTTP Server
                socket.on('data')	                    req.on('data')
                Returns Headers + Body Combined	        Only Request Body
                Low-level Stream	                    High-level Abstraction
                Have to manually parse headers	        Automatically parses headers


    4. How to See Headers in HTTP Server? 🔥
     
        If you want to see request headers 👇:

            console.log(req.headers);

            ✅ This will print headers like:

                {
                    host: 'localhost:3000',
                    connection: 'keep-alive',
                    user-agent: 'Mozilla/5.0',
                    accept: '*/*'
                }


    5. GET Request vs POST Request 📌
  
        Method	    Body Allowed?	     Where Data Goes?
        GET	        ❌ No	            Only in URL & Headers
        POST	    ✅ Yes	            Request Body


        🔥 Example with POST 🔥

        🗺️ Backend Code:

            const server = http.createServer((req, res) => {
                let body = '';

                req.on('data', (chunk) => {
                    body += chunk;
                });

                req.on('end', () => {
                    console.log('Request Body:', body);
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Data received!');
                });
            });

            server.listen(3000, () => {
                console.log('Server is running on port 3000');
            });


        🗺️ Frontend Code:

            await fetch('http://localhost:3000', {
                method: 'POST',
                body: 'I am request body from frontend',
            });


        🖥️ Output:
       
            Request Body: I am request body from frontend

        🚨 But Wait 🚨

            What if we try to send body in GET request using Thunder Client?

                👉 Most browsers ignore body in GET request
                👉 But Thunder Client allows body in GET request.


    6. CORS Headers 🌐
     
        If you're making frontend fetch calls, you must allow CORS:

            res.setHeader('Access-Control-Allow-Origin', '*');

        🎯 Summary 🔥🔥
         
            Concept	            TCP	                HTTP
            Headers + Body	    Combined	        Separate
            req.on('data')	    Headers + Body	    Only Body
            req.headers	        ❌	               ✅
            CORS Allowed	    ❌	               ✅
            Request Parsing	    Manual	            Automatic


        🗺️ Diagram 🔥
        
            Browser 🔥 ---------> TCP Connection 🔌 ----------> HTTP Server
                            GET / HTTP/1.1                   req.url
                            Headers                          req.headers
                            \r\n\r\n                         req.on('data')
                            Body                             req.on('data')


        💡 Final Thoughts 💪
       
            ❌ This Line Is Wrong:

                In request event, we don’t get headers in request body.

            ✅ Correct Version:

                We do get headers, but inside:
        
                    console.log(req.headers)








🔥 Method and Properties on request Object in HTTP Module:

    In the HTTP module of Node.js, the request object (req) contains all the information about the incoming HTTP request.

    1️⃣ request.url:

        👉 This property gives the URL path where the request came.

        Example:

            console.log(req.url);

            ✅ If you visit:

                http://localhost:3000/about

            Output will be:

                /about


    2️⃣ request.method:

        👉 This shows the HTTP method used by the client.

        ✅ HTTP methods are:

            Method	        What It Does
            GET	            Request Data (No Body)
            POST	        Send Data (With Body)
            PUT	            Update Data
            DELETE	        Delete Data
            PATCH	        Update Partial Data
            OPTIONS	        Preflight Request (CORS Check)

        Example:

            console.log(req.method);

            If the request is:

                fetch('http://localhost:3000', { method: 'POST' });

            Output will be:

                POST


    3️⃣ request.httpVersion:

        👉 This shows the HTTP protocol version used by the client.

        Example:

            console.log(req.httpVersion);

            Output will be:   1.1

              


    4️⃣ request.headers:

        👉 This property contains all the request headers in the form of an object.

        Example:

            console.log(req.headers);

            ✅ Example Output:

                {
                    host: 'localhost:3000',
                    connection: 'keep-alive',
                    user-agent: 'Mozilla/5.0',
                    accept: '*/*'
                }

            💡 What Are These Headers? 🤔
            
                Header Name	            What It Means
                host	                The domain name + port of the server
                connection	            How to manage the connection (keep-alive or close)
                user-agent	            Name of the browser or software making the request
                accept	                What type of content client accepts (text/html, application/json)
                content-type	        Type of data coming in the body (like application/json)
                cache-control	        How the client wants to cache the request
                origin	                Where the request is coming from (for CORS)
                content-length	        Length of request body data in bytes

        Example 🔥

        🗺️ Backend Code:

            const server = http.createServer((req, res) => {
                console.log('URL:', req.url);
                console.log('Method:', req.method);
                console.log('HTTP Version:', req.httpVersion);
                console.log('Headers:', req.headers);

                res.end('Headers logged');
            });

            server.listen(3000, () => {
                console.log('Server running on port 3000');
            });

        🗺️ Frontend Fetch Call:

            await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: 'Ali' })
            });

        🖥️ Output on Server Console:

            URL: /
            Method: POST
            HTTP Version: 1.1
            Headers: {
                host: 'localhost:3000',
                connection: 'keep-alive',
                content-type: 'application/json',
                content-length: '16',
                user-agent: 'Mozilla/5.0'
            }

        💡 Why Are Headers Important? 🔥

            Headers carry metadata 🔥 about:

                ⭐ Who is making the request?
                ⭐ What type of data is coming?
                ⭐ How long is the data?
                ⭐ How the client wants the response?


    5️⃣ How Can We Read Request Body?

        If client sends POST request with body, we listen like this:

            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                console.log('Body:', body);
            });

        💡 Bonus 🔥

            📌 If request is:

                GET ➡️ No body, only headers
                POST ➡️ Headers + Body

        🗺️ Diagrams 🎯

            Browser 🚀 ------> TCP Connection 🔌 ---------> HTTP Server
                            (Headers + Body)              (Headers Separately + Body Separately)

                                |                              |
                                |                              |
                        socket.on('data')            request.headers + request.on('data')

        
        🎯 Final Thoughts 🔥🔥
      
            ✅ Only 1 correction: 👉 In HTTP Server headers are automatically parsed into request.headers
            👉 And only body is available on req.on('data').






🔥 HTTP Server Request Flow Diagram:


    [ Browser 🌐 ] 
        |
        | 1. Sends HTTP Request (GET or POST)
        |
        V
    [ TCP Connection 🔌 ]
        |
        | Raw Data:
        | "GET /example HTTP/1.1\r\nHost: localhost:3000\r\nUser-Agent: Mozilla/5.0\r\n\r\nBody"
        |
        V
    [ Node.js HTTP Server 🚀 ]
        |
        | Events:
        | - 'connection'  🔥 (TCP Socket Data)  
        | - 'request'     🎯 (req, res Objects)
        |
        | Request Object (req):
        |    - req.url           → /example
        |    - req.method        → GET / POST
        |    - req.httpVersion   → 1.1
        |    - req.headers       → { Host, User-Agent }
        |    - req.on('data')    → Only Request Body (if POST)
        |
        V
    [ Response Object (res) ]
        |
        | res.setHeader('Content-Type', 'text/plain')
        | res.write('Hello from HTTP Server!')
        | res.end()
        |
        V
    [ Browser 🌐 ] ⬅️ Receives Response


    🎯 This Diagram Explains:

        ⭐ How the browser makes a request
        ⭐ How TCP connection works behind the scenes
        ⭐ How HTTP module emits events
        ⭐ How req and res objects work
        ⭐ How response goes back to the browser













Making http server using http module:

    ⭐ If we make http server using http module so we donot have to write 'HTTP/1.1 200 OK\r\n\r\n'
    ⭐ http module automatically do this 
    ⭐ and we can easily set response headers by the function which this module provided to us 


    import http from 'node:http'
    const server = http.createServer()

        💡 This returns a server object which is an event emitter so we can add events 

    server.on('connection',(socket) => {
        socket.on('data',(chunk) => {
            console.log(chunk.toString())
        })
        socket.end('HTTP/1.1 200 OK\r\n\r\nHi from HTTP server.')
    })

        💡 This event fires when we sent a request from a browser/client to a server.And we get socket here which is a duplex stream 
        Above I write above that we donot have to write 'HTTP/1.1 200 OK\r\n\r\n' when we create http server using http module but this event fires on tcp connection and http behind the scenes use tcp means here the socket we get is tcp socket but we donot use this we use request event 

    server.on('request',(req,res) => {

    }) 

        💡 In request event we donot get a socket here we found two objects one is request object which is a readable stream and in short we write it as req and second is response object which is a writeable stream and in short we write it as res 
        If we want to send data to a client we have to use res.write()
        And if we want to listen to a data which client sent we have to use req.on('data',(chunk) => {})


    🤔 How to set headers:

        For this we have to use response.setHeader('Content-Length', '10')

    server.listen(PORT,0.0.0.0,() => {
            console.log(Server is running on port ${PORT})
        })

        💡 Now this starts a server

Method and properties on request object:

    ⭐ First is request.url which means at which url request came 
    ⭐ Second is request.method  
    ⭐ Third is request.httpVersion
    ⭐ Fourth is request.headers which is an object and has user-agent and host and more headers like cache-control connection 

    In tcp connection when a browser sent a request then two request came one for favicon and second for http get request and we can see request headers by socket.on('data',(chunk) => { console.log(chunk.toString()) })
    But in request event when a browser and a request then also two request came one for favicon and second for http get request but here i cannot see my request headers by req.on('data',(chunk) => { console.log(chunk.toString()) }) why explain me this beacuse in case of tcp request headers including in the data while in case of http request headers are not included in the data data starts after \r\n\r\n and request headers which is http body thats why we are not seeing request 
    headers  

    In case of client when a client enters a url in the browser and send a request then it is get request and we get only url method used and headers we donot get any data beacuse data do not came with get request if we want to send data from a client to a browser then we have to use post method not get in short when a client send a request from a browser then on request event we get only request body not request headers if request is post request and if request is get request then we donot get both request haeders and request body if i am wrong correct me and if we want to see request haeders then we have to use console.log(request.headers)


    Now in frontend if i am making fetch call then i have to send some data from a backend/server

    Backend code:

        const server = http.createServer((request,response) => {

            response.setHeader('Access-Control-Allow-Origin','*')
            response.write('Hello from http server.')
            console.log(request.Headers)
            console.log(request.url)
            console.log(request.method)
            response.end()

        })


    Here in server we can see only request headers request url request method but not request body if we want to see request body then we have to make a post request from frontend using fetch

    const response = await fetch('http://ip:port',{
        method: 'POST',
        body: 'I am request body from frontend. '
    })

    Normally in browsers we donot send request body from get request but there is a software thunder client by this we can aslo send request body from get request
    
