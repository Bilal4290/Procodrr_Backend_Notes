📂 Transferring Files Using TCP in Node.js:

    TCP (Transmission Control Protocol) is a connection-oriented protocol used for reliable data transfer. In Node.js, we can use the built-in net module to create a TCP server and client to transfer files.

🏗 How It Works:

    Server Listens 👂: The server listens for incoming client connections.
    Client Connects 🔌: The client establishes a TCP connection.
    File Read & Send 📤: The client reads a file and sends it in chunks.
    Server Receives & Writes 📥: The server receives the file and writes it to disk.

🖥 Code Implementation:

    1️⃣ TCP Server (Receiver):

        const net = require('net');
        const fs = require('fs');

        const server = net.createServer((socket) => {
            console.log('📡 Client connected');

            const writeStream = fs.createWriteStream('received_file.txt'); // Destination file
            socket.pipe(writeStream); // Pipe the incoming data to the file

            socket.on('end', () => {
                console.log('✅ File received successfully');
            });

            socket.on('error', (err) => {
                console.error('❌ Error:', err);
            });
        });

        server.listen(5000, () => {
            console.log('🚀 Server listening on port 5000');
        });


    2️⃣ TCP Client (Sender):

        const net = require('net');
        const fs = require('fs');

        const client = new net.Socket();
        const fileStream = fs.createReadStream('file_to_send.txt'); // File to send

        client.connect(5000, '127.0.0.1', () => {
            console.log('🔗 Connected to server');
            fileStream.pipe(client); // Send the file
        });

        fileStream.on('end', () => {
            console.log('📨 File sent successfully');
            client.end(); // Close connection
        });

        client.on('error', (err) => {
            console.error('❌ Error:', err);
        });


    🏆 Best Practices:

        Use Streams 🚀

            Streams are efficient for large files, preventing memory overflow.

        Error Handling ⚠

            Always handle error events on sockets and file streams.

        Chunk-Based Transmission 📦

            Use socket.write() to send data in chunks instead of a single send.

        Security Measures 🔐

            Implement TLS encryption using the tls module.
            Validate client connections to prevent unauthorized access.

        Compression 🗜

            Use zlib to compress files before transmission to save bandwidth.

        Logging 📜

            Use a logging library like winston for structured logs.


📊 Industry-Grade Code Example:

    Here's how a real-world implementation with chunk-based transfer and error handling would look:

    🔹 TCP Server (Efficient)
        
        const net = require('net');
        const fs = require('fs');

        const server = net.createServer((socket) => {
            console.log('📡 Client connected');

            const fileStream = fs.createWriteStream('received_file.txt');
            
            socket.on('data', (chunk) => {
                fileStream.write(chunk); // Writing received data in chunks
            });

            socket.on('end', () => {
                console.log('✅ File transfer complete');
                fileStream.end();
            });

            socket.on('error', (err) => {
                console.error('❌ Error:', err);
            });
        });

        server.listen(5000, () => {
            console.log('🚀 Server running on port 5000');
        });


    🔹 TCP Client (Chunk-Based)
        
        const net = require('net');
        const fs = require('fs');

        const client = new net.Socket();
        const fileStream = fs.createReadStream('file_to_send.txt');

        client.connect(5000, '127.0.0.1', () => {
            console.log('🔗 Connected to server');

            fileStream.on('data', (chunk) => {
                client.write(chunk); // Sending data in chunks
            });

            fileStream.on('end', () => {
                console.log('📨 File sent successfully');
                client.end();
            });

            client.on('error', (err) => {
                console.error('❌ Error:', err);
            });
        });


🎨 Diagram of TCP File Transfer:

   
    Client (Sender)                        Server (Receiver)
    ──────────────                         ────────────────
    📄 Read file  ────▶  📤 Send chunks  ───▶  📥 Receive chunks
    🗄 File Stream      🔗 TCP Connection      🗄 Write to File
    📤 Send more       🔁 Repeat Until Done  ✅ Save Successfully


🚀 Final Thoughts:

    ✅ TCP in Node.js is great for reliable and stream-based file transfers.
    🔒 Security and error handling are critical in production.
    📦 Consider compression and chunk-based streaming for efficiency.