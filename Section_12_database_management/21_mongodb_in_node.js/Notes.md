🚀 MongoDB in Node.js:


    To work with MongoDB using a programming language like Node.js, you need MongoDB drivers to connect and interact with the database.


📌 Installation:

    To install the MongoDB driver in Node.js, run:  

        npm i mongodb


🔗 Connecting to MongoDB:

    Import the MongoDB Client

        import { MongoClient } from "mongodb";


    🔵 Create a Connection:

        const client = new MongoClient("mongodb://127.0.0.1:27017/");
        await client.connect();

    🔵 Access the Database:

        const db = client.db();  // If no DB is specified, defaults to "test"


📂 Viewing Database Information:

    🔵 Check Database Name

        console.log(db.namespace);  
        console.log(db.databaseName);

    🔵 See All Databases

        const admin = client.db().admin();
        const allDatabases = await admin.listDatabases();
        console.log(allDatabases);

📜 Collections & Documents:

    🔵 List All Collections

        const collectionsList = await db.listCollections().toArray();
        console.log(collectionsList);

    🔵 Get Collection Object

        const collection = db.collection("yourCollectionName");

    🔵 Fetch All Documents in a Collection

        const documents = await collection.find().toArray();
        console.log(documents);


❌ Closing the Connection:

    await client.close();


🔥 Key Takeaways:

    ✅ MongoDB Driver is required to connect Node.js to MongoDB.
    ✅ Default database is test if none is specified.
    ✅ db.listCollections() helps to list all collections.
    ✅ Use collection.find().toArray() to fetch all documents.
    ✅ Always close the connection using client.close().   