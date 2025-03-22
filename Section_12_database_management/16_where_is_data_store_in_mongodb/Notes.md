📌 Where is Data Stored in MongoDB?

    Yes! By default, MongoDB stores data in the db folder located inside the data folder in the root directory (/data/db).

    📍 Default Data Storage Location:

        🔵 Linux/macOS: /data/db

        🔵 Windows: C:\data\db (or sometimes inside C:\Program Files\MongoDB\Server\{version}\data\db)

    
🔹 Custom Data Storage Location:

    You can change the MongoDB data storage location by specifying a custom path using the --dbpath option.

    ✅ Command to Start MongoDB with a Custom Data Folder:

        mongod --dbpath "C:\my_custom_data"

    👉 This tells MongoDB to store all data inside "C:\my_custom_data" instead of the default path.


🔹 MongoDB Backup (Creating a Backup Folder):

    You can back up your MongoDB data by zipping the original MongoDB folder or using MongoDB’s built-in backup tools.

    ✅ Method 1: Zip the Data Folder:

        1️⃣ Stop MongoDB (mongod process) to avoid file corruption.
        2️⃣ Zip the data/db folder using a compression tool (zip, tar, etc.).
        3️⃣ Store the backup safely (external drive, cloud, etc.).

    ✅ Method 2: Use mongodump (Recommended):

        MongoDB provides a built-in tool to create a backup:

            mongodump --out "C:\mongodb_backup"

        👉 This creates a backup of all databases in "C:\mongodb_backup".

        🔹 Restoring Data from Backup:

            To restore data from a backup, use mongorestore:

                mongorestore --dir "C:\mongodb_backup"


✅ Summary:

    By default, MongoDB stores data in /data/db (Linux/macOS) or C:\data\db (Windows).

    You can change the storage location using mongod --dbpath "your_path".

    To create a backup, zip the data folder or use mongodump.

    To restore data, use mongorestore.

