🚀 Controlling Data Transfer Speed in Node.js (TCP Sockets):

    When transferring large files over TCP using the net module, uncontrolled streaming can lead to issues like network congestion, buffering, or overwhelming the client.

    To control data transfer speed, we can use:

        ✅ Control stream flow (pause() and resume())
        ✅ Use a throttling package like streamThrottle


📌 1️⃣ Controlling Stream Flow (pause() & resume()):

        Node.js streams support backpressure, meaning we can pause and resume data flow dynamically.

        ✅ Example: Throttling Using pause() and resume()

        import net from 'node:net';
        import { createReadStream, stat } from 'node:fs';

        const PORT = 4000;
        const FILE_PATH = 'D:\\Sigma\\ASP\\Backend_ASP\\practice_server\\story-109bf5154e4516e71ff961e3bf3610c4.mp4';

        const server = net.createServer((socket) => {
            console.log(`📡 Client connected: ${socket.remoteAddress}`);

            let isSocketClosed = false;

            // Get file size
            stat(FILE_PATH, (err, stats) => {
                if (err) {
                    console.error('❌ File Error:', err);
                    socket.write('HTTP/1.1 404 Not Found\r\n\r\n');
                    socket.end();
                    return;
                }

                const size = stats.size;
                const RES_HEADERS = [
                    'HTTP/1.1 200 OK',
                    `Content-Length: ${size}`,
                    'Content-Type: video/mp4',
                    'Content-Disposition: attachment; filename="story.mp4"',
                    '',
                    '',
                ].join('\r\n');

                // Send headers first
                socket.write(RES_HEADERS, () => {
                    console.log('📨 Headers sent, starting file transfer...');
                    const readStream = createReadStream(FILE_PATH);

                    readStream.on('data', (chunk) => {
                        if (!isSocketClosed) {
                            const isBufferFull = socket.write(chunk);
                            if (!isBufferFull) {
                                socket.pause();
                            }
                        }
                });

                    // Resume socket when drain event occurs
                    socket.on('drain', () => {
                        if (!isSocketClosed) {
                            socket.resume();
                        }
                    });

                    readStream.on('end', () => {
                        console.log('✅ File transfer completed');
                        readStream.destroy(); // Close file stream
                        socket.end();
                    });

                    readStream.on('error', (err) => {
                        if (!isSocketClosed) {
                            console.error('❌ File read error:', err.message);
                            socket.end();
                        }
                    });
                });
            });

            // Handle incoming data (debugging purpose)
            socket.on('data', (chunk) => {
                console.log(chunk.toString());
            });

            // Handle socket errors
            socket.on('error', (err) => {
                if (err.code === 'ECONNRESET') {
                    console.warn('⚠️ Client disconnected abruptly');
                } else if (err.code === 'EPIPE') {
                    console.warn('⚠️ Tried to write to a closed socket');
                } else {
                    console.error('❌ Socket Error:', err.message);
                }
                isSocketClosed = true;
            });

            // Handle socket close
            socket.on('close', () => {
                console.log('🔌 Socket is closed.');
                isSocketClosed = true;
            });
        });

        server.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });



📌 2️⃣ Using a Throttling Library (stream-throttle):

        For more precise speed control, we can use the stream-throttle package.

        ✅ Install the package
        
            npm install stream-throttle

        ✅ Example: Using ThrottledStream for Bandwidth Control
       
            import net from 'net';
            import { createReadStream } from 'fs';
            import { Throttle } from 'stream-throttle';

            const server = net.createServer((socket) => {
                console.log(`📡 Client connected: ${socket.remoteAddress}`);

                const fileStream = createReadStream('large_file.mp4');
                
                const throttle = new Throttle({ rate: 1024 * 50 }); // 50 KB/s

                fileStream.pipe(throttle).pipe(socket);

                fileStream.on('end', () => {
                    console.log('✅ File transfer complete.');
                    socket.end();
                });

                socket.on('close', () => console.log('🔌 Client disconnected.'));
            });

            server.listen(4000, () => console.log('🚀 Server running on port 4000'));


        📌 How It Works?

            Throttle({ rate: 1024 * 50 }) limits speed to 50 KB/s.
            Uses Node.js stream.pipe() mechanism, making it efficient.

        🚀 Advantages:
        
            ✅ Precise speed control (unlike setInterval()).
            ✅ No manual buffering required.
            ✅ Simple and reliable.


