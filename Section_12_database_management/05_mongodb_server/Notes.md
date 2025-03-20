1️⃣ What is Mongo Shell (mongosh)?

    ✅ Mongo Shell is a client-side tool used to connect to the MongoDB server (backend/database server) and execute commands.
    ✅ It is written in 90% TypeScript and 5% JavaScript.
    ✅ It allows developers to query, insert, update, delete data, and manage MongoDB databases.

    📌 Example: Connecting to MongoDB Server using Mongo Shell

            mongosh

    💡 This starts Mongo Shell and connects to the MongoDB server running on localhost:27017.



2️⃣ What is MongoDB Server (mongod)?

    ✅ MongoDB Server (mongod) is the backend service that stores and manages the data.
    ✅ It is written in 70% C++ and 23% JavaScript.
    ✅ It runs as a TCP server, listening for client connections on port 27017 (by default).

    📌 To start the MongoDB server, run:

            mongod

    💡 This command starts the MongoDB server process.



3️⃣ What is mongod Command and Why Does It Require a db Folder in data folder which should be in root?

    ✅ mongod is the MongoDB server executable that starts the database.
    ✅ By default, MongoDB stores its data in the /data/db directory.

    📌 If the /data/db folder is missing, mongod will fail to start.


4️⃣ How Does Mongo Shell (mongosh) Connect to MongoDB Server (mongod)?

    ✅ MongoDB Shell (mongosh) connects to MongoDB Server (mongod) over TCP (default port: 27017).
    ✅ When you run mongod, it creates a server and starts listening for client connections on localhost:27017.
    ✅ When you run mongosh, it connects as a client to the running server.

    📌 Connection Process:

    Start the MongoDB server (mongod).
    Run mongosh to connect to the server.
    Now, you can interact with the MongoDB database.

    🛑 db

    db => an object named Database, you can see this as object by console.dir.

    db.constructor  =>  [class Database extends ShellApiWithMongoClass]
    
    db.constructor.name => Database



5️⃣ Understanding show Commands in Mongo Shell:

    ✅ 1. What is show('databases') or show('dbs')?

        Both commands are the same:

        show databases
        # or
        show dbs

    ✅ Returns a list of all available databases on the MongoDB server.

    📌 Example Output:

        admin      0.000GB
        config     0.000GB
        local      0.000GB
        myDB       0.001GB


    ✅ 2. What Values Can We Pass to show()?

        MongoDB Shell allows:

            show dbs         # Show all databases
            show collections # Show collections in the current database
            show users       # Show all users
            show roles       # Show all roles
            show profiles    # Show database profiling information

    💡 You CANNOT pass custom values to show()—only predefined ones work.


6️⃣ What are admin, config, and local Databases?

    Database	   Purpose
     admin	        Stores administrative commands, user roles, and authentication settings.
     config	        Stores sharding-related metadata (used in distributed setups).
     local	        Stores internal replication and operational data.

    💡 These databases are automatically created by MongoDB and should not be deleted.



7️⃣ What is MongoDB Compass?

    ✅ MongoDB Compass is a GUI tool for MongoDB that helps developers interact with the database without using a command-line shell.
    ✅ You can visualize data, run queries, and manage collections easily.
    ✅ It is an alternative to Mongo Shell but with a graphical interface.

    📌 How to Connect with a Database in MongoDB Compass?

    Open MongoDB Compass.
    Enter the connection string (e.g., mongodb://localhost:27017).
    Click "Connect" to access the database.


8️⃣ What is MongoDB Extension for VS Code?

    ✅ The MongoDB VS Code extension allows you to:

        Connect to a MongoDB database directly from VS Code.
        Run MongoDB queries inside VS Code (like Mongo Shell).
        View and modify collections easily.

    📌 To install:

        Open VS Code.
        Go to Extensions (Ctrl+Shift+X).
        Search for MongoDB and install it.
        Connect to your MongoDB database.
    💡 This helps developers manage their databases without switching to MongoDB Compass or Mongo Shell.




