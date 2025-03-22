1️⃣ Read Operations in MongoDB

    ✅ 1.1 How to Read All Documents in a Collection

        db.users.find()

        ⭐ This returns a cursor, not an array.
        ⭐ The cursor allows you to iterate over documents one by one, which is memory-efficient for large datasets.

        ⭐ Convert Cursor to Array

            db.users.find().toArray()

            💡 Converts the cursor into an array of documents.
            💡 Useful when working with JavaScript operations that require an array.


    ✅ 1.2 Finding Specific Documents

        db.users.find({ name: "Bilal" })

        ⭐ Returns all documents where name is "Bilal".

        db.users.find({ name: "Bilal", age: 20 })

        ⭐ Returns only users where name is "Bilal" AND age is 20.


✅ 1.3 findOne() Method

    db.users.findOne({ name: "Bilal" })

    ⭐ Returns only the first matching document.
    ⭐ Returns an object (not a cursor).

    ⭐ If no parameter is given:

        db.users.findOne()

    ⭐ Returns the first document in the collection (random if no order is enforced).


    🔹 Key Difference: find() vs findOne():


| Feature            | find()                        | findOne()                    |
|--------------------|-----------------------------|------------------------------|
| Returns           | Cursor (multiple docs)       | Single object                |
| Multiple Matches? | Yes, returns all            | No, only first match         |
| Memory Usage      | Efficient (streaming)       | Loads entire object into memory |
| If No Match Found?| Returns an empty cursor     | Returns null                 |


    2️⃣ How to Check Data Type of a Query Result:

        To check whether a query returns a cursor, array, or object, use:

            db.users.find().constructor.name  // Returns "Cursor"
            db.users.find().toArray().constructor.name  // Returns "Array"
            db.users.findOne().constructor.name  // Returns "Object"


3️⃣ What Happens If find() or findOne() Find Nothing?

    find() returns an empty cursor ([] when converted to an array).
    findOne() returns null.

    Example:

        db.users.find({ name: "Unknown" })   // Returns: Cursor (empty result)
        db.users.find().toArray()  // Returns: []
        db.users.findOne({ name: "Unknown" })  // Returns: null


4️⃣ Comparison Operators in MongoDB:

    MongoDB provides comparison operators to filter data efficiently.


| Operator | Meaning                      | Example                               |
|----------|------------------------------|---------------------------------------|
| $gt      | Greater than                 | `{ amount: { $gt: 200 } }` (amount > 200) |
| $gte     | Greater than or equal to     | `{ amount: { $gte: 200 } }` (amount ≥ 200) |
| $lt      | Less than                     | `{ age: { $lt: 18 } }` (age < 18) |
| $lte     | Less than or equal to         | `{ age: { $lte: 18 } }` (age ≤ 18) |
| $eq      | Equal to                      | `{ status: { $eq: "active" } }` |
| $ne      | Not equal to                  | `{ status: { $ne: "inactive" } }` |


    ✅ 4.1 Greater Than ($gt):

        ⭐ Find users who pay more than $200:

            db.users.find({ amount: { $gt: 200 } })

        ⭐ Find users who are older than 30:

            db.users.find({ age: { $gt: 30 } })


    ✅ 4.2 Greater Than or Equal ($gte):

        ⭐ Find users who are 30 or older:

            db.users.find({ age: { $gte: 30 } })


    ✅ 4.3 Less Than ($lt):

        ⭐ Find users who are younger than 18:

            db.users.find({ age: { $lt: 18 } })


    ✅ 4.4 Less Than or Equal ($lte):

        ⭐ Find users who are 18 or younger:

            db.users.find({ age: { $lte: 18 } })


    ✅ 4.5 Equal ($eq):

        ⭐ Find users who have status "active":

            db.users.find({ status: { $eq: "active" } })


    ✅ 4.6 Not Equal ($ne):

        ⭐ Find users who are not inactive:

            db.users.find({ status: { $ne: "inactive" } })


5️⃣ More Advanced Operators:


| Operator | Meaning                                | Example |
|----------|----------------------------------------|---------|
| $in      | Matches any value in an array         | `{ age: { $in: [25, 30, 35] } }` (age is 25, 30, or 35) |
| $nin     | Matches none of the values in an array | `{ age: { $nin: [18, 21, 30] } }` (age is NOT 18, 21, or 30) |
| $exists  | Checks if a field exists              | `{ email: { $exists: true } }` |
| $type    | Matches by data type                  | `{ age: { $type: "number" } }` |
| $regex   | Pattern matching (similar to LIKE in SQL) | `{ name: { $regex: "^A" } }` (Names starting with "A") |


    5.1 $in: Match Any Value in an Array:

        ⭐ Find users who are 25, 30, or 35 years old:

            db.users.find({ age: { $in: [25, 30, 35] } })


    5.2 $nin: Match None of the Values:

    ⭐ Find users who are NOT 18, 21, or 30 years old:

        db.users.find({ age: { $nin: [18, 21, 30] } })


    5.3 $exists: Check if a Field Exists:

        ⭐ Find users who have an email field:

            db.users.find({ email: { $exists: true } })


    5.4 $regex: Pattern Matching:

        ⭐ Find users whose name starts with "A":

            db.users.find({ name: { $regex: "^A" } })

        ⭐ Find users whose name ends with "n":

            db.users.find({ name: { $regex: "n$" } })


🔹 Final Summary

    ⭐ find() returns a cursor, findOne() returns an object.
    ⭐ If find() finds nothing → empty cursor ([]). If findOne() finds nothing → null.
    ⭐ Comparison operators:
        🟢 $gt, $gte, $lt, $lte, $eq, $ne (greater, less, equal, not equal).
        🟢 $in, $nin (match inside/outside an array).
        🟢 $exists, $type (check existence & type).
        🟢 $regex (pattern matching).