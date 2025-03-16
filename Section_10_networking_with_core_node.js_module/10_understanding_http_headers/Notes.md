🌐 Understanding HTTP Response Headers in TCP Servers (Node.js)

    HTTP responses consist of two parts:
        1️⃣ Response Headers 🏷️ → Metadata (e.g., status, content-type, CORS policies).
        2️⃣ Response Body 📦 → The actual data (HTML, JSON, video, etc.).


📜 Setting Response Headers in a TCP Server:

    ⭐ In Node.js (using the net module), we manually construct the HTTP response.
    ⭐ Each header must be written before the blank line (\r\n\r\n), which separates headers from the actual data.


✅ Example: Sending Headers Properly:

    socket.write('HTTP/1.1 200 OK\r\n');                            // HTTP version & status code
    socket.write('Access-Control-Allow-Origin: *\r\n');            // Allow all origins
    socket.write('Access-Control-Expose-Headers: *\r\n');         // Allow JS to see all headers
    socket.write('Content-Type: text/plain\r\n');                // Specify content type
    socket.write('Content-Length: 5\r\n');                      // Specify content length
    socket.write('\r\n');                                      // End of headers
    socket.write('Hello');                                    // Actual response body
    socket.end();


    🛑 Common Mistakes & Fixes:

        ❌ Wrong Line Breaks (\n Instead of \r\n)

            socket.write('HTTP/1.1 200 OK\nAccess-Control-Allow-Origin:*\n\nHello');

        ✅ Correct: Use \r\n for HTTP Compliance

            socket.write('HTTP/1.1 200 OK\r\nAccess-Control-Allow-Origin: *\r\n\r\nHello');


🔍 How to Read Headers in JavaScript:

    Once the server sends headers, we can read them in the browser using fetch().

        const response = await fetch('http://127.0.0.1:4000');
        response.headers.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });

    🚨 By Default, Browsers Restrict Access to Some Headers:

        Browsers hide sensitive headers like Authorization. To expose them, we must set:

             Access-Control-Expose-Headers: *


🎯 Best Practices for Writing Headers:

    Instead of writing headers line by line, use a template string for cleaner code:


    const headers = [
        'HTTP/1.1 200 OK',
        'Access-Control-Allow-Origin: *',
        'Access-Control-Expose-Headers: *',
        'Content-Type: text/plain',
        'Content-Length: 5',
        '', // Empty line to separate headers from body
    ].join('\r\n'); // Join with proper line breaks

    socket.write(headers);
    socket.write('Hello');
    socket.end();


📊 Diagram: HTTP Response Breakdown:

    🖥️ TCP Server                    🌐 Browser (Client)
    ─────────────────────            ────────────────────
    📩 Receive HTTP GET             🔗 Connects via TCP
    📤 Send HTTP Response:
    ┌──────────────────────────┐
    │ HTTP/1.1 200 OK          │  ⬅ Response Status
    │ Access-Control-Allow-Origin: * │  ⬅ CORS Policy
    │ Access-Control-Expose-Headers: * │  ⬅ JS can see headers
    │ Content-Type: text/plain    │  ⬅ Tells browser content type
    │ Content-Length: 5           │  ⬅ Tells browser data size
    │                              │  
    │ Hello                        │  ⬅ Actual Response Body
    └──────────────────────────┘
    
   📥 Browser Receives Response


🚀 Final Thoughts:

    ✔ Always use \r\n for HTTP compliance
    ✔ Separate headers from the body using \r\n\r\n
    ✔ Set Access-Control-Expose-Headers to allow JS access to headers
    ✔ Use fetch().headers.forEach(...) to read headers in the browser