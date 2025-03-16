🔹 Inspecting Port Numbers with Wireshark:

    Wireshark is a powerful network protocol analyzer that allows you to capture and inspect network traffic, including port numbers used in communication between devices.

    🔹 Steps to Inspect Port Numbers in Wireshark:

    1️⃣ Install and Open Wireshark:

        Download and install Wireshark from Wireshark's official website.
        Open Wireshark and select your active network interface (Wi-Fi or Ethernet).

    2️⃣ Start Capturing Traffic:

        Click the Start Capture button (blue shark fin 🦈).
        Perform an action like:
        Open a website (e.g., https://google.com).
        Ping a server (ping google.com).
        SSH into a remote server (ssh user@server.com).

    3️⃣ Filter by Port Number:

        Once packets appear, use display filters to see traffic on specific ports:
        HTTP (Port 80) → tcp.port == 80
        HTTPS (Port 443) → tcp.port == 443
        DNS (Port 53) → udp.port == 53
        SSH (Port 22) → tcp.port == 22

    4️⃣ Inspect a Packet:

        Click on a captured packet.
        Expand the Transmission Control Protocol (TCP) or User Datagram Protocol (UDP) section.
        Look for:
        Source Port (Where the request is coming from)
        Destination Port (Where the request is going)

    5️⃣ Analyze Port Behavior:

        Client requests use random high-numbered ports (e.g., 50000+).
        Server responses use well-known ports (e.g., 80 for HTTP, 443 for HTTPS).
        Some services use custom ports (e.g., game servers, database connections).
        🔹 Example: Analyzing HTTPS Traffic
        1️⃣ You visit https://google.com.
        2️⃣ Your browser sends a request from random port (e.g., 52000) to Google’s port 443 (HTTPS).
        3️⃣ Wireshark shows:

            Source IP: 192.168.1.10
            Source Port: 52000
            Destination IP: 142.250.180.14
            Destination Port: 443

        4️⃣ The server responds back to port 52000, completing the connection.

    🔹 Summary:

        ✅ Wireshark helps inspect how port numbers direct network traffic.
        ✅ Filtering by port number allows you to analyze specific services.
        ✅ Observing source and destination ports helps understand client-server communication.