📌 1. What is an IPv4 Address?

    An IPv4 (Internet Protocol version 4) address is a 32-bit numerical label assigned to a device in a network. 
    It is used for device identification and communication between devices over the internet or LAN.
    👉 Example of an IPv4 address:

            192.168.1.10

        Each IPv4 address is divided into four octets (8-bit segments) and written in dotted decimal format.

    🟢 Binary Representation of 192.168.1.10:

            11000000.10101000.00000001.00001010

        Each octet is 8 bits, so:

            192 → 11000000
            168 → 10101000
            1 → 00000001
            10 → 00001010

    Assigned by a router (for LAN) or cell tower operator (for mobile networks).

    IP ≠ Internet Protocol
    IP (Internet Protocol) is a set of rules for sending and receiving data.
    IP Address is just a number assigned to devices following these rules.


📌 2. IPv4 Addressing (32-bit)

    IPv4 addresses are 32-bit binary numbers but are written in decimal for readability.
    Example: 192.168.0.1 (Decimal) = 11000000.10101000.00000000.00000001 (Binary)
    Divided into four 8-bit octets (each ranging from 0 to 255).

    IPv4 Range
    Minimum: 0.0.0.0 (Network Identifier)
    Maximum: 255.255.255.255 (Broadcast Address)

    IPv4 Total Combinations
    2**32 = 4,294,967,296 (4.29 Billion Devices)
    But with network design constraints, not all are usable.



📌 3. Subnet Mask & CIDR

    A Subnet Mask divides an IP address into:
        Network Portion (Defines which network the device belongs to)
        Host Portion (Identifies a specific device in that network)
    🔹 Example: Subnet Mask 255.255.255.0 (/24)

    IP Address: 192.168.0.1 → Binary: 11000000.10101000.00000000.00000001
    Subnet Mask: 255.255.255.0 → Binary: 11111111.11111111.11111111.00000000

    🔸 Network Portion (First 24 Bits) → 11000000.10101000.00000000 (Same for all devices in LAN)
    🔸 Host Portion (Last 8 Bits) → 00000001 (Changes per device)

    Network ID: 192.168.0.0 (All host bits = 0)
    Broadcast ID: 192.168.0.255 (All host bits = 1)

    🔹 CIDR (Classless Inter-Domain Routing) Notation

    Instead of writing a subnet mask, we use CIDR notation:

    /24 = 24 bits for the network portion, 8 bits for hosts.
    /16 = 16 bits for the network, 16 bits for hosts.

    How Many Devices Can Connect?
    /24 (255.255.255.0) → 256 - 2 = 254 Devices
    /16 (255.255.0.0) → 65,536 - 2 = 65,534 Devices
    🔸 We subtract 2 because:
        .0 is reserved for Network ID.
        .255 is reserved for Broadcast Address.

    🔹 Subnet Mask and CIDR Notation:

        Subnet Mask	        CIDR	    Hosts (Excluding Network & Broadcast)
        255.0.0.0	         /8	            16,777,214
        255.255.0.0	        /16	            65,534
        255.255.255.0	    /24	            254
        255.255.255.128	    /25	            126


    🔹 IPv4 Address Classes

        IPv4 addresses are divided into five classes (A to E) based on their first octet.

        Class	First Octet Range	Default Subnet Mask	    Number of Hosts (Per Network)	    Used For
        A	    1 - 126	                255.0.0.0	        16 million+	                        Large Networks
        B	    128 - 191	            255.255.0.0	        65,000+                     	    Medium Networks
        C	    192 - 223	            255.255.255.0	    254	                                Small Networks
        D	    224 - 239	            N/A (Multicast)	    N/A	                                Used for multicast
        E	    240 - 255	            N/A (Experimental)	N/A	                                Reserved


