🌍 How Does DNS Work?

    DNS (Domain Name System) is like the phonebook of the internet 📖. It translates human-friendly domain names (e.g., google.com) into IP addresses (e.g., 142.250.190.14), which computers use to communicate.

    When you type www.google.com into your browser, your computer needs to find the IP address (e.g., 142.250.182.4) to load the website. But how does it find the IP address?

    The answer is DNS (Domain Name System) – it converts domain names into IP addresses.


1️⃣ Steps of DNS Resolution (How DNS Works)

    When you type google.com in your browser, a DNS resolution process occurs in several steps:

    📌 Step 1: Browser Cache Check:

        Before making a DNS request, the browser first checks its local cache to see if it already knows the IP address for google.com.

        ✔ If found → Uses the cached IP (fastest).
        ❌ If not found → Moves to the next step.

    
    📌 Step 2: Operating System (OS) Cache Check:

        If the browser doesn’t have the IP, it asks the OS DNS cache (stored by the system). This cache exists to reduce repeated lookups.

        ✔ If found → Uses the cached IP.
        ❌ If not found → Moves to the next step.

    📌 Step 3: Hosts File Check:

        The system checks the local hosts file (C:\Windows\System32\drivers\etc\hosts on Windows, /etc/hosts on Linux/Mac).

        ✔ If found → Uses the IP from the hosts file.
        ❌ If not found → Moves to the next step.


    📌 Step 4: Ask the Recursive Resolver (ISP DNS):

        If no local cache exists, the request goes to a Recursive DNS Resolver (usually provided by your ISP or public DNS like Google DNS (8.8.8.8) or Cloudflare (1.1.1.1)).

        The Recursive Resolver doesn’t store permanent records, but it caches responses.
        If it doesn’t have the answer, it contacts the Root Nameserver.


    📌 Step 5: Query the Root Nameserver:
            
        The Recursive Resolver asks one of the 13 root nameservers (A to M), which store information about Top-Level Domain (TLD) nameservers.

        ✔ Root server replies with the address of the TLD nameserver for .com (because google.com uses .com).

    
    📌 Step 6: Query the TLD Nameserver:

        Now, the TLD nameserver (for .com domains) is queried.

        ✔ TLD nameserver responds with the IP address of the Authoritative Nameserver for google.com.


    📌 Step 7: Query the Authoritative Nameserver:

        The Recursive Resolver then contacts the Authoritative Nameserver, which holds the actual DNS records for google.com.

        ✔ Authoritative nameserver replies with the final IP address of google.com, e.g., 142.250.190.14.


    📌 Step 8: Response Sent Back & Cached:

        The Recursive Resolver caches the IP address to speed up future requests and returns it to the browser.

        ✔ Browser stores the IP in cache and sends an HTTP request to 142.250.190.14.
        ✔ Google’s web server responds, and the webpage loads. 🚀


    📌 DNS Resolution Flow (Diagram):

        [User types google.com]  
            ⬇  
        [Browser Cache] → [OS Cache] → [Hosts File]  
            ⬇  
        [Recursive Resolver (ISP)]  
            ⬇  
        [Root Nameserver] → [TLD Nameserver (.com)] → [Authoritative Nameserver]  
            ⬇  
        [Final IP Address Returned]  
            ⬇  
        [Browser connects to website]


    🛠 What is TTL (Time to Live)?

        TTL defines how long a DNS record stays in cache.

        Short TTL (e.g., 60 seconds) → If IP changes often (e.g., load-balanced sites).
        Long TTL (e.g., 86400 seconds = 1 day) → If IP rarely changes.
        📌 Recommended TTL:

        Websites with frequent changes: 300 – 600 seconds (5-10 minutes)
        Stable websites: 3600 – 86400 seconds (1 hour – 1 day)



