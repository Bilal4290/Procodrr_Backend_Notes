🌐 How HTTP and TCP Work Together for Data Transfer 🚀

1️⃣ TCP Handshake (Before HTTP Request)

    Before an HTTP request is sent, TCP establishes a connection between the browser (client) and the server using the three-way handshake:

    ✅ Three-Way Handshake Steps:

        1️⃣ Client → Server: SYN (Synchronize):

            The browser sends a SYN packet to the server, asking to establish a connection.

        2️⃣ Server → Client: SYN-ACK (Synchronize + Acknowledge)

            The server responds with a SYN-ACK, acknowledging the request.

        3️⃣ Client → Server: ACK (Acknowledge)

            The browser sends an ACK, completing the handshake.

    ✅ Now the TCP connection is established!
    📌 After this, HTTP communication begins over this TCP connection.


2️⃣ HTTP Request Flow:
    
    Once the TCP connection is established, the browser sends an HTTP GET request to the server:

    1️⃣ Browser → Server: HTTP GET / HTTP/1.1

        Sent inside a TCP packet, containing request headers like:
        
            GET /index.html HTTP/1.1
            Host: example.com
            User-Agent: Chrome
            The server processes this request.

    2️⃣ Server → Browser: ACK (Acknowledgment)

    Server acknowledges that it received the request.


    3️⃣ Server → Browser: HTTP Response Headers

        Sent inside a TCP packet with headers like:
    
            HTTP/1.1 200 OK
            Content-Length: 1024000
            Content-Type: text/html

        This does not contain actual data yet!
        The browser waits until \r\n\r\n (which separates headers from data) is received.


    4️⃣ Browser → Server: ACK

        Browser acknowledges that it has received the response headers.


    5️⃣ Server → Browser: Actual Data (HTML, JSON, Video, etc.)

        The server starts sending the response body in chunks.
        This data is split into multiple TCP packets if it exceeds MSS (Maximum Segment Size).



3️⃣ How TCP Handles Large Data (More than 64 KB):

    By default, the browser receives 64 KB chunks. This is because:

        TCP does not send the entire file in one go.
        Instead, it splits the data into smaller packets (typically MSS ≈ 1460 bytes for Ethernet).
        The server sends data in chunks, and each chunk is acknowledged before sending the next.

    ✅ Example: Sending a 5MB File:

        1️⃣ Server prepares a response with Content-Length: 5MB.
        2️⃣ The first TCP packet (64 KB) is sent.
        3️⃣ The browser acknowledges it (ACK).
        4️⃣ The server sends the next chunk (another 64 KB).
        5️⃣ This continues until the entire file is transferred.

    📌 If a packet is lost (e.g., due to network congestion), TCP retransmits only the missing packet, not the whole file.

4️⃣ How TCP Segments Data (Diagram Representation) 🖼:

    Here's how TCP splits and sends data efficiently:

    Browser Sends HTTP GET  --->  Server Receives HTTP GET
    Browser Receives Headers  <---  Server Sends HTTP Headers
    Browser ACKs Headers      --->  Server Starts Sending Data

    [Packet 1]    [Packet 2]    [Packet 3]    [Packet 4]   .....
    [64 KB Data]  [64 KB Data]  [64 KB Data]  [64 KB Data]

    TCP ACK  --->  TCP ACK  --->  TCP ACK  --->  TCP ACK  
    ✅ If the data is small (e.g., a JSON response of <64 KB), it is sent in one TCP packet.
    ✅ If the data is large (e.g., a 10MB file), TCP fragments it and sends it in multiple packets.



5️⃣ Why 64 KB by Default?

    By default, Node.js and browsers handle TCP buffers at 64 KB:

        Browsers use 64 KB chunks to optimize performance.
        Node.js socket.write() sends data in 64 KB chunks unless changed.

    💡 Can We Change This? Yes! In Node.js, you can control the buffer size using:

        socket.setSendBufferSize(128 * 1024); // Increase buffer to 128 KB

    This controls how much data is sent in a single TCP write operation.


6️⃣ TCP Window Size and Flow Control:

    📌 The client (browser) tells the server how much data it can receive at a time using the TCP Window Size.

        If the network is fast, the window size increases.
        If there is congestion, TCP slows down the transfer.

    This is why real-world file transfers don’t always happen at a fixed speed.


7️⃣ What Happens If a Packet is Lost?
    🔴 If a packet is lost (due to network issues), TCP: 

        1️⃣ Detects the missing packet (via missing ACK).
        2️⃣ Retransmits the lost packet.
        3️⃣ Resumes transmission without resending everything.

    This is called TCP reliability.

8️⃣ Final Summary (How Data Packets Work in TCP):

    Step	                                        Action
    1. TCP Handshake	                            SYN → SYN-ACK → ACK (Establish connection)
    2. HTTP GET Request	                            Sent over TCP
    3. Server Sends Headers	                        Response headers sent (without data)
    4. Server Starts Sending Data	                Data sent in 64 KB chunks (or smaller TCP packets)
    5. Client Acknowledges Each Chunk	            ACK sent after each received chunk
    6. TCP Handles Packet Loss	                    Retransmits only lost packets
    7. Transfer Completes	                        Server sends FIN, connection closes


🎯 Final Thoughts:

    Browsers first receive response headers, then parse \r\n\r\n before receiving actual data.
    TCP does not send a large file in one go → it splits it into packets.
    Each TCP packet is acknowledged to ensure reliable delivery.
    Packet loss doesn’t cause re-sending everything, only the lost packet.