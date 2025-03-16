🔗 How to Connect an IP Address with a Domain Name? 

    If you have a domain name (like mywebsite.com) and you want it to point to an IP address (like 192.168.1.10 or 203.0.113.45), you need to use DNS (Domain Name System) records.

📌 Steps to Connect Your IP Address with a Domain Name

    1️⃣ Buy a Domain Name:

        Purchase a domain from a registrar like GoDaddy, Namecheap, Google Domains.
        Example: You buy mywebsite.com.

    2️⃣ Get a Public IP Address:

        If you are hosting a website on your own server (like a VPS or your home PC), you need a static public IP.
        If you use a hosting provider (like AWS, DigitalOcean), they will give you a public IP address.

    3️⃣ Go to Your Domain Registrar's DNS Settings:

        Log in to GoDaddy, Namecheap, or your domain provider.
        Find the DNS Management or Name Server section.

    4️⃣ Add an "A Record" (Address Record):

        Look for the A Record section.

        Add an A Record for your domain:

            Type	Host	                Value (IP Address)	        TTL
            A	    @ (or your domain)	    203.0.113.45	            Automatic (or 600 sec)

        💡 Explanation:

            "A" Record connects a domain name to an IPv4 address.
            "@" means the root domain (like mywebsite.com).
            "203.0.113.45" is the IP address where your website is hosted.

        🌐 Optional: Additional DNS Records

        🔹 Add a CNAME Record (For "www" Subdomain)

            If you want www.mywebsite.com to redirect to mywebsite.com, add this:

            Type	Host	    Value	                    TTL
            CNAME	www	        @ (or mywebsite.com)	    Automatic

        💡 Explanation:

            "CNAME" (Canonical Name) makes www.mywebsite.com redirect to mywebsite.com.

        🔹 Add an AAAA Record (For IPv6):

            If your server supports IPv6, add an AAAA Record:

            Type	Host	Value (IPv6 Address)	    TTL
            AAAA	@	    2606:4700:3033::ac43:2f63	Automatic

        💡 Explanation:

            "AAAA" Record is like an A Record but for IPv6 addresses.

    5️⃣ Wait for DNS Propagation (5 min - 48 hours):

        After adding the A Record, your domain will point to your IP address, but DNS changes take time to update worldwide.

        You can check if your DNS is working using:
        ✅ https://dnschecker.org/

        📌 How to Test If Your Domain Works?
        Once DNS propagation is complete, open a browser and enter:
        🔹 http://mywebsite.com ✅
        🔹 http://www.mywebsite.com ✅

        If everything is set up correctly, your website will load! 🎉

    🔥 Final Summary
    ✅ Step 1: Buy a domain from GoDaddy, Namecheap, etc.
    ✅ Step 2: Get a public IP address (from a hosting provider or ISP).
    ✅ Step 3: Go to your domain registrar's DNS settings.
    ✅ Step 4: Add an A Record (mywebsite.com → 203.0.113.45).
    ✅ Step 5: Add a CNAME Record (www.mywebsite.com → mywebsite.com).
    ✅ Step 6: Wait for DNS propagation (5 min - 48 hours).
    ✅ Step 7: Open mywebsite.com in a browser to test.





🌍 How to Remove Port Numbers from URLs Like example.com:1234?

    By default, websites run on:
    ✅ Port 80 → for HTTP
    ✅ Port 443 → for HTTPS

    If your website runs on a custom port (e.g., 1234), users must enter example.com:1234, which is not user-friendly.

    👉 Solution: You need to forward requests from port 80 or 443 to your application running on port 1234.

    🔥 3 Ways to Fix This Issue
    1️⃣ Use a Reverse Proxy (Best Solution)
    2️⃣ Use GoDaddy's Forwarding (Limited Features)
    3️⃣ Run Your App on Port 80/443 (If Possible)