2️⃣ What is Anycast DNS?

    🚀 Anycast DNS is a method where multiple DNS servers share the same IP address and route requests to the nearest server based on geographical location.

    ✅ How It Works

        Instead of a single DNS server handling requests, multiple DNS servers exist worldwide.
        When you request google.com, your query is sent to the closest available DNS server, reducing latency and improving speed.

    ✅ Benefits of Anycast DNS

        ✔ Faster DNS resolution (since it picks the closest server).
        ✔ Better redundancy (if one server fails, another takes over).
        ✔ Protection against DDoS attacks (traffic is spread across multiple locations).

    🌍 Example of Anycast DNS Providers

        Google Public DNS (8.8.8.8 / 8.8.4.4)
        Cloudflare DNS (1.1.1.1 / 1.0.0.1)
        OpenDNS (208.67.222.222 / 208.67.220.220)


🔍 Why Do Some Websites Not Open with Direct IP?

    Some websites do not open when accessed via a direct IP address due to several technical reasons. Here’s why:

    1️⃣ The Web Server Hosts Multiple Websites (Virtual Hosting):

        Most web servers use virtual hosting, where multiple domains share the same IP address.

        🔹 How Virtual Hosting Works:

            A single server might host multiple websites like:
                example.com
                mywebsite.com
                yourblog.com

            All these domains share the same IP address (e.g., 192.168.1.100).

            When you type a domain (example.com), your browser sends a request with a "Host" header, telling the server which website to load.

            But if you enter the IP address directly, the "Host" header is missing, so the server doesn't know which website to show, often resulting in:

            A default page (if configured).
                A 404 error.
                A "This site can’t be reached" error.
            ✅ Solution: Use the domain name instead of the raw IP.


    2️⃣ The Website Uses a CDN (Content Delivery Network):

        Many large websites (e.g., Google, Facebook) do not have a single fixed IP address but instead use CDNs that dynamically route traffic.

        🔹 How CDNs Work
        When you type google.com, DNS resolves it to different IPs based on your location.
        If you manually enter an IP (e.g., 142.250.190.14), you might be:
        Hitting a Google data center that doesn’t serve regular website traffic.
        Using an IP meant for backend services, not web browsing.
        ✅ Solution: Use the domain name, so DNS resolves to the best IP.


    3️⃣ The Website Requires HTTPS (SSL/TLS):

        Some websites force HTTPS connections, and if you enter an IP address:

        The SSL certificate doesn’t match (since it's issued for a domain, not an IP).
        The browser blocks the request, showing a security warning.
        ✅ Solution: If you must use an IP, try accessing it with HTTPS


    4️⃣ The Website Uses Reverse Proxies (Like Cloudflare):

        Websites protected by Cloudflare, AWS, or Nginx proxies often hide their actual IP.

        The real website is behind Cloudflare's firewall.
        Direct IP access is blocked for security reasons.
        ✅ Solution: You must use the domain name to go through the correct routing.



🔍 Understanding the nslookup Command:

    The nslookup (Name Server Lookup) command is used to find the IP address of a domain or the domain name associated with an IP address. It also helps troubleshoot DNS-related issues.


    🛠 How nslookup Works:

        When you run nslookup, your computer queries a DNS server to resolve a domain name into an IP address (or vice versa).

        📌 By default, nslookup uses the system’s DNS server (provided by ISP or manually set like 8.8.8.8).
        📌 You can also specify a different DNS server to use for the lookup.


    🔹 Basic nslookup Commands:

        1️⃣ Find the IP Address of a Domain:

            nslookup google.com

            🔹 Example Output:

                Server:  dns.google
                Address:  8.8.8.8

                Non-authoritative answer:
                Name:    google.com
                Address: 142.250.182.4

            📌 Breakdown:

                Server: The DNS server used to resolve the query (here, Google’s 8.8.8.8).
                Non-authoritative answer: The DNS resolver cached this response (not from Google’s authoritative name server).
                Address: The IP address of google.com.


        2️⃣ Find the Domain Name of an IP Address (Reverse Lookup):

                nslookup 142.250.182.4


        3️⃣ Use a Specific DNS Server for Lookup:

                nslookup google.com 8.8.8.8



    🔹 What is a "Non-Authoritative Answer"?

        When you see "Non-authoritative answer" in nslookup, it means the DNS response came from a cached result instead of the official authoritative name server.

        📌 Why does this happen?

        DNS resolvers cache results for faster response times.
        If the requested domain's IP is found in the cache, the resolver returns it.
        📌 How to get an authoritative answer?

        Use:
            nslookup google.com ns1.google.com





