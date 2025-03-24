🚀 MongoDB Playground 🏗️

    MongoDB Playground is an interactive environment for writing, testing, and debugging MongoDB queries. It is mainly used in MongoDB Compass and VS Code MongoDB Extension to quickly experiment with queries before running them in a production database.


🚀 Features of MongoDB Playground:

    ✅ Write & Run Queries - Test CRUD operations (find, insert, update, delete).
    ✅ Auto-Suggestions - Get help with query syntax.
    ✅ Query Execution Plan - Analyze how MongoDB executes a query.
    ✅ No Need for Persistent DB - Run queries without affecting actual data.
    ✅ Works with Local & Cloud DBs - Connect to MongoDB Atlas or a local instance.


📌 Example Usage in MongoDB Playground:

    // Create a new database and collection
    use("todoApp");

    // Insert a document
    db.todos.insertOne({ title: "Learn MongoDB", completed: false });

    // Find all documents
    db.todos.find();

    // Update a document
    db.todos.updateOne({ title: "Learn MongoDB" }, { $set: { completed: true } });

    // Delete a document
    db.todos.deleteOne({ title: "Learn MongoDB" });


🎯 Where to Use MongoDB Playground?

    📌 MongoDB Compass - Built-in playground to run queries.
    📌 VS Code Extension - The "MongoDB for VS Code" extension provides a playground.
    📌 MongoDB Atlas UI - Online shell supports interactive querying.