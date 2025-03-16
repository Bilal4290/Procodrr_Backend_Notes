Understanding TCP Clients in Node.js Using the net Module:

    A TCP client allows a machine to connect to a TCP server, send data, receive responses, and handle errors properly. Below, I'll explain everything in full detail, covering how connections are made, how data is sent, and how errors are handled.

1️⃣ How to Create a TCP Client?

    Using net.createConnection()
    To create a TCP client, we use the net.createConnection() method:

            import net from 'node:net';

            const client = net.createConnection({
                port: 4000,       // Server's port
                host: '127.0.0.1' // Server's IP address (loopback for local machine)
            });


    What Does createConnection() Do?

        It initiates a connection to the given host and port.
        It returns a net.Socket instance, which allows communication with the server.


2️⃣ What Happens When a Client Connects?

    A three-way handshake occurs:

        Client sends SYN to the server.
        Server responds with SYN-ACK.
        Client sends ACK, and the connection is established.

    How Do We Know When a Client is Connected?

        The connect event is fired when the client successfully connects:

            client.on('connect', () => {
                console.log('Connected to the server!');
            });


3️⃣ How to Send Data from a Client to a Server?

    Once the client is connected, we can send data using socket.write():

        client.write('Hello, Server!');

    What Happens Internally?

        The data is sent in a TCP packet.
        The packet contains TCP headers, including sequence numbers and ACKs.
        The server receives the data, triggering its data event.


4️⃣ How to Handle Errors When the Server is Off?

    If the server is not running, the client will crash unless we handle errors properly.

    Handling Errors with error Event:

        client.on('error', (err) => {
            console.error('Server Lost:', err.message);
        });


5️⃣ How to Receive Data from the Server?

    If the server sends data, the client can listen for it using the data event:

        client.on('data', (chunk) => {
            console.log('Received from server:', chunk.toString());
        });


6️⃣ What is socket.end() and When to Use It?

    The socket.end() method closes the connection gracefully.

    When to Use socket.end()?

        When the client wants to disconnect after sending data.
        It notifies the server that the client is done sending data.
        Example:

                client.write('Bye, Server!');
                client.end();

        What Happens Internally?

            Client sends a FIN (Finish) packet to the server.
            Server responds with ACK.
            Connection is closed properly


8️⃣ Summary of Key Concepts:

    Concept	                    Explanation
    net.createConnection()	    Creates a TCP client socket
    connect Event	            Fires when the connection is established
    socket.write()	            Sends data to the server
    socket.on('data')	        Receives data from the server
    socket.on('error')	        Handles errors like server down
    socket.end()	            Gracefully closes the connection