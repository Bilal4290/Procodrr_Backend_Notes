format of http request.txt:

    <Method> <Path> <HTTP Version>
    <Header-Name-1>: <Header-Value-1>
    <Header-Name-2>: <Header-Value-2>
    ...

    <Optional-Body>



format of http response.txt:

    <HTTP Version> <Status Code> <Reason Phrase>
    <Header-Name-1>: <Header-Value-1>
    <Header-Name-2>: <Header-Value-2>
    ...

    <Optional-Body>



Sample of http get request.txt:

    GET /index.html HTTP/1.1 => Request Line
    Host: www.example.com
    User-Agent: Mozilla/5.0
    Accept-Language: en-US


Sample of http post request.txt:

    POST /submit-form HTTP/1.1
    Host: www.example.com
    Content-Type: application/json
    Content-Length: 27

    {
    "name": "John Doe",
    "age": 30
    }


Sample of http response.txt:

    HTTP/1.1 200 OK
    Content-Type: text/html
    Content-Length: 1354

    <html>
    <head><title>Example</title></head>
    <body>Hello, world!</body>
    </html>



🌐 HTTP Request Format:

    <Method> <Path> <HTTP Version>   => Request Line
    <Header-Name-1>: <Header-Value-1>  => Request Headers
    <Header-Name-2>: <Header-Value-2>
    ...

    <Optional-Body>  => Request Body (Only in POST, PUT, PATCH)


✅ Sample HTTP GET Request:

    👉 GET request only asks for data (No body):

        GET /index.html HTTP/1.1
        Host: www.example.com
        User-Agent: Mozilla/5.0
        Accept-Language: en-US


🔥 Sample HTTP POST Request:

    👉 POST request sends data with body:

        POST /submit-form HTTP/1.1
        Host: www.example.com
        Content-Type: application/json
        Content-Length: 27

        {
        "name": "John Doe",
        "age": 30
        }


🎯 HTTP Response Format:

    <HTTP Version> <Status Code> <Reason Phrase>  => Status Line
    <Header-Name-1>: <Header-Value-1>           => Response Headers
    <Header-Name-2>: <Header-Value-2>
    ...

    <Optional-Body>   => Response Body


🛑 Sample HTTP Response:

    ✅ When everything is OK (Status Code 200):

        HTTP/1.1 200 OK
        Content-Type: text/html
        Content-Length: 1354

        <html>
        <head><title>Example</title></head>
        <body>Hello, world!</body>
        </html>


🔥 What are HTTP Headers?

    Header Name	        Description
    Host	            Server address
    User-Agent	        Browser or Client Information
    Content-Type	    Data Type (JSON, HTML, XML)
    Content-Length	    Data Size
    Accept	            What data client accepts

Diagram Flow 🌐🚀
   
    Client 🔌 -------> Server 🌐 (HTTP Request)
        ⬆                       ⬇
    Response 🔄 <------- Server 🌐 (HTTP Response)

