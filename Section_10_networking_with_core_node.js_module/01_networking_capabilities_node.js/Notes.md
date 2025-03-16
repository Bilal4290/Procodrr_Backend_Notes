🔹 How Node.js Interacts with the Operating System

    1. Built on libuv:

        Libuv is a C library that provides Node.js access to system-level operations like networking, file handling, and event-driven I/O.
        This allows Node.js to handle networking, system calls, timers, and async operations efficiently.

    2. Uses OS APIs via Node.js Core Modules

        Node.js has built-in modules that interact with the OS, such as:
        
            os → Provides OS information (e.g., network interfaces, CPU info).
            fs → Accesses the file system.
            child_process → Runs system commands.
            dgram → Handles UDP communication.
            net → Handles TCP communication.

    3. Access to Networking Interfaces (os.networkInterfaces())

        The os.networkInterfaces() method retrieves the list of available network interfaces (Wi-Fi, Ethernet, etc.).
        This works because Node.js uses OS system calls to fetch network interface details.

          import os from 'node:os';
          console.log(os.networkInterfaces());



🔹 Summary:

    Node.js is a powerful tool for making network applications.
    With node.js we donot make only http servers, we also make tcp udp web sockets server.
    Node.js networking modules are:
        1. dgram module also called datagram module 
        2. net module
        3. dns module
        4. http or https module 
         
    With datagram module we can make udp servers and udp clients and communicate two devices which support udp server.
    UDP full form is user datagram protocol.

    With net module we can make tcp application a tcp client and a tcp server and communicate two devices which support tcp.
    
    Browsers directly donot support tcp, browser only support http or https protocol but http protocol is made on net module.
    
    With node js we can see networking interfaces using os module, first we have to import os from node:os then
    os.networkInterfaces() which means node.js has access of operating system.