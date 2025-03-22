🚀 Starting MongoDB Server on IPv6 Address:

    By default, MongoDB listens on IPv4 (127.0.0.1). If you want MongoDB to run on an IPv6 address, you need to modify the configuration file (mongod.cfg) or use command-line options.

    🔹 Enable IPv6 in mongod.cfg:
            
        You need to edit the mongod.cfg file and add the following settings:

            net:
                bindIp: "::1"      # Use "::1" for localhost (IPv6) or specific IPv6 address
                ipv6: true         # Enable IPv6 support
                port: 27017        # MongoDB default port

        📌 Explanation:

            bindIp: "::1" → Binds MongoDB to IPv6 localhost (::1) or a specific IPv6 address.

            ipv6: true → Enables IPv6 support.

            port: 27017 → Ensures MongoDB runs on its default port.