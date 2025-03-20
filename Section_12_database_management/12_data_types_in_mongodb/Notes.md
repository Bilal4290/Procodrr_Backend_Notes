# MongoDB Data Types Table

| **Data Type**       | **Description**                                         | **Example**                     |
|----------------------|---------------------------------------------------------|---------------------------------------|
| **ObjectId**         | A unique identifier for documents                      | `ObjectId()`                          |
| **Number (Int32)**     | Stores integer values                                  | `NumberInt(42)`                       |
| **Number (Int64) (Long)**    | Stores 64-bit integer values                           | `NumberLong("9223372036854775807")`   |
| **Double**           | Stores floating-point numbers                          | `NumberDouble(3.14)`                  |
| **Decimal128**       | Stores high-precision decimal values                   | `NumberDecimal("123.4567890123456789")` |
| **String**           | Stores text data                                       | `"Hello, World!"`                     |
| **Boolean**          | Stores true or false values                            | `true`, `false`                       |
| **Date**             | Stores date and time values                            | `new Date()`                          |
| **Array**            | Stores an array of values                              | `[1, 2, 3, "text"]`                   |
| **Embedded Document (Object)**| Stores nested documents                                | `{ "key": "value" }`                  |
| **Null**             | Represents a null value                                | `null`                                |
| **Binary Data**      | Stores binary data, such as images or files            | `BinData(0, "data")`                  |
| **Regular Expression** | Stores regex patterns                                | `/pattern/i`                          |
| **Code**       | Stores JavaScript code                                 | `Code("function() { return 42; }")`   |
| **Code (Scoped)** | Stores JavaScript code with a scope                 | `Code("function() { return x; }", {x: 42})` |
| **Min Key**          | Represents the smallest possible value in BSON         | `MinKey()`                            |
| **Max Key**          | Represents the largest possible value in BSON          | `MaxKey()`                            |
| **Timestamp**        | Stores timestamp values                                | `Timestamp()`                         |

