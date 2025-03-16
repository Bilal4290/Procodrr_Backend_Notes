📌 Why UDP is Not Suitable for File Transfer:

    UDP is a connectionless, unreliable protocol, meaning:

        ⭐ No guarantee of delivery → Some packets may get lost.
        ⭐ No built-in order handling → Packets may arrive out of order.
        ⭐ No automatic error correction → Corrupted packets aren't resent.

    Since file transfer requires accuracy, UDP must use extra logic (manual checksums, sequence numbers, retransmission logic) to ensure files arrive correctly.


📌 Understanding UDP Packet Size Limits:

    UDP packets have a size limit because of MTU (Maximum Transmission Unit):

        Ethernet MTU → 1500 bytes (includes headers).
        IP Header → 20 bytes (IPv4) or 40 bytes (IPv6).
        UDP Header → 8 bytes.
        Remaining data per packet:
            IPv4 UDP Payload → 1472 bytes (1500 - 20 - 8)
            IPv6 UDP Payload → 1452 bytes (1500 - 40 - 8)

    🔹 If a UDP packet exceeds this limit, it gets fragmented (split into smaller packets), which increases the chances of packet loss and corruption.


📌 Correcting Your File Transfer Approach:

    ❌ Wrong Method:

        ⭐ Using fs.readFile() or fs.writeFile() to load the entire file into memory is inefficient for large files.
        ⭐ UDP drops large packets exceeding MTU (1472 bytes).
        ⭐ Solution → Use streams to read and write data in chunks.



📌 Correct UDP File Transfer Using Streams:

    We'll break this into Client (Sender) and Server (Receiver).

    🔹 Client (Sender):

        ⭐ Use fs.createReadStream() to read the file in chunks.
        ⭐ Set highWaterMark to 1000 bytes (less than 1472 bytes for safety).
        ⭐ Send each chunk using socket.send().

        📌 How the Progress Bar Works:

            ⭐ Get the file size → We need to track the total bytes in the file.
            ⭐ Update progress → As chunks are sent, we update the progress bar.
            ⭐ Complete bar on EOF → When the file is fully sent, mark the transfer as complete.

            🔹 Install Dependencies:

                Before running the script, install the cli-progress package:

                    npm install cli-progress


        🔹 client.js File:

            import dgram from 'node:dgram';
            import { createReadStream, stat } from 'node:fs';
            import cliProgress from 'cli-progress';

            const socket = dgram.createSocket('udp4');

            const PORT = 4000;
            const IP_ADDRESS = '127.0.0.1';
            const FILE_PATH = 'largeFile.txt';
            const CHUNK_SIZE = 1000; // Must be less than 1472 bytes for UDP safety

            // Get the total file size for the progress bar
            stat(FILE_PATH, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }

            const fileSize = stats.size;
            let bytesSent = 0;

            // Initialize CLI Progress Bar
            const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
            progressBar.start(fileSize, 0);

            const readStream = createReadStream(FILE_PATH, { highWaterMark: CHUNK_SIZE });

            readStream.on('data', (chunk) => {
                socket.send(chunk, PORT, IP_ADDRESS, (err) => {
                    if (err) {
                        console.error('Error sending chunk:', err);
                    } else {
                        bytesSent += chunk.length;
                        progressBar.update(bytesSent);
                    }
                });
            });

            readStream.on('end', () => {
                socket.send('EOF', PORT, IP_ADDRESS, () => {
                    console.log('\nFile transfer completed.');
                    progressBar.stop();
                    socket.close();
                });
            });
        });



    🔹 Server (Receiver):

        Use fs.createWriteStream() to write the received chunks to a file.
        When receiving EOF, close the stream.


        🔹 server.js File:


            import dgram from 'node:dgram';
            import { createWriteStream } from 'node:fs';

            const socket = dgram.createSocket('udp4');

            const PORT = 4000;
            const OUTPUT_FILE = 'receivedFile.txt';

            let writeStream = createWriteStream(OUTPUT_FILE);

            socket.on('message', (chunk, remote) => {

                if (chunk.toString() === 'EOF') {
                    console.log('File transfer complete.');
                    writeStream.end();
                } else {
                    writeStream.write(chunk);
                }
            });

            socket.bind(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
            });




📌 Conclusion:

    UDP file transfer is possible but requires extra handling.
    Use streams to send files in chunks (≤ 1472 bytes).
    Signal EOF to indicate file transfer completion.
    Be careful with UDP packet size (avoid fragmentation).
    UDP file transfer is still unreliable compared to TCP-based methods like FTP or HTTP.



