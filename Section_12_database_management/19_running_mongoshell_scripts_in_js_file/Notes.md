🚀 Running Mongo Shell Scripts in a .js File:

    MongoDB allows running JavaScript files using mongosh. This is useful for automating database operations like creating databases, inserting data, and querying collections.


🏃 Executing a MongoDB Script:

    To run a MongoDB script written in mongo.js, use the following command:

        mongosh mongo.js

    📌 This runs mongo.js in the MongoDB shell.


📜 Basic Commands Inside mongo.js:

    In mongo.js, you can use:

        console.log(db);   // 🖥️ Prints the current database  
        console.log(show); // ❌ This does NOT work (show is a shell command, not JavaScript)  
        console.log(use);  // ❌ This also does NOT work 

    💡 Important Notes:

        🔵 show and use work in the Mongo shell, not in .js files.
        🔵 Instead, we use JavaScript functions like use("databaseName").


🛠 Creating a Database in mongo.js:

    use("todoApp"); // 🎯 Switches to `todoApp` database

    📌 If the database doesn’t exist, MongoDB creates it automatically when you insert data.


✅ Inserting a Single Document:

    db.todos.insertOne({ title: "Complete MongoDB", completed: false });

    📝 Explanation:

        🔵 db.todos → Collection todos (created automatically if missing).
        🔵 insertOne() → Adds one document { title, completed } to the collection.

    🖼️ Diagram Representation:

        📂 todoApp
            📁 todos
                📄 { "_id": ObjectId("xyz123"), "title": "Complete MongoDB", "completed": false }


⏳ Synchronous vs Asynchronous Calls:

    🔹 MongoDB Shell (Synchronous):

        In the Mongo shell, database calls are synchronous.

            db.todos.find(); // Executes immediately, waits for the result.
            
        🚦Why?

            The shell is designed for interactive use, executing one command at a time.


    🔹 Node.js (Asynchronous):

        In Node.js, database operations are asynchronous to prevent blocking.

            const result = db.todos.find();  // ❌ Wrong (this blocks execution)


    ✅ Correct Way in Node.js
 
        async function getTodos() {
            try {
                const todos = await db.collection("todos").find().toArray();
                console.log(todos);
            } catch (error) {
                console.error(error);
            }
        }
        getTodos();

    📌 Why Async?

        🔵 If calls were synchronous, multiple users querying at the same time would block the application.

        🔵 Using async/await keeps Node.js non-blocking.


🔎 Reading Data:

    db.todos.find(); // Returns all documents in the `todos` collection.

    👀 Example Output:

        [
            { "_id": ObjectId("xyz123"), "title": "Complete MongoDB", "completed": false },
            { "_id": ObjectId("abc456"), "title": "Learn Node.js", "completed": true }
        ]


📂 Getting a Collection Object:

    const collection = db.getCollection("todos"); 

    🔹 db.getCollection("collectionName") returns an object, allowing you to insert or query documents.

    ✅ Inserting Using Collection Object:
 
        collection.insertOne({ title: "Complete Node.js", completed: false });

        📝 If the collection doesn't exist, MongoDB creates it automatically.


🔄 Inserting Multiple Todos with a Loop:

    use("todoApp");
    const collection = db.getCollection("todos");

    for (let i = 1; i <= 10; i++) {
        collection.insertOne({
            title: `Task ${i}`,
            completed: i % 2 === 0 ? true : false
        });
    }

    📌 This adds 10 tasks, alternating between completed ✅ and not completed ❌.


📊 Diagram Representation of Tasks:

    📂 todoApp
        📁 todos
            📄 { "_id": ObjectId("1"), "title": "Task 1", "completed": false }
            📄 { "_id": ObjectId("2"), "title": "Task 2", "completed": true }
            📄 { "_id": ObjectId("3"), "title": "Task 3", "completed": false }
            📄 { "_id": ObjectId("4"), "title": "Task 4", "completed": true }
            ...
            📄 { "_id": ObjectId("10"), "title": "Task 10", "completed": true }


✅ Summary:


| Step              | Action                          | Command                          |
|------------------|--------------------------------|----------------------------------|
| 🏃 Run Script    | Execute `mongo.js`             | `mongosh mongo.js`              |
| 📂 Create DB     | Switch to `todoApp`            | `use("todoApp")`               |
| 📜 Insert One    | Add one todo                   | `db.todos.insertOne({...})`     |
| 🔄 Insert Many   | Use a loop                     | `for (i=1; i<=10; i++) insertOne()` |
| ⏳ Sync/Async    | Shell is sync, Node.js is async | `async/await` in Node.js        |
| 🔍 Read Data     | Find all todos                 | `db.todos.find()`               |
| 📂 Get Collection | Use `getCollection()`         | `const collection = db.getCollection("todos")` |


🎯 Final Thoughts:

    🔵 MongoDB Shell is synchronous, but Node.js uses asynchronous calls to prevent blocking.
    🔵 We can use loops in mongo.js to bulk insert documents.
    🔵 Collections are auto-created if they don’t exist.
    🔵 db.getCollection() is useful for better handling of collections.