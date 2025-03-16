📌 TCP & UDP – The Backbone of the Internet:

    The Internet runs on two main transport protocols:
    ✔ TCP (Transmission Control Protocol) → Reliable communication
    ✔ UDP (User Datagram Protocol) → Fast, but unreliable communication

📌 Why Do We Need TCP & UDP?

    Different devices use different operating systems (Windows, Mac, Linux, Android).
    A common set of rules (protocols) are needed so all devices can communicate.
    All major application protocols (HTTP, FTP, SMTP, etc.) are built on TCP or UDP except IP (Internet Protocol).


🚀 TCP (Transmission Control Protocol) – Reliable Communication:

    📌 Features of TCP:

        ✅ Reliable Data Transfer – Ensures all data reaches the destination.
        ✅ Connection-Oriented – Establishes a connection before data transfer.
        ✅ Error Checking – Ensures missing data is re-sent.
        ✅ Ordered Data Delivery – Packets arrive in the correct order.

    📌 How TCP Works (Three-Way Handshake)

        Before sending data, TCP establishes a connection between two computers using a 3-step process:

            1️⃣ SYN (Synchronize) – Computer A sends a request to Computer B to establish a connection.
            2️⃣ SYN-ACK (Synchronize-Acknowledge) – Computer B acknowledges and responds.
            3️⃣ ACK (Acknowledge) – Computer A confirms, and the connection is established.

    📌 Now, data transfer starts! 🔥

    📌 TCP Data Transfer Process

        1️⃣ TCP splits large data into smaller segments (packets).
        2️⃣ Each segment has a sequence number (so data can be reassembled in order).
        3️⃣ If some data is lost, TCP requests it again (ensuring complete transfer).
        4️⃣ If all data is received correctly, Computer B sends an acknowledgment (ACK).
        5️⃣ If connection fails, both computers detect the failure and stop the transfer.

    📌 Where is TCP Used?

        Web browsing (HTTP/HTTPS)
        Email (SMTP, IMAP, POP3)
        File transfers (FTP, SFTP)
        Remote access (SSH, Telnet)

    📌 Example: When you visit a website, HTTP uses TCP to ensure that all website data loads properly.



🚀 UDP (User Datagram Protocol) – Fast but Unreliable

    Unlike TCP, UDP is connectionless and does NOT ensure data reliability.

    📌 Features of UDP:

        ✅ Faster than TCP (no connection setup).
        ✅ Lightweight (no error-checking or acknowledgment).
        ✅ Best for real-time communication (if some data is lost, no problem).

    📌 Where is UDP Used?

        Video calls & VoIP (Google Meet, Zoom, WhatsApp Calls)
        Online gaming
        Live streaming (YouTube Live, Twitch)
        DNS (Domain Name System) resolution

    📌 Example: In a video call, if some frames are lost, speed is more important than accuracy. UDP ensures fast delivery instead of retransmitting missing frames.



📌 QUIC Protocol (A Modern Replacement for TCP & UDP)

    Google developed QUIC (Quick UDP Internet Connections) as a faster alternative to TCP.

    📌 Why QUIC?

        Based on UDP, but as reliable as TCP.
        No handshake needed (faster than TCP).
        Reduces latency (good for video streaming & gaming).
        Used in HTTP/3 (latest version of HTTP protocol).

    📌 Where is QUIC Used?

        Google Chrome, YouTube, Google Meet (for faster connections).
        HTTP/3 (new web standard) uses QUIC instead of TCP.



📌 TCP vs. UDP vs. QUIC – Comparison Table

    Feature	                TCP (Reliable)	                UDP (Fast)	            QUIC (Fast + Reliable)
    Connection Type	        Connection-Oriented     	    Connectionless	        Connectionless
    Reliability	            ✅ Reliable	                   ❌ Unreliable	         ✅ Reliable
    Speed	                Slower (3-way handshake)	    Fast	                Faster (No handshake)
    Packet Order	        Maintains Order	                No Order	            Maintains Order
    Use Cases	            Web browsing, Email,	        Video Calls, 	        Modern Web, HTTP/3,
                            File Transfer                   Streaming, DNS          Google Services



📢 Final Takeaways

    ✅ TCP → Reliable, but slower (used for websites, emails, file transfers).
    ✅ UDP → Fast, but unreliable (used for gaming, video calls, streaming).
    ✅ DNS → Converts domain names to IP addresses (mostly uses UDP).
    ✅ QUIC → Fast like UDP, Reliable like TCP (used in HTTP/3, Google Meet, YouTube).