📌 What is a Socket?

    A socket is a communication endpoint used to send and receive data over a network.
    Think of a socket as a "virtual cable" connecting two devices, allowing them to exchange data using networking protocols like UDP or TCP.

    Types of Sockets:

        1. UDP Socket → Works with User Datagram Protocol (UDP).
        2. TCP Socket → Works with Transmission Control Protocol (TCP).
        3. WebSocket → Built on top of TCP, providing a persistent, bidirectional communication channel.


📌 How Do Sockets Work in UDP?

    Server binds to an IP and port (socket.bind(PORT, HOST)).
    Client sends a message to the server (socket.send()).
    Server receives the message and processes it (socket.on('message')).
    Server does NOT keep track of clients (it just responds if needed).
    Messages may get lost, and UDP doesn't retry.


📌 Conclusion:

    Sockets are endpoints for communication.
    UDP sockets are connectionless (send data and disconnect).
    TCP sockets maintain a connection for reliability.
    socket.address() gives the server’s IP and port.
    UDP does not have remoteAddress, but sender info is in the event callback.
    TCP assigns a separate socket per client, while UDP uses one socket for all clients.