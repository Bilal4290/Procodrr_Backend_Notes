📌 What is SCP (Secure Copy Protocol)?

    SCP (Secure Copy Protocol) is a command-line tool used to securely transfer files and directories between two machines over SSH.

    It is automatically installed when SSH client is installed on your system.

📌 Why Do We Need SCP?

    ✅ Secure File Transfer → Uses SSH encryption, making it more secure than FTP.
    ✅ Fast and Reliable → Transfers files quickly over the network.
    ✅ Remote to Local & Local to Remote → You can transfer files both ways.
    ✅ No Extra Setup → Works as long as SSH is enabled on the remote machine.


📌 How to Use SCP (Secure Copy Protocol)?

    The basic SCP command syntax:

        scp [options] source destination


📌 Transfer Files Between Machines:

    1️⃣ Copy a File from Local to Remote Machine:

        scp myfile.txt username@remote-ip:/path/to/destination

            ✔ myfile.txt → File to transfer
            ✔ ubuntu → Username of the remote system
            ✔ 192.168.1.100 → IP address of the remote system
            ✔ /home/ubuntu/ → Destination path where the file will be saved

        After running this command, it will ask for the SSH password, and the file will be transferred.


    2️⃣ Copy a File from Remote to Local Machine:

        scp username@remote-ip:/path/to/remote-file /path/to/local/destination

            ✔ Transfers myfile.txt from the remote machine to your local system.

    
    3️⃣ Copy a Folder from Local to Remote Machine:

        🚀 SCP cannot directly copy folders, so we use -r (recursive) to copy directories.

            scp -r myfolder username@remote-ip:/path/to/destination

            ✔ Copies the entire myproject folder to the remote machine.

    
    4️⃣ Copy a Folder from Remote to Local Machine:

        scp -r username@remote-ip:/path/to/remote-folder /path/to/local-destination

        ✔ Transfers the myproject folder to your local system.


📌 Compressing (Zipping) a Folder Before Transfer:

    Before transferring large directories, it’s best to compress them into a .zip or .tar.gz file to save bandwidth.

    1️⃣ Zip a Folder in Linux:

        zip -r myfolder.zip myfolder

        ✔ This creates a compressed file named myfolder.zip containing all files inside myfolder.

    2️⃣ Transfer the Zipped File Using SCP:

        scp myfolder.zip username@remote-ip:/home/ubuntu/

    3️⃣ Unzip the Folder on the Remote Machine:

        Once the file is transferred, log in to the remote machine using SSH:

            ssh username@remote-ip

        Then, unzip the file:

            unzip myfolder.zip

        ✔ Extracts the contents of myfolder.zip into a folder named myfolder.