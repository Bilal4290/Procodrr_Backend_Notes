📌 Managing Multiple SSH Servers with a Config File

    When you connect to multiple SSH servers, manually typing the IP address, username, and private key path every time can be inconvenient. To simplify this, we create an SSH config file inside the ~/.ssh/ folder.


📌 What is an SSH Config File?

    The SSH config file allows you to store SSH connection settings in one place so that you can connect to different servers using short, easy-to-remember names.

    📌 Where to Create the SSH Config File?

    1️⃣ Open your terminal and navigate to the ~/.ssh/ folder:

        cd ~/.ssh

    2️⃣ Create (or edit if it already exists) the config file:

        nano config

    3️⃣ Inside the config file, add your SSH server details in the following format:

        Host server1
            HostName 192.168.1.100
            User ubuntu
            IdentityFile ~/.ssh/id_ed25519

        Host server2
            HostName 203.0.113.50
            User root
            IdentityFile ~/.ssh/aws_key.pem

    4️⃣ Save and exit the file:

        Press Ctrl + X
        Press Y (Yes)
        Press Enter


    📌 Explanation of Config File Entries

        Field	            Description
        Host	A nickname for your SSH connection. You can use this short name instead of typing the full IP address.
        HostName	The actual IP address (or domain) of the remote server.
        User	The username used to connect (e.g., ubuntu, root).
        IdentityFile	The path to the private key that matches the public key on the server.