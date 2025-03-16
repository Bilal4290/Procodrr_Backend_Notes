📌 Handling File Upload Using Multer in Express:

    Multer is a middleware for handling multipart/form-data, which is used for file uploads. Let’s break everything down step by step.


🔹 Why Can't We Send the File Name in the Header?

    Sometimes, due to security policies or reverse proxy configurations (like in Nginx), custom headers (e.g., X-File-Name) might be stripped before reaching the server.

    ✅ Alternative Ways to Send the File Name

        ⭐ Not preferred: Sending it in the URL (e.g., /upload/:filename), but we don’t want this.
        ⭐ Using Form Data: The browser sends the file name as part of multipart/form-data.But there is a problem in form data when it comes to a server it is in the string and there is a difficulty in reading means difficult to parse 
        ⭐ Using Multer (Best Approach): Since multipart/form-data handles file names internally, we don’t have to manually send it.


🔹 What Does This Code Do?

    import multer from 'multer';
    const upload = multer({ dest: 'uploads/' });

    ✅ This initializes Multer and sets the uploads/ folder where files will be stored.
    ✅ upload is a middleware that intercepts requests containing files and processes them.


🔹 Understanding the Middleware in Express:

    app.post('/upload', upload.single('fileFieldName'), (req, res) => {
        res.json({ message: "File uploaded successfully!" });
    });

    ✅ upload.single('fileFieldName') is a middleware that processes the file upload.
    ✅ It parses the multipart/form-data, extracts the file, and stores it in req.file.
    ✅ After Multer processes the request, Express continues with the next handler ((req, res) => {}).


🔹 Getting Additional Form Fields in Multer:

    If you're sending extra data like username or email along with the file, Multer keeps it in req.body:

        console.log(req.body.username); // Gets username
        console.log(req.body.email);    // Gets email
        console.log(req.file);          // Gets file information

    📌 Multer processes file uploads and text fields from multipart/form-data.


🔹 Why Doesn't Multer Handle Image Extensions Automatically?

    By default, Multer stores files without an extension because it generates a random filename.

    📌 Fix: Use multer.diskStorage() to control file names.

    ✅ Saving Files with Original Names

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './uploads'); // Save to "uploads" folder
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname); // Keep original file name
            }
        });

        const upload = multer({ storage });

        Now, uploaded files retain their original file name, including the extension.


🔹 Handling Multiple File Uploads:

    ✅ Uploading a Single File

        app.post('/upload', upload.single('file'), (req, res) => {
            res.json({ file: req.file });
        });

        upload.single('file') → Handles one file per request.


    ✅ Uploading Multiple Files (Same Field Name)

        app.post('/upload-multiple', upload.array('files', 5), (req, res) => {
            res.json({ files: req.files });
        });
        upload.array('files', 5) → Allows up to 5 files with the same field name.


    ✅ Uploading Multiple Files with Different Field Names

        app.post('/upload-fields', upload.fields([
            { name: 'profile', maxCount: 1 }, 
            { name: 'gallery', maxCount: 10 }
        ]), (req, res) => {
            res.json({ profile: req.files.profile, gallery: req.files.gallery });
        });
        upload.fields() allows uploading files with different field names.



📌 Understanding multiple Attribute in HTML vs. maxCount in Multer:

    ✅ HTML multiple Attribute

        <input type="file" name="gallery" multiple />

        The multiple attribute allows users to select multiple files in the browser.
        However, the server must be configured to handle multiple files, or only one file will be received.

    ✅ Multer’s maxCount in upload.fields()

        upload.fields([
            { name: 'profile', maxCount: 1 }, 
            { name: 'gallery', maxCount: 10 }
        ])
        name: 'profile', maxCount: 1 → Accepts only 1 file for profile.
        name: 'gallery', maxCount: 10 → Accepts up to 10 files for gallery.

    🚀 Key Difference:

        multiple in HTML allows users to select multiple files, but it's not enough to handle multiple files in the backend.
        maxCount in Multer controls how many files the server accepts for a specific field.


🔹 Does Multer Use Streams?
    
    Yes! Multer uses streams behind the scenes for handling file uploads efficiently.
    Here’s what happens behind the scenes:

        Streaming: Multer processes the incoming file as a stream chunk by chunk, rather than loading the entire file into memory.
        Saving the File: If diskStorage is used, Multer writes the chunks directly to a file on disk.
        Processing Middleware: Once the file is fully received, Multer calls next() to pass control to the next middleware.

    This is why Multer is fast and memory-efficient—it doesn't buffer large files in memory.


🔹 Are upload.single() and upload.fields() Middlewares?

    Yes! Both upload.single() and upload.fields() are middlewares in Express.

✅ Middleware Execution in Express

    app.post('/upload', upload.single('file'), (req, res) => {
        console.log(req.file); // File is processed before this runs
        res.send("File uploaded successfully");
    });


    💡upload.single('file') is a middleware that:
        ⭐ Extracts the file from multipart/form-data
        ⭐ Saves it (if using diskStorage)
        ⭐ Stores metadata in req.file
        ⭐ Calls next() when done


🔹 When Does Multer Call next()?

    Multer calls next() only after processing the file upload:

        ⭐ When the file has been received and processed (stored in memory or saved to disk).
        ⭐ When an error occurs (e.g., file too large, invalid format).
        ⭐ If no file is uploaded and it's not required.


    ✅ Example: Understanding Middleware Flow

        app.post('/upload', upload.single('file'), (req, res, next) => {
            console.log("File processed:", req.file);
            next(); // Move to next middleware
        }, (req, res) => {
            res.send("Upload complete!");
        });


        ⭐ upload.single('file') runs first and processes the file.
        ⭐ It calls next() automatically when:
        ⭐ The file is successfully uploaded.
        ⭐ There’s no file, but it's not required.
        ⭐ There’s an error (which you can handle separately).
        ⭐ The next middleware (req, res) => {} runs after next() is called.


🔹 Why req.on('data', cb) and req.on('end', cb) Don’t Work with Multer?

    ⭐ Normally, req.on('data', cb) listens for incoming chunks of data manually.
    ⭐ However, when you use upload.single(), Multer fully processes the request body before your route handler gets control.
    ⭐ Since Multer parses multipart/form-data automatically, no raw data remains to be handled by req.on('data', cb).


🔥 Key Takeaways:

    ⭐ HTML multiple vs. Multer maxCount:

        multiple allows multiple files on the frontend.
        maxCount restricts the number of files per field in the backend.

    ⭐ Multer Uses Streams:

        It processes files chunk by chunk to avoid memory overload.
        It writes files directly to disk when using diskStorage.

    ⭐ Multer’s Middlewares (upload.single() & upload.fields())

        They extract, process, and store files before calling next().
        next() runs only after the upload completes or if an error occurs.

