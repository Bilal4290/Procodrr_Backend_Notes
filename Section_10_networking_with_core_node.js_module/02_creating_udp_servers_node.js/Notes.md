🔹 Complete Guide to UDP Server & Client in Node.js 🚀

    UDP (User Datagram Protocol) is a fast, connectionless protocol used for real-time communication like video streaming, gaming, VoIP, and DNS. Unlike TCP, UDP does not establish a connection before sending data, making it faster but unreliable.

🔹 Creating a UDP Server in Node.js:

    To create a UDP server, we use the dgram module in Node.js.

    📌 Step 1: Import the dgram Module:

            import dgram from 'node:dgram';

        🟢 dgram is a built-in Node.js module used for creating UDP servers and clients.

    
    📌 Step 2: Create a UDP Server:

            const socket = dgram.createSocket('udp4')
            console.log(socket)

        🟢 dgram.createSocket('udp4') → Creates a UDP socket that supports IPv4 communication.
        🟢 The returned socket is an EventEmitter, so we can attach event listeners.


        🔹 Adding Events to the UDP Server:

            The UDP server can listen for events such as message, listening, close, and error.


    📌 Step 3: Listening for Messages:

        socket.on('message',(clientMessage,remoteAddress) => {

             console.log("📩 Message received:", clientMessage.toString());
             console.log("📌 Sender Details:", remoteAddress);

            socket.send('Message received successfully on server', remoteAddress.port, remoteAddress.address)
        })

        🟢 clientMessage → Data received from the client (comes as a Buffer, so we use .toString() to convert it to a string).
         
        🟢 remoteAddress → An object containing sender details:
                address: Sender's IP address.
                port: Sender's port number. 
                size: Size of the received message.


    📌 Step 4: Start the UDP Server:

        const PORT = 4000
        socket.bind(PORT,() => {
            console.log(`🚀 UDP Server started on port ${PORT}`);
        })

        🟢 socket.bind(portNumber, callback) → Binds the server to a port and starts listening.

        💡 Alternative Way to Bind with an Object: 

            socket.bind({ port: 4000 });

            🟢 This does the same thing but uses an object.


        📌 Step 5: Listening Event:

            socket.on('listening',() => {
                console.log("👂 Server is listening...");
                console.log("📌 Server Details:", socket.address());
            })

            🟢 socket.address() → Returns the IP address and port of the running server.


        📌 Step 6: Handling Errors:

            socket.on('error', (err) => {
                console.log(`❌ Server error:\n${err.stack}`);
                socket.close();
            });

            🟢 error event handles server issues.


        📌 Step 7: Handling Server Close:

            socket.on('close', () => {
                console.log("🔴 Server closed.");
            });

            🟢 close event triggers when the server is manually closed.


🔹 Full UDP Server Code:  

        import dgram from 'node:dgram';

        //🔹 Create UDP server
        const socket = dgram.createSocket('udp4');


        // 🔹 Handle "message" event when a client sends data
        socket.on('message', (clientMessage, remoteAddress) => {
            console.log("📩 Message received:", clientMessage.toString());
            console.log("📌 Sender Details:", remoteAddress);

            // Send response back to the client
            socket.send("Message received successfully on server", remoteAddress.port, remoteAddress.address,(err) => {
                if (err) {
                    console.error('❌ Error sending response:', err.message);
                } else {
                    console.log(`📤 Acknowledgment sent to ${remote.address}:${remote.port}`);
                }
            });
        });


        // 🔹 Handle "listening" event when the server starts
        socket.on('listening', () => {
            console.log("👂 Server is listening...");
            console.log("📌 Server Details:", socket.address());
        });


        // 🔹 Handle "error" event
        socket.on('error', (err) => {
            console.log(`❌ Server error:\n${err.stack}`);
            socket.close();
        });


        // 🔹 Handle "close" event when server shuts down
        socket.on('close', () => {
            console.log("🔴 Server closed.");
        });


        //🔹 Start server
        const PORT = 4000; // Define the port number
        const HOST = '0.0.0.0'; // Listen on all available network interfaces
        socket.bind(PORT, HOST);



🔹 Creating a UDP Client: 

    Now, let's create a UDP client to send messages to our UDP server.

    📌 Step 1: Import dgram and Create a Client:

        import dgram from 'node:dgram';
        const client = dgram.createSocket('udp4');

        🟢 The client will use UDP over IPv4.


    📌 Step 2: Send a Message to the Server:

        const SERVER_IP = '127.0.0.1';
        const SERVER_PORT = 4000;
        const SERVER_MESSAGE = Buffer.from("Hello, UDP Server!");

        client.send(SERVER_MESSAGE, SERVER_PORT, SERVER_IP,(err) => {
              if (err) console.error(`❌ Error: ${err.message}`);
              else console.log("📤 Message sent to server");
        })

        🟢 client.send(data, port, ip, callback) → Sends data to the UDP server.


    📌 Step 3: Receive Server Response:

        client.on('message', (serverMessage, remoteInfo) => {
            console.log("📩 Response from server:", serverMessage.toString());
            client.close();  // Close client after receiving response
        });

        🟢 The server sends a confirmation message when it receives data.


    📌 Step 4: Handling Errors:

        client.on('error', (err) => {
            console.error("❌ Client Error:", err);
            client.close();
        });


🔹 Full UDP Client Code:

        import dgram from 'node:dgram';

        const client = dgram.createSocket('udp4');


        //🔹 Send message to the UDP server
        const SERVER_IP = '127.0.0.1';
        const SERVER_PORT = 4000;
        const message = Buffer.from("Hello, UDP Server!");

        client.send(message, SERVER_PORT, SERVER_IP, (err) => {
           if (err) {
                console.error('❌ Error sending message:', err.message);
                client.close();
            } else {
                console.log(`📤 Message sent to ${SERVER_HOST}:${SERVER_PORT}`);
            }
        });


        //🔹 Handle response from server
        client.on('message', (serverMessage, remoteInfo) => {
            console.log("📩 Response from server:", serverMessage.toString());
            client.close();
        });

        
        //🔹 Handle client errors
        client.on('error', (err) => {
            console.error("❌ Client Error:", err);
            client.close();
        });



🔹 Additional Concepts:

    ✅ Checking UDP Packets in Wireshark:

        Install Wireshark.
        Select your network interface.
        Start capturing packets.
        Filter packets using udp.port == 4000.
        Analyze the UDP header (source port, destination port, length, checksum, etc.).
