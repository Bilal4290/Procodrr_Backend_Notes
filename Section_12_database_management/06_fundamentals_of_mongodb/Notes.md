1️⃣ Three Fundamentals of MongoDB

    Whenever you work with MongoDB, you always deal with:

        ✅ Databases → Containers that hold multiple collections.
        ✅ Collections → Groups of documents (similar to tables in relational databases).
        ✅ Documents → Individual records stored in BSON format.


2️⃣ Default Databases in MongoDB

    When you connect to MongoDB for the first time, three system databases already exist:

        ✅ admin → Used for authentication & administrative tasks (like user management).
        ✅ config → Stores metadata about the database, sharding, and configurations.
        ✅ local → Stores replication-related data and operational information.

    ❗ We don’t store application data in these databases—we create custom databases instead.


3️⃣ BSON: Why Not Just JSON?

    MongoDB does not store plain JSON. Instead, it uses BSON (Binary JSON) because:

    🔹 More Efficient Storage → BSON is more compact than JSON.
    🔹 Supports Extra Data Types → BSON supports binary data, dates, and ObjectIds, which JSON doesn’t.
    🔹 Faster Read & Write → Binary format allows for optimized querying.

    📌 Example: A JSON document:

            {
            "name": "John",
            "age": 30
            }

        Stored in BSON binary format, making it more efficient.


4️⃣ No Direct Documents in a Database

    ✅ A document can’t exist directly inside a database.
    ✅ A document must always be inside a collection.
    ✅ A database is only created when at least one document exists in a collection.

    📌 Example Workflow:

        use myDatabase  # This does not create a database yet!
        db.myCollection.insertOne({ name: "Alice", age: 25 })  # Now the database exists!

    Now, myDatabase officially exists because it contains at least one document inside myCollection.


5️⃣ Key Takeaways

    ✅ MongoDB stores data in BSON format, not plain JSON.
    ✅ A database must contain at least one collection, and a collection must contain at least one document.
    ✅ No direct documents inside a database—they always belong to a collection.
    ✅ Three system databases (admin, config, local) exist by default but are not used for normal data storage.
