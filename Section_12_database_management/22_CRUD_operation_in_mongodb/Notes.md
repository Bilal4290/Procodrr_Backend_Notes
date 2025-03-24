🛠️ CRUD Operations in MongoDB using Node.js:

    📌 Prerequisites:
    
        ✅ Install MongoDB driver in Node.js  

            npm i mongodb


        ✅ Import MongoClient

            import { MongoClient } from "mongodb";


        ✅ Connect to MongoDB

            const client = new MongoClient("mongodb://127.0.0.1:27017/");
            await client.connect();
            const db = client.db("myDatabase");
            const collection = db.collection("users");


🟢 Create (Insert Data):

    🟣 Insert One Document:
   
        const user = { name: "Alice", age: 25, city: "New York" };
        const result = await collection.insertOne(user);
        console.log("Inserted ID:", result.insertedId);

    🟣 Insert Multiple Documents
  
        const users = [
            { name: "Bob", age: 30, city: "London" },
            { name: "Charlie", age: 28, city: "Paris" }
        ];
        const result = await collection.insertMany(users);
        console.log("Inserted Count:", result.insertedCount);


🔵 Read (Find Data):

    🟣 Find One Document:
 
        const user = await collection.findOne({ name: "Alice" });
        console.log(user);

    🟣 Find Multiple Documents
 
        const users = await collection.find({ city: "London" }).toArray();
        console.log(users);


🟡 Update (Modify Data):

    🟣 Update One Document:

        const result = await collection.updateOne(
            { name: "Alice" },
            { $set: { age: 26 } }
        );
        console.log("Matched:", result.matchedCount, "Modified:", result.modifiedCount);

    🟣 Update Multiple Documents:

        const result = await collection.updateMany(
            { city: "London" },
            { $set: { country: "UK" } }
        );
        console.log("Matched:", result.matchedCount, "Modified:", result.modifiedCount);


🔴 Delete (Remove Data):

    🟣 Delete One Document
  
        const result = await collection.deleteOne({ name: "Charlie" });
        console.log("Deleted Count:", result.deletedCount);

    🟣 Delete Multiple Documents

        const result = await collection.deleteMany({ city: "Paris" });
        console.log("Deleted Count:", result.deletedCount);


🚀 Closing Connection:

    await client.close();


🔥 Key Takeaways:

    ✅ DB Calls Only Happen When We Query a Collection
    ✅ Each DB Call Returns a Promise
    ✅ Use insertOne() & insertMany() for Inserting Data
    ✅ Use findOne() & find() for Fetching Data
    ✅ Use updateOne() & updateMany() for Modifications
    ✅ Use deleteOne() & deleteMany() for Deleting Data
    ✅ Always Close the Connection Using client.close()
