🔍 What is DNS Hijacking?

    DNS hijacking (also called DNS redirection) is an attack where a hacker manipulates the DNS resolution process to redirect users to malicious websites instead of the legitimate ones they intended to visit.

    💡 Example:
    If you type www.google.com, your browser sends a request to a DNS server to get the IP address of Google’s website. If an attacker hijacks the DNS, they can return a fake IP address and send you to a malicious site that looks like Google but steals your login info.


🛡️ How to Detect DNS Hijacking:

    ✔️ Run the following command to check your DNS settings:

        🔹 Windows (cmd)

            nslookup google.com

        It will show which DNS server is being used. If it's not your ISP’s or Google’s (8.8.8.8), Cloudflare’s (1.1.1.1), etc., it might be hijacked.

        🔹 Check router settings:

            Go to 192.168.1.1 or 192.168.0.1 and verify the DNS server addresses. If they look unfamiliar, change them to trusted ones like Google or Cloudflare.


🖥️ DNS Hijacking Using the Hosts File (For Study Purposes):

    The hosts file is a local text file on your operating system that maps domain names to IP addresses before querying a DNS server. If an attacker modifies this file, they can redirect users to malicious websites instead of legitimate ones.

    🔍 1️⃣ What is the Hosts File?
    
        The hosts file is located at:

        🔹 Windows: C:\Windows\System32\drivers\etc\hosts
        🔹 Linux/macOS: /etc/hosts

        💡 How it works:

        When you type www.google.com in your browser, your system first checks the hosts file to see if there’s a matching entry.
        If there is an entry, it uses that IP address instead of querying a DNS server.
        If no entry is found, it proceeds with normal DNS resolution.
