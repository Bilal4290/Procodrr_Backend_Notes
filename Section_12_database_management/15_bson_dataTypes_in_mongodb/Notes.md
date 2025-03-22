# BSON Types

| **Type**             | **Alias**         | **Numeric Code** |
|-----------------------|-------------------|------------------|
| Double               | `double`         | 1                |
| String               | `string`         | 2                |
| Object               | `object`         | 3                |
| Array                | `array`          | 4                |
| Binary Data          | `binData`        | 5                |
| Undefined (deprecated) | `undefined`     | 6                |
| ObjectId             | `objectId`       | 7                |
| Boolean              | `bool`           | 8                |
| Date                 | `date`           | 9                |
| Null                 | `null`           | 10               |
| Regular Expression   | `regex`          | 11               |
| JavaScript           | `javascript`     | 13               |
| Symbol (deprecated)  | `symbol`         | 14               |
| JavaScript (with scope) | `javascriptWithScope` | 15      |
| 32-bit Integer       | `int`            | 16               |
| Timestamp            | `timestamp`      | 17               |
| 64-bit Integer       | `long`           | 18               |
| Decimal128           | `decimal`        | 19               |
| Min Key              | `minKey`         | -1               |
| Max Key              | `maxKey`         | 127              |



✅ Why BSON Types Matter?

    Efficient Querying → Allows us to filter results based on type ($type query operator).

    Optimized Storage → MongoDB uses the right amount of space for each type.

    Faster Indexing & Searching → Knowing types helps optimize queries.

    🔍 Example Query Using $type:

        db.collection.find({ price: { $type: "double" } })  // Finds all documents where "price" is a Double



