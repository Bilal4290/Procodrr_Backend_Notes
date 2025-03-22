📌 Configuring MongoDB Server with mongod.cfg File:

    When MongoDB runs as a service, the data storage path changes from the default (/data/db or C:\data\db).

🔹 Where is MongoDB Data Stored?

    The storage path is specified in the MongoDB configuration file (mongod.cfg).

    📍 Default Config File Locations:

        🔵 Windows: C:\Program Files\MongoDB\Server\{version}\bin\mongod.cfg

        🔵 Linux/macOS: /etc/mongod.conf

    📍 Default Storage Path in Config File:

        storage:
            dbPath: "C:\\Program Files\\MongoDB\\Server\\{version}\\data"

    👆 This means that when MongoDB runs as a Windows service, it stores data in:

        C:\Program Files\MongoDB\Server\{version}\data instead of C:\data\db.

    For Linux, the default dbPath is usually:

        storage:
            dbPath: "/var/lib/mongodb"


    🔹 Using mongod --config Command
 
        mongod --config "configFilePath"


✅ What does it do?

    It starts the MongoDB server using the configuration file specified by "configFilePath".

    Instead of manually specifying all options, MongoDB reads them from the config file.

    📍 Example Usage:

        mongod --config "C:\Program Files\MongoDB\Server\7.0\mongod.cfg"

        👉 This starts MongoDB using the settings in the mongod.cfg file.

    🔹 Customizing the Config File (mongod.cfg):

        You can edit the config file to change the data storage location.

        📍 Example mongod.cfg file:

            storage:
                dbPath: "D:\\MongoDBData"   # Custom database path

            net:
                bindIp: 127.0.0.1           # Allow only local connections
                port: 27017                 # MongoDB default port

            security:
                authorization: "enabled"     # Enable user authentication


        👉 This config file changes:

            Data storage path to "D:\MongoDBData"

            Only allows local connections (127.0.0.1)

            Enables authentication

✅ Summary:

    When MongoDB runs as a service, it stores data in a different location (specified in mongod.cfg).

    The config file (mongod.cfg) controls storage, network, authentication, and other settings.

    Use mongod --config "path" to start MongoDB with a custom configuration.

    You can edit mongod.cfg to change where MongoDB stores data.