📌 What is SSH (Secure Shell)?

    SSH (Secure Shell) is a protocol that allows secure remote access to another computer or server over the internet. It provides encryption and authentication to ensure secure communication.

    Before SSH, we used Telnet, which was not secure because it sent data in plain text. SSH encrypts the data, making it safe from hackers.


📌 Why is SSH Important?

    As a backend developer, SSH is essential because:
    ✅ It allows secure remote access to servers (like AWS, DigitalOcean, etc.).
    ✅ You can run commands on a remote server from your own computer.
    ✅ It is needed for deploying applications on cloud servers.
    ✅ You can transfer files securely using SCP (Secure Copy Protocol) or SFTP (Secure File Transfer Protocol).


📌 SSH as a Protocol and Command-Line Tool:

    SSH has two meanings:
    1️⃣ SSH as a Protocol → A set of rules (built on TCP) that allows secure remote communication.
    2️⃣ SSH as a Command-Line Tool → A program that lets you connect to a remote machine.


📌 How SSH Works?

    SSH follows a client-server model, just like HTTP:

    SSH Client → The system from which you access a remote server.
    SSH Server → The system you want to connect to.
    
    Example:
    If you use your terminal to access an AWS server, then:
    💻 Your computer (Terminal) = SSH Client
    🖥️ AWS Server = SSH Server

    For SSH to work:
    ✔ The SSH server must be running on the remote machine.
    ✔ The firewall must allow SSH connections (port 22).


📌 Checking SSH Client on Windows:

    SSH client is installed by default on Windows. To check:
    1️⃣ Go to Settings → System → Optional Features
    2️⃣ Search for SSH Client

    Check SSH Version:   ssh -V
    This shows the installed SSH version.



📌 Checking and Installing SSH on Linux:

    Check if SSH Client is Installed:   
        
            dpkg -l | grep openssh-client

        If not installed, install it using:

            sudo apt update 
            sudo apt install openssh-client 

    Check if SSH Server is Installed:

            dpkg -l | grep openssh-server

        If not installed, install it using:

            sudo apt update
            sudo apt install openssh-server


📌 Starting and Managing SSH Server:

    Check if SSH Server is Running:

        sudo systemctl status ssh

    If not running, start the SSH server:

        sudo systemctl start ssh 

    Enable SSH to Start on Boot:

        sudo systemctl enable ssh


📌 Allowing SSH in the Firewall:

    SSH uses port 22 by default. If the firewall blocks it, enable access:

        sudo ufw allow ssh
    
    Then, check the firewall status:

        sudo ufw status 


📌 Finding the IP Address & Username:

    Before connecting via SSH, you need:

        1️⃣ The remote system’s IP address:        hostname -I        
        2️⃣ The username on the remote system:     whoami


📌 Connecting to a Remote Server Using SSH:

    Once you have the IP address and username, connect using:

        ssh userName@ip-address

        username   =  Your remote machine’s username
        ip-address =  IP address or hostname of the remote machine

    🔹 It will ask for a password → This is the password of the remote system’s user account.
    🔹 Once connected, you are inside the remote machine’s terminal! 🎉


📌 Exiting SSH:

    To disconnect from the SSH session, use:

        logout

    or

        exit


📌 Summary:

    ✔ SSH is a secure protocol for remote access
    ✔ It encrypts communication (unlike Telnet)
    ✔ SSH follows a client-server model
    ✔ Used for accessing and managing remote servers
    ✔ Runs on TCP port 22
    ✔ SSH client is pre-installed in Windows, Linux, and macOS
    ✔ Allows file transfer via SCP & SFTP
    ✔ Essential for backend developers working with cloud servers

    💡 Without SSH, managing remote servers securely would be a nightmare! 🚀
        

