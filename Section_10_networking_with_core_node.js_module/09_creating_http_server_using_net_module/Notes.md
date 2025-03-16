🌐 Creating an HTTP Server Using the net Module in Node.js

    The net module in Node.js allows us to create low-level TCP servers. Since HTTP is a protocol that runs on top of TCP, we can manually handle HTTP requests and responses without using the http module.


🏗 How HTTP Over TCP Works:

    1️⃣ Client (Browser) connects to the TCP server via port 4000.
    2️⃣ Client sends an HTTP request (like GET / HTTP/1.1).
    3️⃣ Server reads the request, processes it, and sends an HTTP response with headers and body.
    4️⃣ If the response is a file, the server streams the file in chunks.
    5️⃣ When the transfer is complete, the server closes the connection.


📝 Corrected & Optimized Code:

    import net from 'node:net'
    import {createReadStream, stat} from 'node:fs'


    const PORT=4000;
    const FILE_PATH='D:\\Sigma\\ASP\\Backend_ASP\\practice_server\\story-109bf5154e4516e71ff961e3bf3610c4.mp4'


    const server = net.createServer((socket) => {

          console.log(`Client connected: ${socket.remoteAddress}`);

          stat(FILE_PATH,(err,stats) => {

              if(err){
                 console.error('File Error:',err)
                 socket.write('HTTP\1.1 404 Not Found \r\n\r\n')
                 socket.end()
                 return
              }

              const size = stats.size

              const RES_HEADERS=[
                'HTTP/1.1 200 OK',
                `Content-Length: ${size}`,
                'Content-Type: video/mp4',
                'Content-disposition: attachment; filename="story.mp4',
                '',
                ''
              ].join('\r\n')

              socket.write(RES_HEADERS)

              const readStream = createReadStream(FILE_PATH)
              readStream.pipe(socket)

              readStream.on('end',() => {
                console.log('File Completed.')
                socket.end()
              })

              readStream.on('error', (err) => {
                console.error('❌ File read error:', err);
                socket.end();
              });

          })

          socket.on('data',(chunk) => {
            console.log(chunk.toString())
          })

          socket.on('error',(err) => {
               if(err.code === 'ECONNRESET'){
                   console.warn('Client disconnected abruptly.')
               }else{
                   console.error('Socket Error:',err)
               }
          })

          socket.on('close',() => {
            console.log('Socket is closed.')
          })

    })


    server.listen(PORT,() => {
        console.log(`Server is running on port ${PORT}`)
    })



📊 Diagram of HTTP Over TCP:

    🖥 Client (Browser)               🌍 Server (TCP)
    ────────────────────              ────────────────────
    🔗 Connect to TCP  ───────────▶  📡 Server Accepts Connection
    📩 Send HTTP GET  ───────────▶  📤 Read Request
    ⏳ Wait for Response            📄 Read File (Stream)
    📥 Receive Response  ◀─────────  📩 Send HTTP Headers
    📥 Stream File  ◀──────────────  📤 Stream File Chunks
    ✅ File Loaded                    ✅ Close Connection



🎯 Key Concepts & Best Practices:

    📌 1. HTTP Works on a Request-Response Cycle:

        ⭐ A browser first establishes a TCP connection.
        ⭐ It then sends an HTTP request (e.g., GET / HTTP/1.1).
        ⭐ The server processes the request and sends an HTTP response.


    📌 2. HTTP Response Structure:

        ⭐ Headers (metadata: content type, length, etc.).
        ⭐ Body (actual file content).

    Example of an HTTP response:

        HTTP/1.1 200 OK
        Content-Type: video/mp4
        Content-Length: 12345678
        Connection: close

        [Binary File Data]

        
    📌 3. Why Use Streams?

        ✅ Efficient: Streams handle large files without loading everything into memory.
        ✅ Non-blocking: The server continues running while sending the file in chunks.


    📌 4. fetch() Handles Streams Automatically:

        The browser automatically processes streams, meaning it will start rendering video or images before the file is fully downloaded.

        Example:

            const response = await fetch('http://127.0.0.1:4000');
            for await (const chunk of response.body) {
                console.log(chunk);
            }
            response.body is a readable stream that can be processed chunk by chunk.


🔥 Final Thoughts:

    ✅ This approach allows you to serve static files (like videos) over TCP manually.
    ✅ The browser will stream the file smoothly because we are using HTTP headers correctly.
    ✅ Streams ensure optimal memory usage.