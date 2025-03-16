📌 Understanding TCP Server in Node.js Using the net Module:

    The net module in Node.js allows us to create TCP servers and clients. In this explanation, I will cover everything in full detail, including how TCP connections work, what headers are involved, and why certain behaviors occur.


1️⃣ Creating a TCP Server:

    How do we create a TCP server?
    We use the net.createServer() method:

        import net from 'node:net';
        const server = net.createServer();

    What does createServer() return?

        createServer() returns a TCP server instance, which is an EventEmitter.
        This means we can attach event listeners to handle incoming connections, data, and errors.


2️⃣ Starting the TCP Server:

    To start the server, we call the .listen(port) method:

        server.listen(4000);

    How do we know when the server starts?

        The listening event is triggered when the server starts successfully:

            server.on('listening', () => {
                console.log('Server is started on port 4000');
            });


3️⃣ Understanding TCP Connection and the Three-Way Handshake:

    How does a client connect to the server?

        📌 When a client tries to connect:

            The client sends a SYN (synchronize) packet.
            The server responds with SYN-ACK (synchronize-acknowledge).
            The client replies with an ACK (acknowledge).

        ✅ After this three-way handshake, the connection is established, and the connection event fires on the server.

            server.on('connection', (socket) => {
                console.log('Server and client connected.');
            });


        📌 How can we see this in Wireshark?

            Open Wireshark and start capturing packets.
            Apply a filter: tcp.port == 4000.
            You'll see three packets (SYN, SYN-ACK, ACK) when a client connects.


4️⃣ How does the Server Receive Data from the Client?

    📌 When the client sends data, it arrives at the server. The data event is triggered:

        server.on('connection', (socket) => {
            socket.on('data', (chunk) => {
                console.log('Received from client:', chunk.toString());
            });
        });

        Socket is a duplex stream.


    📌 What is the PSH (Push) Flag?

        When the client sends data, the PSH (push) flag is set in the TCP header.
        Purpose: It tells the server to process the received data immediately instead of waiting for more data.
        You can also see this in Wireshark.


5️⃣ How to Send a Message from Server to Client?

    In TCP, both client and server must have sockets because sockets are the communication endpoints.
    The server's socket is received in the connection event callback.
    The socket is a duplex stream, meaning it can read and write.

    📌 Sending a Response to Client:

        server.on('connection', (socket) => {
            socket.on('data', (chunk) => {
                console.log('Received:', chunk.toString());
                socket.write('Message received by server.');
            });
        });


    📌 How to Get Client Information?

        console.log(socket.remoteAddress);  // Client's IP address
        console.log(socket.remotePort);     // Client's Port
        console.log(socket.address());      // Server's IP and Port


6️⃣ Handling Client Disconnection:

    When the client disconnects, the close event fires:

        server.on('connection', (socket) => {
            socket.on('close', () => {
                console.log('Client disconnected.');
            });
        });



7️⃣ Why Do We See Two Requests in Wireshark When Sending a Message?

    When a client sends a message, we see two requests:

    Client → Server (Message)
    Server → Client (Acknowledgment that data was received)
    Each TCP segment contains sequence numbers and ACK numbers to ensure data integrity.


8️⃣ What Happens When We Send a Request from a Browser to a TCP Server?

    Browsers make HTTP requests, not raw TCP requests.
    Since our server is pure TCP, the browser sends a request but doesn’t receive a valid HTTP response.
    ✅ We see two requests in Wireshark:

        One for the favicon.ico (Browsers automatically request this).
        One for the actual HTTP request.

    📌 Solution: If you want the TCP server to handle HTTP requests, you need to send an HTTP response.

        server.on('connection', (socket) => {
            socket.on('data', (chunk) => {
                console.log('Received:', chunk.toString());
                socket.write('HTTP/1.1 200 OK\r\n\r\nGot your message.');
            });
        });



9️⃣ Understanding TCP Headers (Important for Backend Development):

    Every TCP packet has a header, which contains important information:

    Field	                            Description
    Source Port	                        Port of the sender
    Destination Port	                Port of the receiver
    Sequence Number	                    Tracks the order of packets
    ACK Number	                        Acknowledges received data
    Flags (SYN, ACK, PSH, FIN)	        Controls connection state
    Window Size	                        How much data can be received before ACK
    Checksum	                        Ensures data integrity



🔟 Summary:

    Concept	                Explanation
    createServer()	        Creates a TCP server and returns a server instance
    listen(port)	        Starts the server on the specified port
    connection Event	    Fires when a client connects (after a three-way handshake)
    data Event	            Fires when the server receives data from the client
    close Event	            Fires when the client disconnects
    Sockets	                Communication endpoints, used for reading and writing data
    PSH Flag	            Ensures data is pushed immediately
    HTTP & TCP	            Browsers send HTTP requests, so TCP-only servers need to send HTTP responses
    TCP Headers	            Contain source/destination port, sequence number, ACK, and flags
    Wireshark Usage	        Can be used to inspect TCP requests and responses