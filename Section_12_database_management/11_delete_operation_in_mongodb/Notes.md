1️⃣ Deleting a Specific Field:

    We cannot directly "delete" a field, but we can unset it using $unset.

    📌 Example: Remove the amount field from the Electricity Bill document

        db.expenses.updateOne({ title: "Electricity Bill" }, { $unset: { amount: "" } })

        ✅ Now, the amount field is removed from the document.


    ❌ Why Can't We Delete _id?

        📌 If we try to update _id, we get an error:

            MongoServerError: performing an update on the path '_id' would modify the immutable field "_id"

        🔍 Explanation:

            ⭐ _id is a unique identifier and acts as the primary key in MongoDB.
            ⭐ It is immutable (cannot be changed or removed) because:
                ✅ It ensures data integrity.
                ✅ MongoDB uses _id as an index to optimize queries.
                ✅ If _id were allowed to be modified, MongoDB would need to re-index everything, which is inefficient.


        ✅ Workaround:

            If you want to "delete" _id, you must delete the entire document instead.

            📌 Example: Delete a document by _id

                db.expenses.deleteOne({ _id: ObjectId("vdjjnjgd674bjcjd") })

                ✅ The entire document is deleted instead of modifying _id.


2️⃣ Deleting Entire Documents:

    ✅ deleteOne() - Delete the First Matching Document

        📌 Example: Delete the first "Electricity Bill" document

            db.expenses.deleteOne({ title: "Electricity Bill" })

            ✅ If multiple documents match, only the FIRST one is deleted.

    ✅ deleteMany() - Delete All Matching Documents

        📌 Example: Delete all "Electricity Bill" documents

            db.expenses.deleteMany({ title: "Electricity Bill" })

            ✅ All documents with title: "Electricity Bill" are deleted.


3️⃣ Deleting an Entire Collection:

    📌 Example: Drop the users collection

        db.users.drop()

    ✅ If the collection exists and is deleted → Returns true.
    ✅ If the collection does not exist → Returns false.


4️⃣ Deleting an Entire Database:

    📌 Example: Drop the current database

        db.dropDatabase()

    ✅ The entire database is deleted (only if you are using it).
    ✅ MongoDB must have at least one document to create a database.
    ✅ If the database is empty, it doesn't exist, so there's nothing to drop.

