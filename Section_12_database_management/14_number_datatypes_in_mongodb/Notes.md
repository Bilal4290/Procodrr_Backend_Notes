🔹 Number Data Types in MongoDB

    MongoDB supports different number types based on precision and size. Let’s go step by step through each one.

    1️⃣ Int32 (Integer - 4 Bytes)

        Size: 4 bytes (32-bit)
        Range: -2,147,483,648 to 2,147,483,647
        Use Case: When you need whole numbers within this range (e.g., age, count).

        Example:
    
            db.numbers.insertOne({ value: 123 })  // Stored as Int32

        MongoDB Storage: Uses BSON int32 type internally.


    2️⃣ Int64 (Long - 8 Bytes):

        Size: 8 bytes (64-bit)
        Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
        Use Case: When you need very large integers (e.g., timestamps, big counters).

        Example:
       
            db.numbers.insertOne({ value: NumberLong("9223372036854775807") })

        MongoDB Storage: Uses BSON int64 (Long) type.

        Important:

            By default, MongoDB treats numbers larger than Int32 as Int64.


    3️⃣ Double (Floating Point - 8 Bytes):

        Size: 8 bytes (64-bit IEEE 754 floating-point)
        Range: Supports very large/small values with decimal precision.
        Use Case: When you need decimals but don't require high precision (e.g., prices, averages).

        Example:
    
            db.numbers.insertOne({ value: 3.14 })

        MongoDB Storage: Uses BSON double type.


    4️⃣ Decimal128 (High Precision - 16 Bytes):

        Size: 16 bytes (128-bit floating-point)
        Use Case: When you need high precision decimals (e.g., financial calculations, currency).

        Example:
     
            db.numbers.insertOne({ value: NumberDecimal("99.999999999999999999") })

        MongoDB Storage: Uses BSON Decimal128 format.

        Key Benefit: Avoids floating-point precision errors.