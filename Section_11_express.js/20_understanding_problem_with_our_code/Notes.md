🚀 Improving Our File Storage System: Flattened Directory & JSON-based Metadata:

    A nested directory structure is inefficient and becomes a performance bottleneck when:

        Readdir is slow 📉 (it doesn't scale with thousands of files).
        Handling nested folders becomes complex.
        Multiple users 🧑‍🤝‍🧑 uploading files creates a mess.
        Security risks ⚠️ arise when users control directories.


✅ Solution: Flattened Directory + JSON Metadata:

    🔹 Instead of storing folders inside folders, store all files in one directory and track relationships in JSON (or a future database).

📂 Folder Structure

    📁 project-folder
    ├── 📁 storage   ➝ (All files stored here, no subfolders)
    │   ├── abc123-file.png
    │   ├── xyz789-document.pdf
    ├── 📄 filesDB.json    ➝ (Stores metadata of files)
    ├── 📄 foldersDB.json  ➝ (Stores metadata of folders)
    ├── 📄 server.js

🚀 Now:

    The storage folder contains only files (no subdirectories).
    Metadata (name, size, directory ID, etc.) is stored in JSON.
    No risk of directory traversal 🚫 (Users can’t manipulate paths).


📌 1️⃣ Storing File Metadata in filesDB.json:

    Instead of storing files inside folders, we store metadata:

        [
            {
                "id": 1,
                "name": "test.png",
                "size": 678,
                "dirID": 37,
                "path": "abc123-test.png"
            },
            {
                "id": 2,
                "name": "download.png",
                "size": 6908,
                "dirID": 37,
                "path": "xyz789-download.png"
            }
        ]

    id → Unique identifier for each file.
    name → Original file name.
    size → File size.
    dirID → Maps to a folder ID in foldersDB.json.
    path → Actual filename in the storage folder (generated to prevent name conflicts).


📌 2️⃣ Storing Folder Metadata in foldersDB.json

    [
        {
            "id": 1,
            "name": "Projects",
            "parentDirID": 0,
            "content": {
                "files": [67, 45],  
                "directories": [4, 3, 5]
            }
        }
    ]

    id → Unique identifier for folders.
    name → Folder name.
    parentDirID → ID of the parent folder (0 for root).
    content.files → IDs of files inside the folder.
    content.directories → IDs of subfolders (no real subfolders, just references).


