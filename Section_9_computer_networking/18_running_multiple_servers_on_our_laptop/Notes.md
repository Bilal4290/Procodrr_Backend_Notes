🌐 Running Multiple Servers in Node.js

    1️⃣ Create Two Servers on Different Ports:

    Create a file called servers.js and add the following code:

        const http = require("http");

        // Server 1 on Port 3000
        const server1 = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello from Server 1 (Port 3000)");
        });

        server1.listen(3000, () => {
        console.log("Server 1 running at http://localhost:3000");
        });

        // Server 2 on Port 4000
        const server2 = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello from Server 2 (Port 4000)");
        });

        server2.listen(4000, () => {
        console.log("Server 2 running at http://localhost:4000");
        });


    2️⃣ Run the Servers:

    In your terminal, run:

        node servers.js

    Now, you have:

        Server 1 running on http://localhost:3000
        Server 2 running on http://localhost:4000


    🛠 Set Up Port Forwarding in Router

        Open your router’s admin panel (192.168.1.1 or 192.168.100.1).
        Log in with your admin credentials.
        Find Port Forwarding / Virtual Server settings.
        Add two rules to forward ports 3000 and 4000 to your laptop’s local IP (192.168.1.100).

    Service Name	    Protocol	    External Port	    Internal IP	         Internal Port
    Node Server 1	    TCP	            3000	            192.168.1.100	     3000
    Node Server 2	    TCP	            4000	            192.168.1.100	     4000


    3️⃣ Access Your Servers from the Internet

    ✅ Find your public IP by visiting WhatIsMyIP.
    ✅ Access your servers using:

    http://YOUR_PUBLIC_IP:3000 → Server 1
    http://YOUR_PUBLIC_IP:4000 → Server 2


    🔀 What If You Have Only One Public IP?

    Your router has a public IP, but all devices inside your network share it.
    To expose multiple servers, you must use different external ports:

    External Port	    Internal IP	        Internal Port
    80 (Web)	        192.168.1.100	    3000
    8080	            192.168.1.100	    4000

    Now:
    http://YOUR_PUBLIC_IP:80 → Routes to Server 1 (3000)
    http://YOUR_PUBLIC_IP:8080 → Routes to Server 2 (4000)


    🎯 What is Port Forwarding?

        Your router blocks incoming requests unless you manually forward them.

        Without Port Forwarding → Your laptop is invisible from the internet.
        With Port Forwarding → Requests on specific ports are forwarded to your laptop.

    🛑 Security Tips

        1️⃣ Use a Firewall to block unused ports.
        2️⃣ Change Ports from common ones like 80 to prevent attacks.
        3️⃣ Use a VPN or SSH Tunneling for extra security.


    

    🔥 Summary
        
        Created multiple servers in Node.js.
        Used port forwarding to expose them to the internet.
        Configured different ports to avoid conflicts.
        
    💡 Now, your laptop is hosting multiple servers, accessible worldwide! 🚀



