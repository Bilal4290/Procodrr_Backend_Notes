📌 Creating Directories in Express.js (📂 File Storage App):

    In an Express.js application, you can create directories (folders) dynamically using the fs module. Let's cover:
        ✅ Creating a single-level directory
        ✅ Creating a multi-level (nested) directory
        ✅ Handling errors properly

1️⃣ Import Required Modules

    import express from 'express';
    import cors from 'cors';
    import { mkdir } from 'node:fs/promises';

    const app = express();
    const PORT = 4000;

    // Enable CORS
    app.use(cors());
    app.use(express.json());

    mkdir → Creates directories.
    { recursive: true } → Allows nested directories.


2️⃣ Create a Directory (Single & Multi-Level)

    app.post('/directory/*', async (req, res) => {
        const { 0: dirPath } = req.params;  // Capture the directory path
        const fullDirPath = `${import.meta.dirname}/public/${dirPath}`;

        try {
            await mkdir(fullDirPath, { recursive: true });  // Create the directory (including nested)
            res.send(`✅ Directory "${dirPath}" created successfully!`);
        } catch (error) {
            res.status(500).send(`❌ Error: ${error.message}`);
        }
    });


3️⃣ Explanation 🔍

    ✅ mkdir(fullDirPath, { recursive: true }) → Creates a directory. If parent folders don’t exist, they are created automatically.
    ✅ Uses * in route → Supports multi-level nested directory creation.
    ✅ Handles errors → If the folder already exists, it won’t throw an error.