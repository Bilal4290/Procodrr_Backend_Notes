1️⃣ Creating Databases, Collections, and Documents in MongoDB

    ✅ Creating a Database:

        MongoDB doesn’t create an empty database. You must insert at least one document into a collection.

            use myDatabase  # Switch to (or create) the database

        ⚠️ This does not create the database yet! You need to insert a document.


    ✅ Creating a Collection & Inserting a Document:

        Since a document cannot exist directly in a database, you need to insert it inside a collection.

        Insert a Single Document:
    
            db.users.insertOne({ name: "Bilal", age: 22 })

        ⭐ insertOne() is the correct method (✅ insert() is deprecated ❌).
        ⭐ If users collection doesn’t exist, it gets created automatically.


    ✅ Inserting Multiple Documents:

        To insert multiple documents at once, use insertMany():

            db.users.insertMany([
            { name: "Ali", age: 25 },
            { name: "Ayesha", age: 23 },
            { name: "Ahmed", age: 30 }
            ])

        ⭐ Each object inside the array is a separate document.
        ⭐ Documents don’t require the same structure (unlike SQL tables).


    ✅ Retrieving Documents from a Collection

            db.users.find()

        ⭐ Returns all documents in the users collection.
        ⭐ Use .pretty() to format output nicely:

            db.users.find().pretty()

        ⭐ Find Specific Document

                db.users.find({ name: "Bilal" })
                
            Finds all documents where name is "Bilal".


    ✅ Deleting a Database
   
        db.dropDatabase()

        ⭐ Deletes the current database.
        ⭐ Switch to the database first using use myDatabase before dropping.


2️⃣ NoSQL vs SQL (Pros & Cons):

  | Feature          | NoSQL (MongoDB) ✅                        | SQL (MySQL, PostgreSQL) ❌          |
|-----------------|----------------------------------------|----------------------------------|
| Data Format     | Documents (JSON/BSON)                 | Tables (Rows & Columns)        |
| Storage        | Takes more space (due to duplication)  | Less space (normalized data)   |
| Read Speed      | Faster (entire document is retrieved) | Slower (joins needed to reconstruct objects) |
| Write Speed     | Faster (no schema constraints)        | Slower (more checks & constraints) |
| Joins          | ❌ No joins (data duplication instead) | ✅ Supports joins (normalized structure) |
| Flexibility    | ✅ Schema-less (any structure)         | ❌ Rigid schema (fixed structure) |
| Scaling        | ✅ Horizontal Scaling (easier to scale) | ❌ Vertical Scaling (harder to scale) |
| Transactions   | ❌ Weak ACID compliance                 | ✅ Strong ACID compliance |
| Use Cases      | Big Data, Real-time apps, Scalability  | Banking, ERP, Complex relationships |


🔹 Summary

    ⭐ MongoDB stores documents (BSON), making reads faster but storage larger.
    ⭐ SQL stores normalized data (tables), making reads slower but storage efficient.
    ⭐ MongoDB is best for high-speed reads and scalability.
    ⭐ SQL is best for transactional consistency and structured data.