📌 4. Public vs. Private IP Addresses:

    🔹 Public IP Addresses
        Globally Unique → Assigned by ISPs.
        Allows devices to communicate over the public internet.
        Example: 203.0.113.45 (ISP assigns to your home router).
    🔹 Private IP Addresses
        Used inside a local network (LAN).
        Not routable on the public internet.
        Assigned by routers using DHCP.


    Private IP Ranges       	        Subnet Mask      	CIDR
    10.0.0.0 - 10.255.255.255	        255.0.0.0	        /8
    172.16.0.0 - 172.31.255.255	        255.240.0.0	        /12
    192.168.0.0 - 192.168.255.255	    255.255.0.0	        /16


    How Can Two Devices Have the Same IP Address?
    🔹 Because Private IPs are Reused!

    Your router assigns devices private IPs (192.168.x.x) inside your home.
    Someone else’s router in another house can also assign 192.168.x.x IPs.
    Only public IPs must be unique.



📌 5. The Big IPv4 Mistake: Loopback Range (127.x.x.x)

    127.0.0.0 – 127.255.255.255 reserved for loopback (localhost).
    Uses 255.0.0.0 (/8) Subnet Mask, wasting 16 million IPs!
    Loopback Address (127.0.0.1) is used for testing local network services.
    🔹 Instead of reserving just 127.0.0.1, they wasted 16 million addresses! 😵




📌 6. Why is IPv6 Needed? (128-bit IPs)

    IPv4 Limitations:
    Only 4.29 billion IPs exist, but 18.8 billion devices are connected.
    By 2030, 41 billion devices will need IPs!
    Solution: IPv6 (128-bit) = 2¹²⁸ Addresses
    IPv6 can provide 340 trillion trillion trillion (340 undecillion) unique IPs! 🤯




📌 7. How IP Addresses Are Assigned?

    🔹 Who Assigns Public IPs?
    IANA (Internet Assigned Numbers Authority) manages global IP distribution.
    Regional Internet Registries (RIRs) handle regional distribution.
    Your ISP (Internet Service Provider) gets an IP range from RIR and assigns it to you.
    🔹 Who Assigns Private IPs?
    Your Router (DHCP Server) assigns private IPs to your devices.
    🔹 Mobile Data (4G/5G) IP Assignment
    Cell Tower communicates with the Mobile Operator Office.
    The office assigns you a dynamic public IP from a pool.
    Your phone also has a private IP inside the carrier network.




📌 8. Why is an IP Address Essential?

    Without an IP address, devices cannot communicate on a network.
    IP = Unique Identifier for sending & receiving data.
    Even if you're offline (no internet), your router still gives your device a private 192.168.x.x IP.
    🔹 Why? Because devices on the same LAN need local communication (file sharing, printers, gaming, etc.).




📌 9. Conclusion:

    Concept             	    Key Takeaway
    IP Address	                Identifies devices on a network
    IPv4 (32-bit)	            Supports ~4.3B addresses (Not enough)
    Subnet Mask	                Divides Network & Host Portions
    CIDR Notation	            Shortens subnet representation (e.g., /24)
    Public IP	                Unique, assigned by ISP, required for internet
    Private IP	                Reused inside LAN, assigned by routers
    Loopback (127.x.x.x)	    Used for testing, wasted 16M IPs!
    IPv6 (128-bit)	            The future: 340 undecillion addresses!



📌 10. What is Network ID and Broadcast ID?

    Every subnet (network) has two special IP addresses that cannot be assigned to devices:

    1. Network ID (Network Address)

        Identifies the network itself.
        First address in the range (all host bits are 0).
        Used by routers to identify and route data.
        Example:
        192.168.1.0/24 → 192.168.1.0 (Network ID)
        172.16.5.0/16 → 172.16.0.0 (Network ID)

    2. Broadcast ID (Broadcast Address)

        Used to send data to all devices in the network.
        Last address in the range (all host bits are 1).
        Example:
        192.168.1.0/24 → 192.168.1.255 (Broadcast ID)
        172.16.5.0/16 → 172.16.255.255 (Broadcast ID)

    📝 Example Calculation:
    If we have a network 192.168.1.0/24:

    Network ID: 192.168.1.0
    Broadcast ID: 192.168.1.255
    Usable IPs: 192.168.1.1 → 192.168.1.254
    🚨 Important: Network ID & Broadcast ID cannot be assigned to devices.


