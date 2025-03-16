HTTP Client in Node.js 🚀

🔌 1. Create HTTP Client:
  
    import http from 'node:http';

    const client = http.request();

    👉 This creates http.clientRequest
    👉 It is an OutgoingMessage (Writable Stream 💪)
    👉 By default, it connects to localhost:80


📤 2. Sending Data to Server:

    By default, HTTP client sends GET Request 🔍.

    But if you want to send data like:

        client.write('Hi from HTTP Client');
        client.end();

    ❌ This will NOT be received by the server
    ✅ Why? Because GET request does not send data.


🔥 3. Sending POST Request:

    If you want to send data, use:

        const client = http.request({
            hostname: 'localhost',
            port: 3000,
            method: 'POST'
        });

        client.write('Hi from HTTP Client');
        client.end();

    Now the server will receive your data because POST request sends data.


👂 4. Listen to Server Response:

    How to receive data from the server:

        client.on('response', (response) => {
            response.on('data', (chunk) => {
                console.log(chunk.toString()); // Server Data 🔥
            });
        });



💪 Diagram Flow

    HTTP Client 🔌  ------->  Server 🌐
    ⬆                          ⬇
    (client.write)              (Server sends response)
    ⬇                          ⬆
    HTTP Response 🔥      (Client listens 👂)


🔑 Important Points:

    Event	                    Stream Type	                Direction
    request	                    Writable Stream	            Client -> Server
    response	                Readable Stream	            Server -> Client
    client.write()	            Writable	                Send Data
    response.on('data')	        Readable	                Receive Data