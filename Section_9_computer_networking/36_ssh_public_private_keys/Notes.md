📌 SSH Passwordless Authentication (Public-Private Key Authentication)

    When we log in to another machine using SSH, we usually enter a username and password. However, password-based authentication is not secure because passwords can be stolen or guessed.

    That’s why SSH Key-based Authentication (also called passwordless authentication) is used, especially when working with cloud servers like AWS, DigitalOcean, or Google Cloud.


📌 How Does SSH Key-Based Authentication Work?

    Instead of using a password, SSH uses a pair of cryptographic keys:

    Public Key → Stored on the remote machine (server)
    Private Key → Stored on your local machine (client)

    💡 The server locks itself using the public key, and only the private key on the client can unlock it. Since the private key is never shared, it remains secure.


📌 Steps to Set Up Passwordless SSH Login:

    Step 1️⃣: Generate SSH Key Pair on Your Local Machine

        Run the following command in your local machine's terminal:

            ssh-keygen

        ✅ This will create two files inside the ~/.ssh/ folder:

            id_ed25519.pub → Public Key
            id_ed25519 → Private Key

        💡 Algorithm Used: ed25519 (newer, faster, and more secure than rsa).


    Step 2️⃣: Copy the Public Key to the Remote Machine
        
        The public key needs to be placed inside the remote machine’s ~/.ssh/authorized_keys file.

        Method 1: Using ssh-copy-id (Easiest)

            If you have password access to the remote machine, use:

                ssh-copy-id username@remote-ip

            ✔️ This automatically copies your public key to the correct location on the remote server.


        Method 2: Manually Copying the Key

            If ssh-copy-id is not available, copy it manually:

            1️⃣ View the public key on your local machine:

                cat ~/.ssh/id_ed25519.pub

            2️⃣ Log in to the remote machine using SSH with a password:

                ssh username@remote-ip

            3️⃣ Go to the .ssh folder on the remote machine:

                cd ~/.ssh

            4️⃣ Check if authorized_keys file exists:

                ls -a

                ✔ If it does not exist, create it:

                    touch authorized_keys

            5️⃣ Open the authorized_keys file:

                nano authorized_keys

            6️⃣ Paste the public key (from Step 1) into this file and save it:

                Press Ctrl + X → Press Y → Press Enter 7️⃣ Exit the SSH session:

                exit


    Step 3️⃣: Test the Passwordless SSH Login

        Now, on your local machine, run:

            ssh username@remote-ip

        ✅ You should log in without a password!


📌 How Does SSH Key Authentication Work?

    1️⃣ When you run ssh username@remote-ip, your client (local machine) sends a connection request to the server.
    2️⃣ The server checks if your public key is in the authorized_keys file.
    3️⃣ If the public key exists, the server:

        Encrypts a random challenge using the public key
        Sends this encrypted challenge to your client
    4️⃣ Your client uses the private key to decrypt the challenge.
    5️⃣ If decryption is successful, the server grants access.
    ✔ This ensures that only someone with the private key can log in.

    🚨 Never share your private key (id_ed25519) with anyone!


📌 If Your Private Key is in a Different Location

    If your private key is not in the default ~/.ssh/ folder (e.g., it's on your Desktop), you must specify the key path when connecting:

        ssh -i /path/to/private-key username@remote-ip

        🔹 Example:

            ssh -i ~/Desktop/my_private_key ubuntu@192.168.1.100

        ✔ This tells SSH which private key file to use for authentication.


📌 What is the known_hosts File?

    Inside ~/.ssh/, there is a file called known_hosts.
    This file stores the fingerprints of SSH servers you’ve connected to before.

    When you connect to a server, SSH checks:

    If the server is already known → If yes, it connects without warnings.
    If the server is new → It asks "Do you trust this server?" and saves its fingerprint in known_hosts.
    💡 If a server’s fingerprint changes (e.g., due to a reinstallation), you may see a security warning.


📌 Summary

    ✔ Password-based SSH logins are insecure → We use public-private key authentication instead.
    ✔ Public Key is stored on the remote server, and Private Key stays on your local machine.
    ✔ SSH encrypts the authentication process using asymmetric cryptography.
    ✔ Use ssh-keygen to generate keys and copy the public key to the server’s authorized_keys file.
    ✔ Never share your private key (id_ed25519).
    ✔ If your private key is in a different location, use ssh -i privateKeyFilePath username@ip-address.

    💡 SSH Key Authentication is essential for backend developers working with cloud servers (AWS, Google Cloud, DigitalOcean, etc.)! 🚀


