📌 What is a MAC Address?

    💡 Full Form: Media Access Control (MAC) Address
    🔹 A 48-bit unique identifier assigned to each network interface card (NIC) of a device.
    🔹 Used for communication within a local network (LAN).

    📌 Example MAC Addresses:

    Windows: 00:A1:B2:C3:D4:E5 (Colon : separator)
    Linux/macOS: 00-A1-B2-C3-D4-E5 (Hyphen - separator)
    Some OS: 00A1.B2C3.D4E5 (Dot . separator)


📌 What is a Network Interface Card (NIC)?

    💡 NIC = A hardware component inside a device that allows it to connect to a network.
    📌 Every NIC has a unique MAC address assigned by the manufacturer.

    🖥️ Example:

    Your laptop’s Wi-Fi adapter has one MAC address.
    Your Ethernet port has another MAC address.
    Your Bluetooth also has a different MAC address.
    Each networking interface in your device has its own MAC address.


📌 Why Do We Need MAC Addresses When We Have IP Addresses?

    MAC Address and IP Address serve different purposes:

    MAC Address 🏠:

        Purpose:                Identifies a device within a local network (LAN).
        Changes?                Fixed (Assigned by manufacturer).
        Where is it Used?       LAN (Local Area Network).
        Who Uses It?            Routers, Switches.

    IP Address 🌍:

        Purpose:                 Identifies a device across different networks (WAN/Internet).
        Changes?                 Dynamic (Changes based on network connection).
        Where is it Used?        WAN (Internet).
        Who Uses It?             Websites, DNS, Internet servers.


📌 Why Do We Need IP Addresses When We Have MAC Addresses?

    1️⃣ MAC Addresses Work Only in LAN

        MAC addresses are only used within a local network.
        They cannot route data across the internet.
        Example: If two laptops are on the same Wi-Fi network, they can talk using MAC addresses.

    2️⃣ IP Addresses Work in WAN (Internet)

        The internet cannot use MAC addresses to send data globally.
        IP addresses are used to route traffic over different networks (WAN).

    3️⃣ IP Addresses Change, MAC Addresses Don’t

        Your MAC address never changes (unless spoofed).
        Your IP address changes every time you reconnect to a new network (privacy benefit).


📌 How Does a Router Use MAC Addresses?

    🔹 When a device connects to Wi-Fi, the router assigns it an IP address.
    🔹 The router uses the MAC address to remember which IP belongs to which device.
    🔹 Example:

    Your phone’s MAC address: 00:AA:BB:CC:DD:EE
    Router assigns IP: 192.168.1.10
    Your laptop’s MAC address: 11:22:33:44:55:66
    Router assigns IP: 192.168.1.11
    💡 This ensures correct data delivery within a local network!


📌 What About Privacy & Security Risks?

    1️⃣ Privacy Risk of MAC Addresses

        MAC addresses don’t change by default.
        Websites cannot track your MAC address (only your IP).
        However, public Wi-Fi networks can track your MAC address to identify repeat users.
        Some devices now use Randomized MAC Addresses to prevent tracking.

    2️⃣ Security Risks

        MAC Spoofing: Hackers can change their MAC address to pretend to be another device.
        IP Spoofing: Hackers can fake an IP address to hide their identity.