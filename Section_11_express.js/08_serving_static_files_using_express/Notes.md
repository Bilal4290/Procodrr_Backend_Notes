1️⃣ What is app.use(express.static(folderName))? 📂

    👉 This middleware is used to serve static files like:

        Images 🖼️
        Videos 🎥
        PDFs 📄
        CSS
        JavaScript Files


Why Do We Need It?

    By Default, Express does not allow to access files directly from folders.

Example: If you make this folder structure:

    Project/
    │
    ├─ index.js
    └─ public/
    ├─ backend.png
    ├─ backend.mp4
    └─ backend.pdf

And make this request:

    http://192.168.100.89:3000/backend.png

    ❌ It will Not Work.

How to Fix It 🔥?

    Just write this line:

        app.use(express.static('public'))

    ✅ Now it will automatically serve the files from the public folder.


How Express Works Behind the Scenes 🔥

👉 It checks if your request URL matches any file name in the folder.

    Example: Request:

        http://192.168.100.89:3000/backend.png

Express Behind the Scenes:

    if (req.url === '/backend.png') {
        res.sendFile('/public/backend.png')
    }

How the URL is Mapped 🔑

    Request URL	    Folder Path	            File Served
    /backend.png	public/backend.png	    🖼️ Image
    /backend.mp4	public/backend.mp4	    🎥 Video
    /backend.pdf	public/backend.pdf	    📄 PDF


Why We Need Static Middleware 🔥?

    Automatic File Serving
    Security 🔑 (It only serves files from specific folders)
    Cache Control 🧠
    Performance Boost 🚀


2️⃣ Serving Video Files with res.sendFile() 🎥

    import express from 'express'
    import path from 'path'
    import { fileURLToPath } from 'url'

    const app = express()
    const port = 3000

    const __dirname = path.dirname(fileURLToPath(import.meta.url))

    app.get('/test', (req, res) => {
        res.sendFile(`${__dirname}/video.mp4`)
    })

    app.listen(port, () => {
        console.log(`Server Running on http://192.168.100.89:${port}`)
    })


What Happens When You Go to:

    http://192.168.100.89:3000/test

    👉 Your browser sends GET Request to the server
    👉 The server sends the whole video file at once using:

        res.sendFile()

    But Wait 😎...
    If your video is 1GB or 2GB, how can the browser play the video without downloading the whole file?

    Here comes the 🔥 Range Headers 🚀


3️⃣ What are Range Headers? 🔥

    👉 The browser doesn't download the whole video file at once.
    It downloads the video in chunks.

How It Works?

    First Request:

        GET /test HTTP/1.1
        Range: bytes=0-
        It means: 👉 Give me the first 0-2MB of the video.

    Server Response 🔥 The server will set these headers:

        Accept-Ranges: bytes
        Content-Range: bytes 0-2000000/5000000
        Content-Length: 2000000
        Content-Type: video/mp4


What Happens Next?

    Browser Automatically Sends New Requests:

    Range: bytes=2000000-4000000
    Range: bytes=4000000-5000000


Diagram Explanation 🎨

    Browser   ------->    Server (First Request)
                    (Range: bytes=0-2000000)
                    <------ 2MB Data

    Browser   ------->    Server (Second Request)
                    (Range: bytes=2000000-4000000)
                    <------ 2MB Data


Why This Happens?

    👉 This feature allows:

        Fast Forward ⏩
        Rewind ⏪
        Buffering


4️⃣ How Express Supports Range Headers 🔑?

    When you use:

        res.sendFile()

    Express Automatically sets:

        Accept-Ranges: bytes
        Content-Range
        Content-Length