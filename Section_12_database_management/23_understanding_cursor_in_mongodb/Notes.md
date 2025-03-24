🧐 Understanding Cursor in MongoDB:

🚀 What is a Cursor in MongoDB?

    A cursor is a pointer to the result set of a query. When we execute find(), MongoDB does not return all the data immediately. Instead, it returns a cursor, which allows us to iterate over the documents efficiently.

🚀 Why Doesn’t MongoDB Return All Data at Once?

    🟢 If the query returns a large number of documents, sending everything at once could:

        🔵 Consume too much memory 💾
        🔵 Slow down performance 🐌
        🔵 Overwhelm the client application 🚨

    🟢 Instead, MongoDB streams data in batches, and we use toArray() to collect all results.


🚀 Using Cursor in MongoDB:

    🟢 Basic Cursor Methods

        const cursor = collection.find({ age: { $gt: 20 } });

        // Fetch the next document
        const doc = await cursor.next();
        console.log(doc);

        // Check if more documents exist
        console.log(await cursor.hasNext()); // true or false

        // Convert entire cursor result to an array
        const allDocs = await cursor.toArray();
        console.log(allDocs);

    🟢 Using for await Loop (Async Iterator)

        const cursor = collection.find();

        for await (const doc of cursor) {
        console.log(doc); // Each doc is printed one by one
        }


🌟 Understanding Async Iterator:

    An async iterator allows us to read data chunk by chunk, just like MongoDB's cursor.

    🟢 Example: Async Iterator with Fetch API

        const res = await fetch(url);
        console.log(res.body[Symbol.asyncIterator]); // Returns an async iterator

        for await (const data of res.body) {
        console.log(data); // Streams data as it arrives
        }

    🟢 Why is this useful?

        We can process large responses without waiting for the entire response to load! 🚀


📊 Counting Documents in MongoDB:

    🟢 Counting Documents in a Collection

        const count = await collection.countDocuments();
        console.log("Total Documents:", count);


🔥 Key Takeaways:

    ✅ A cursor is a pointer to MongoDB query results.
    ✅ MongoDB does not return all data at once for performance reasons.
    ✅ We use toArray() to fetch all documents at once.
    ✅ We can iterate over a cursor using for await...of.
    ✅ Async iterators allow streaming data efficiently.
    ✅ countDocuments() helps in finding the total number of documents.