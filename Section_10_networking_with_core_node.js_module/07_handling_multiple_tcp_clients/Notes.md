📡 Sending Messages from a TCP Server to a Specific Client in Node.js:

    💡 Concept: When multiple clients connect to a TCP server, each client gets its own socket connection. The server can store these sockets in an array or object and use them later to send messages to specific clients.

🌍 1. How Clients Connect to the Server?

    When a client connects, a unique socket is created in the server’s memory for that client.

    💻 Example: Handling Multiple Clients:


        const clientsList = [];  // Stores all connected clients

        server.on('connection', (socket) => {
            console.log('A new client connected.');
            
            clientsList.push(socket);  // Store the client's socket
            
            socket.on('data', (chunk) => {
                console.log('Received:', chunk.toString());

                // Broadcast the message to all clients (including sender)
                clientsList.forEach((client) => {
                    client.write(chunk);
                });
            });

            socket.on('end', () => {
                console.log('Client disconnected.');
                clientsList.splice(clientsList.indexOf(socket), 1);  // Remove client from list
            });
        });


    🎯 Key Points:

        🖥️ Each client gets its own socket.
        📥 When a client sends data, the server receives it via socket.on('data').
        📢 The server sends the received message to all clients (broadcasting).
        ❌ When a client disconnects, remove its socket from clientsList.



📌 2. How to Send a Message from Server to a Specific Client?

    💡 Instead of storing sockets in an array (clientsList), we can store them in an object with a unique identifier (like a number or username).

    💻 Example: Storing Clients with IDs:

        
        const clients = {};  // Stores clients with unique IDs

        server.on('connection', (socket) => {
            const clientId = `Client-${Math.random().toString(36).substr(2, 6)}`;  // Unique ID
            clients[clientId] = socket;  // Store socket with ID
            console.log(`🔗 ${clientId} connected.`);

            socket.on('data', (chunk) => {
                console.log(`📩 Message from ${clientId}:`, chunk.toString());
            });

            socket.on('end', () => {
                console.log(`❌ ${clientId} disconnected.`);
                delete clients[clientId];  // Remove client from object
            });
        });


    🎯 Key Points:

        🔑 Each client is assigned a unique ID (can be random, username, or IP-based).
        🗂️ We store clients in an object { clientId: socket }.
        ❌ When a client disconnects, we remove it from the object using delete clients[clientId].



🛠️ 3. Sending Messages to a Specific Client:

    💡 The server can now send messages to any specific client using its unique ID.

    💻 Example: Sending Message to a Specific Client


            process.stdin.on('data', (input) => {
            const message = input.toString().trim();
            
            // Format: "@clientID Message"
            if (message.startsWith('@')) {
                const [targetClientId, ...messageParts] = message.split(' ');
                const targetId = targetClientId.slice(1);  // Remove '@' from ID
                const finalMessage = messageParts.join(' ');

                if (clients[targetId]) {
                    clients[targetId].write(`🎯 Private message: ${finalMessage}`);
                } else {
                    console.log('⚠️ Client not found!');
                }
            } else {
                // Broadcast to all clients
                Object.values(clients).forEach((client) => client.write(`📢 Broadcast: ${message}`));
            }
        });


        📝 How This Works?

            If input starts with @clientID, it means the server wants to send a message to that specific client.
            🗂️ Extract client ID and message from the input.
            🎯 Send the message to the correct client.
            ❌ If the client doesn’t exist, log ⚠️ Client not found!
            📢 If input does not start with @, it’s broadcasted to all clients.



🌟 4. Complete TCP Server & Client Code:

    🚀 Professional TCP Server:

        import net from 'node:net';

        const server = net.createServer();
        const clients = {};  // Store clients with unique IDs

        server.on('connection', (socket) => {
            const clientId = `Client-${Math.random().toString(36).substr(2, 6)}`;
            clients[clientId] = socket;
            console.log(`🔗 ${clientId} connected.`);

            socket.write(`🎉 Welcome ${clientId}! You can send messages now.`);

            socket.on('data', (chunk) => {
                console.log(`📩 Message from ${clientId}:`, chunk.toString());
            });

            socket.on('end', () => {
                console.log(`❌ ${clientId} disconnected.`);
                delete clients[clientId];
            });
        });

        // Handle server messages to clients
        process.stdin.on('data', (input) => {
            const message = input.toString().trim();

            if (message.startsWith('@')) {
                const [targetClientId, ...messageParts] = message.split(' ');
                const targetId = targetClientId.slice(1);
                const finalMessage = messageParts.join(' ');

                if (clients[targetId]) {
                    clients[targetId].write(`🎯 Private message: ${finalMessage}`);
                } else {
                    console.log('⚠️ Client not found!');
                }
            } else {
                Object.values(clients).forEach((client) => client.write(`📢 Broadcast: ${message}`));
            }
        });

        server.listen(4000, () => console.log('🚀 Server running on port 4000'));



💻 Professional TCP Client:


        import net from 'node:net';

        const client = net.createConnection({ port: 4000, host: '127.0.0.1' });

        client.on('connect', () => {
            console.log('✅ Connected to the server!');
            console.log('💬 Type your messages below:');
        });

        client.on('data', (chunk) => {
            console.log('📩 Server:', chunk.toString());
        });

        // Send messages from terminal
        process.stdin.on('data', (terminalInput) => {
            client.write(terminalInput.toString().trim());
        });

        client.on('error', (err) => {
            console.error('❌ Error:', err.message);
        });

        client.on('end', () => {
            console.log('🔌 Disconnected from server.');
        });


🔹 5. Summary:

    ✔️ Multiple clients can connect to a single TCP server.
    ✔️ Each client gets a unique socket and is stored in an object (clients).
    ✔️ The server can send a message to all clients (broadcast) or a specific client using @clientID message.
    ✔️ When a client disconnects, its socket is removed from memory.
    ✔️ Messages can be sent from the terminal using process.stdin.

    🔥 Now you can build a real-time chat application or even a basic TCP-based messaging system! 🚀

