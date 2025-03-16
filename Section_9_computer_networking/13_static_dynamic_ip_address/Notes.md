📌 1. Static vs. Dynamic IP Address
 
    An IP address is used to identify devices on a network. It can be either Static or Dynamic.

    Static IP:
    	A manually assigned IP address that doesn’t change.
        Use Cases:	Servers, Hosting Websites, Remote Access

    Dynamic IP:
    	An IP address that is automatically assigned by a DHCP server and may change periodically.	
        Use Cases: Home Networks, Mobile Devices


📌 2. Dynamic Host Configuration Protocol (DHCP)

    A DHCP Server is responsible for dynamically assigning IP addresses to devices in a network.

    How DHCP Works (Step-by-Step)?
        Client sends a DHCP Discover:
            A device (client) sends a broadcast request (DHCPDISCOVER) to find a DHCP server.

        DHCP Server responds with an IP Offer:
            The DHCP server sends back a DHCPOFFER, offering an available IP address.

        Client requests the offered IP:
            The client sends a DHCPREQUEST message to confirm the IP address.

        DHCP Server acknowledges the request:
            The server sends a DHCPACK (DHCP Acknowledgment), assigning the IP.

    📌 Example of DHCP Lease Time:

    Short Lease (Few Hours): Used for public WiFi, airports, and hotels.
    Long Lease (Days or Weeks): Used for home or office networks.



📌 3. What Happens When We Connect to a Network?

    When your device (phone/laptop) connects to a network (WiFi or Mobile Data), it needs an IP address to communicate.

    🔹 WiFi (Router Connection)

    Your router has a built-in DHCP Server that assigns your device a private IP address (e.g., 192.168.0.10).
    The router itself has an IP address (usually 192.168.0.1), which acts as the default gateway for all devices.
    The router translates local IPs to the public IP provided by your ISP (Internet Service Provider).
    🔹 4G/5G (Mobile Data)

    Your SIM Card identifies your phone to the cell tower.
    Your carrier’s DHCP server assigns you a dynamic public IP address (e.g., 39.45.67.123).
    This IP is usually temporary and changes when you reconnect to the network.



📌 4. Why Does a Router Use 192.168.0.1 and Not 192.168.0.0?

    192.168.0.0 is the Network ID → It represents the entire subnet, not a single device.
    192.168.0.1 is a valid IP and is used as the router’s IP address (default gateway).
    192.168.0.255 is the Broadcast Address → Used to send messages to all devices in the network.



📌 5. What is an IP Address Pool?

    The IP Address Pool is the range of dynamic IPs that the DHCP server assigns to connected devices.

    📝 Example:
    If a router has a DHCP pool of 192.168.0.100 to 192.168.0.199:

    A new device connecting will get an IP like 192.168.0.101.
    Another device may get 192.168.0.102, and so on.
    If all 100 IPs are used, no new device can get an IP until one disconnects.
    🔥 Why Set Static IP Outside the DHCP Range?
    If you manually set a static IP, use addresses outside the DHCP range (e.g., 192.168.0.201), because:

    If you choose an IP inside the DHCP pool (192.168.0.150), there is a chance the router might assign the same IP to another device, causing an IP conflict.


📌 6. Difference Between Static & Dynamic IP

    Type	        Assigned By	        Changes?	    Use Case
    Dynamic IP	    DHCP Server	        Yes         	Home WiFi, Mobile Networks
    Static IP	    Manually Set	    No	            Servers, CCTV, Printers

    🔹 Dynamic IPs change when the lease expires or when you reconnect.
    🔹 Static IPs stay the same, making them useful for servers & remote access.