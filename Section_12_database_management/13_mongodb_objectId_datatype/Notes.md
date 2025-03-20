🔹 Structure of ObjectId in MongoDB:

    An ObjectId is a 12-byte (96-bit) unique identifier used by MongoDB for documents.
    It is structured as follows:


   | **Bytes**  | **Size**  | **Represents**            | **Description**                                      |
|------------|----------|---------------------------|------------------------------------------------------|
| **Time**   | 4 bytes  | Timestamp (seconds since 1970) | Shows when the ObjectId was created                 |
| **Machine**| 3 bytes  | Machine Identifier        | Unique identifier for the server/machine            |
| **Process**| 2 bytes  | Process ID (PID)         | Identifies the process that created the ObjectId    |
| **Counter**| 3 bytes  | Incrementing Counter     | Ensures uniqueness (starts from a random value and increases) |


🔹 Breakdown of an Example ObjectId:

    Let's take an example ObjectId:

        ObjectId("65f6c3b4f5a23d789b001234")

    Now let's break it down byte by byte:

    1️⃣ First 4 Bytes → Timestamp (Time of Creation)

        "65f6c3b4" (Hex)

        Convert it to decimal:
     
            parseInt("65f6c3b4", 16)  // Output: 1710860212

        Convert it to date:
      
            new Date(1710860212 * 1000)  // Output: 2024-03-19T12:30:12.000Z

        Meaning: This ObjectId was created on March 19, 2024, at 12:30:12 UTC.


    2️⃣ Next 3 Bytes → Machine Identifier

        "f5a23d" (Hex)
        Purpose: Identifies the machine/server where this ObjectId was generated.


    3️⃣ Next 2 Bytes → Process ID (PID)

        "789b" (Hex)
        Purpose: Identifies the MongoDB process that generated the ObjectId.


    4️⃣ Last 3 Bytes → Counter (Incrementing Value)

        "001234" (Hex)
        Purpose: Ensures uniqueness even if multiple ObjectIds are created in the same second.
        The counter starts at a random number and increments.


🔹 ObjectId.getTimestamp():

    ObjectId.getTimestamp() returns the creation date and time of the ObjectId.

    How?

        The first 4 bytes of an ObjectId store the timestamp (Unix epoch time in seconds).
        getTimestamp() extracts this timestamp and converts it into a JavaScript Date object.

    ✅ Example:

        let id = ObjectId("65f6c3b40000000000000000");
        console.log(id.getTimestamp());

    🔹 Output:

        2024-03-17T12:30:44.000Z
        This means the ObjectId was generated on March 17, 2024, at 12:30:44 UTC.
