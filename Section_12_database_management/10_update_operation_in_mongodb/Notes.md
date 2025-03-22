1️⃣ Basic Update Operations:

    ✅ updateOne():

        ⭐ Updates only the first matching document.
        ⭐ Uses the $set operator to modify only specific fields.

        📌 Example: Update Bilal’s age to 22

            db.users.updateOne({ name: "Bilal" }, { $set: { age: 22 } })

        ✅ Only one document is updated, even if multiple match the filter.


    ✅ updateMany():

        ⭐ Updates all matching documents.

        📌 Example: Update all electricity bills to 500

            db.expenses.updateMany({ title: "Electricity Bill" }, { $set: { amount: 500 } })

        ✅ All documents with title: "Electricity Bill" will be updated.


    ✅ replaceOne():

        ⭐ Replaces the entire document, except the _id field.

        📌 Example: Replace Bilal with Asif

            db.users.replaceOne({ name: "Bilal" }, { name: "Asif", age: 20 })

        🚨 Warning:

            ⭐ All fields (except _id) are replaced, so missing fields will be removed.
            ✅ Use replaceOne() when you want to completely replace a document.
            ❌ Do not use this if you just want to modify a few fields (use updateOne instead).


2️⃣ Updating Documents by _id:

    ⭐ MongoDB assigns a unique _id to every document.

    📌 Example: Update a document using _id

        db.expenses.updateOne({ _id: ObjectId("gdhrhu7833bcd") }, { $set: { amount: 5000 } })

    🚨 Important Notes: 

        1️⃣ _id is always unique, so only one document is updated.
        2️⃣ _id must be wrapped in ObjectId().


3️⃣ Upsert: Insert if Not Found:

    If no matching document is found, a new document is inserted instead of updating.

    📌 Example: If user "Bilal" does not exist, insert it

        db.users.updateOne({ name: "Bilal" }, { $set: { age: 22 } }, { upsert: true })

    ✅ If "Bilal" exists → Update his age to 22.
    ✅ If "Bilal" does NOT exist → Insert { name: "Bilal", age: 22 } into users collection.


4️⃣ Update Operators ($set, $inc, $mul, $unset, etc.)

    MongoDB provides operators to update documents efficiently.


| Operator | Description                      | Example |
|----------|----------------------------------|---------|
| $set     | Updates specific fields         | `{ $set: { age: 25 } }` |
| $unset   | Removes a field                 | `{ $unset: { age: "" } }` |
| $inc     | Increases/decreases a number    | `{ $inc: { salary: 500 } }` |
| $mul     | Multiplies a number             | `{ $mul: { price: 1.1 } }` |
| $rename  | Renames a field                 | `{ $rename: { "oldField": "newField" } }` |



    ✅ $inc - Incrementing a Field:
    
        📌 Example: Increase Bilal’s age by 2 years

            db.users.updateOne({ name: "Bilal" }, { $inc: { age: 2 } })

            ✅ If age = 22 → After update: age = 24.

        📌 Example: Decrease the amount by 100

            db.expenses.updateOne({ title: "Rent" }, { $inc: { amount: -100 } })


    ✅ $unset - Remove a Field:

        📌 Example: Remove the phoneNumber field from a document

            db.users.updateOne({ name: "Bilal" }, { $unset: { phoneNumber: "" } })

            ✅ Now the phoneNumber field will be removed from Bilal’s document.


    ✅ $rename - Renaming a Field:

        📌 Example: Rename fullName to name

            db.users.updateMany({}, { $rename: { "fullName": "name" } })

            ✅ Now, fullName is replaced with name in all documents.




5️⃣ Updating Arrays in MongoDB:

    Updating arrays requires special update operators like $push, $pop, $pull, $addToSet, and $each.


| Operator   | Description                           | Example |
|------------|---------------------------------------|---------|
| $push      | Add an element to an array           | `{ $push: { hobbies: "Swimming" } }` |
| $addToSet  | Add unique element (no duplicates)   | `{ $addToSet: { hobbies: "Swimming" } }` |
| $pop       | Remove first (-1) or last (1) element | `{ $pop: { hobbies: -1 } }` |
| $pull      | Remove specific value from array     | `{ $pull: { hobbies: "Reading" } }` |
| $each      | Add multiple elements                | `{ $push: { hobbies: { $each: ["Coding", "Music"] } } }` |



    ✅ $push - Add an Element to an Array:

        📌 Example: Add "Swimming" to Bilal’s hobbies

            db.users.updateOne({ name: "Bilal" }, { $push: { hobbies: "Swimming" } })

            ✅ New document: { name: "Bilal", hobbies: ["Swimming"] }.


    ✅ $addToSet - Add Unique Values (No Duplicates):

        📌 Example: Prevent duplicate hobbies

            db.users.updateOne({ name: "Bilal" }, { $addToSet: { hobbies: "Swimming" } })

            ✅ If "Swimming" already exists, MongoDB will NOT add it again.


    ✅ $pull - Remove a Specific Element from an Array:

        📌 Example: Remove "Reading" from hobbies

            db.users.updateOne({ name: "Bilal" }, { $pull: { hobbies: "Reading" } })

            ✅ Removes "Reading" but keeps other hobbies.


    ✅ $pop - Remove First or Last Element

        📌 Example: Remove the last hobby

            db.users.updateOne({ name: "Bilal" }, { $pop: { hobbies: 1 } })

            ✅ Removes the last element from the hobbies array.

        📌 Example: Remove the first hobby

            db.users.updateOne({ name: "Bilal" }, { $pop: { hobbies: -1 } })
            ✅ Removes the first element from the hobbies array.


6️⃣ Summary

| Method       | What it Does?                                      |
|-------------|---------------------------------------------------|
| updateOne()  | Updates only the first matching document.        |
| updateMany() | Updates all matching documents.                  |
| replaceOne() | Replaces the entire document (except _id).       |
| Upsert       | Inserts a new document if no match is found.     |
| $set         | Updates specific fields.                         |
| $unset       | Removes a field.                                 |
| $inc         | Increments a number field.                      |
| $rename      | Renames a field.                                 |
| $push        | Adds an item to an array.                        |
| $addToSet    | Adds unique items to an array.                   |
| $pull        | Removes specific values from an array.           |
| $pop         | Removes first or last element from an array.     |
