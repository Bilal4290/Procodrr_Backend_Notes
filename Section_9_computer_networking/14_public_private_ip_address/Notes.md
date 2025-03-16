📌 Why Do ipconfig and "What is My IP" Show Different IPs?

    When you run ipconfig (on Windows) or ifconfig (on Linux/macOS), you get your local/private IP address.
    When you visit "What is my IP" on a website, you see your public IP address.

    Command	            Returns	                                Scope
    ipconfig	        Private IP (e.g., 192.168.1.2)	        Inside your home network (LAN)
    What is my IP?	    Public IP (e.g., 39.50.220.14)	        Visible on the Internet


1️⃣ Private IP Address:

    📍 Definition: 
                    Used inside local networks (LANs). 
                    Cannot be accessed from the internet directly.
                    The concept of private IP addresses was introduced in 1996 through RFC 1918, which was published by the Internet Engineering Task Force (IETF)
    📍 Example: 192.168.1.10, 10.0.0.25, 172.16.5.3
    📍 Why Needed?

    IPv4 has only ~4.3 billion addresses, but more than 18.8 billions of devices exist.
    Instead of assigning every device a public IP, we use private IPs inside LANs.
    These are not routable on the internet.

    📍 Reserved Private IP Ranges:

    Range	                            CIDR Notation
    10.0.0.0 – 10.255.255.255	            /8
    172.16.0.0 – 172.31.255.255	            /12
    192.168.0.0 – 192.168.255.255           /16


📌 Reserved IP Address Ranges (Min-Max Format)

| Range                             | Purpose                                   |   Number of Addresses |
|-----------------------------------|-------------------------------------------|-----------------------|
| 0.0.0.0 - 0.255.255.255           | Software, current network                 |              16777216 |
| 10.0.0.0 - 10.255.255.255         | Private networks (RFC 1918)               |              16777216 |
| 100.64.0.0 - 100.127.255.255      | Carrier-grade NAT (RFC 6598)              |               4194304 |
| 127.0.0.0 - 127.255.255.255       | Loopback                                  |              16777216 |
| 169.254.0.0 - 169.254.255.255     | Link-local                                |                 65536 |
| 172.16.0.0 - 172.31.255.255       | Private networks (RFC 1918)               |               1048576 |
| 192.0.0.0 - 192.0.0.255           | IETF Protocol Assignments                 |                   256 |
| 192.0.2.0 - 192.0.2.255           | TEST-NET-1 for documentation and examples |                   256 |
| 192.88.99.0 - 192.88.99.255       | IPv6 to IPv4 relay (deprecated)           |                   256 |
| 192.168.0.0 - 192.168.255.255     | Private networks (RFC 1918)               |                 65536 |
| 198.18.0.0 - 198.19.255.255       | Network benchmark testing                 |                131072 |
| 198.51.100.0 - 198.51.100.255     | TEST-NET-2 for documentation and examples |                   256 |
| 203.0.113.0 - 203.0.113.255       | TEST-NET-3 for documentation and examples |                   256 |
| 224.0.0.0 - 239.255.255.255       | Multicast                                 |             268435456 |
| 240.0.0.0 - 255.255.255.255       | Reserved for future use                   |             268435456 |
| 255.255.255.255 - 255.255.255.255 | Broadcast                                 |                     1 |




2️⃣ Public IP Address

    📍 Definition: Unique, routable address used to identify devices on the internet.
    📍 Example: 39.50.220.14, 102.5.8.90
    📍 Why Needed?

    A website (like google.com) needs a public IP so people can reach it.
    Every device talking to the internet must use a public IP.
    Since IPv4 is limited, public IPs are now sold by ISPs.



📌 How Do Private IP Devices Access the Internet?

    Because private IPs cannot communicate directly with the internet, we use a technology called NAT (Network Address Translation).

    1️⃣ Before 2010: NAT
    Your router had a public IP (e.g., 39.50.220.14).
    All your home devices had private IPs (e.g., 192.168.1.10, 192.168.1.20).
    When a device sent a request to a website (google.com), the router replaced the private IP with its public IP and forwarded the request.
    The website only saw the router's public IP.
    When the response came back, the router sent it back to the correct private device.


    2️⃣ After 2010: CG-NAT (Carrier-Grade NAT)
    ISPs ran out of public IPv4 addresses.
    Instead of assigning each home a public IP, ISPs assigned a private IP (e.g., 100.64.1.5) to home routers.
    Now, thousands of homes share a single public IP assigned to the ISP router.
    The ISP does NAT twice (first at your home router, then at their company router) before traffic reaches the internet.
    This is called Carrier-Grade NAT (CG-NAT).

    
    🔹 Example of CG-NAT Process:

        Your device (192.168.1.10) sends a request to google.com.
        Your home router (192.168.1.1) changes it to a private IP like 100.64.1.5.
        The ISP router (100.64.1.5) changes it to a public IP like 39.50.220.14.
        The request reaches google.com.
        The response follows the reverse path.

    🔹 Why Do "What is My IP" and Router Show Different IPs?

        Router Admin Panel → Shows the private IP assigned by ISP (e.g., 100.64.1.5).
        What is My IP? → Shows the public IP of ISP router (e.g., 39.50.220.14).



📌 Who Assigns Public IPs & Why Do We Have to Pay?

    Before 2010, every home got a public IP for free.
    Now, public IPv4 addresses are scarce, so ISPs sell them.
    You pay your ISP (PTCL, StormFiber, Nayatel, etc.) if you need a dedicated public IP.



📌 0.0.0.0 vs. 127.0.0.1:

    🔹 0.0.0.0

        Means "all available IPs" on a machine.
        Used when a server is listening on all network interfaces.

    🔹 127.0.0.1 (Localhost)

        A special loopback address.
        Used when a device wants to talk to itself (e.g., running a local web server).



📌 How to Make a Device Accessible from the Internet?

    You need a public IP (not CG-NAT).
    Or use Port Forwarding on your home router.
    Or use a VPN like Tailscale/Cloudflare Tunnel to bypass CG-NAT.




📌 Final Takeaways

    Concept	                Explanation
    ipconfig	            Shows private IP inside LAN.
    "What is my IP"	        Shows public IP (router or ISP level).
    Private IP	            Used inside local networks. Cannot be accessed from the internet.
    Public IP	            Globally unique. Used to identify devices on the internet.
    NAT	                    Translates private IPs to a public IP for internet access.
    CG-NAT	                ISP-level NAT that makes multiple homes share a public IP.
    Port Forwarding	        Allows a device to be accessed from the internet.
    0.0.0.0	                Listens on all IPs of a machine.
    127.0.0.1	            Localhost (device talks to itself).

