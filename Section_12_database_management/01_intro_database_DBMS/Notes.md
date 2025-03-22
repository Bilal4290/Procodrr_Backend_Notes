# What is Database?

A database is an organized, collection of data designed for efficient storage, retrieval, and management by users or applications.

## Why Use Databases?

1. **Organized Data Storage**: 
   Efficiently store and structure data for easy access and management.

2. **Efficient Data Retrieval**: 
   Retrieve and process data quickly, even from large datasets, using powerful query capabilities.

3. **Data Consistency and Integrity**: 
   Maintain accuracy and reliability of data with rules like constraints and keys.

4. **Security**: 
   Protect sensitive data with authentication, encryption, and access controls.

5. **Scalability**: 
   Handle growing data and user demands by scaling vertically or horizontally.

6. **Separation of Concerns**: 
   Databases decouple data storage from application logic, ensuring clean architecture and modularity. 
   For example, a backend server focuses on business logic while the database manages data storage and retrieval.



# Database Management System:

A Database Management System (DBMS) consists of a database server, which stores and manages data, and database clients, which interact with the server to perform operations. In most applications, developers use database drivers or libraries within their code as the client to retrieve or manipulate data.



# ISAM:

ISAM (Indexed Sequential Access Method) is a file organization method used for managing and accessing data in a sequential and indexed manner. It was developed by IBM in the 1960s as a way to efficiently store and retrieve data in large datasets.



1️⃣ What is a Database? Why Do We Need It?

      A database is a structured way to store and manage data. Instead of saving data in text files or memory, databases help us store, retrieve, and manage data efficiently.

      📝 Why Do We Need a Database?

      Before databases, people stored data in: 
         ✅ Text files
         ✅ Excel sheets
         ✅ Manual records (Paper, Books)

      🛑 Problems with These Methods:
         ❌ Hard to search data
         ❌ Difficult to update records
         ❌ No multi-user access
         ❌ No security

      ✅ Databases solve these problems by offering:

         Fast searches (Indexes)
         Data relationships (Tables, Collections)
         Multi-user support
         Security & backup




2️⃣ What is ISAM (Indexed Sequential Access Method)?

      ISAM (Indexed Sequential Access Method) was an early way of storing data before modern databases.

      🔍 How ISAM Worked:
         Data was stored sequentially (one after another).
         Indexes helped speed up searching.
         ISAM was fast for reading but slow for updates.
      ✅ Example:
         Imagine a phonebook where names are stored in alphabetical order. 
         ISAM would:
            Store names sequentially.
            Use an index to quickly find a name.
      🚀 But modern databases (like MySQL & MongoDB) replaced ISAM with better techniques like B-Trees & Hash Indexes.




3️⃣ What is a Database Management System (DBMS)?

      A DBMS (Database Management System) is software that helps us store, retrieve, and manage data.

      ✅ Examples of DBMS:

      Relational Databases (SQL-based)
         MySQL
         PostgreSQL
         SQLite
      NoSQL Databases
         MongoDB
         Firebase
         Cassandra
      🛠 What Does a DBMS Do?
         Stores data securely.
         Provides query languages (SQL, Mongo Query).
         Manages users & permissions.
         Handles backups & recovery.




4️⃣ What is a Database Server & Database Client?

      A database server is a program that stores and manages data.
      A database client is a program that connects to the server and sends requests.

      ✅ Example:
         MongoDB Server: Stores the data.
         MongoDB Client (Mongo Shell): Sends queries (find(), insert(), update()).

      ✅ Another Example (MySQL):
         MySQL Server: Runs on port 3306, manages databases.
         MySQL Client: Sends queries like SELECT * FROM users;.

      📡 Does the Database Server Use TCP and Protocols?

         Yes! Database servers use TCP/IP and their own protocols for communication.

         ✅ Examples of Database Protocols:

         Database    	Protocol Used     	Default Port
         MongoDB	    Mongo Wire Protocol    	27017
         MySQL	        MySQL Protocol	         3306
         PostgreSQL	 PostgreSQL Protocol    	5432

         These protocols define how data is sent and received over the network.



5️⃣ What is TCP/IP and What is a Protocol?

      TCP (Transmission Control Protocol): 
      Ensures reliable communication between client & server.
      Protocol: A set of rules for communication.
      ✅ Example (How TCP Works in MongoDB):

      MongoDB Server starts on port 27017.
      MongoDB Client connects using TCP.
      Client sends a query (e.g., find() in MongoDB Shell).
      MongoDB Server responds with data.



6️⃣ What Happens When We Install MongoDB?

      When you install MongoDB, you install two things:

         MongoDB Server (Stores data, runs on port 27017).
         MongoDB Client (Mongo Shell) (Used to send queries to the server).

      ✅ MongoDB Architecture

         MongoDB Server: Handles data storage.
         Mongo Shell (Client): Sends commands.
         Drivers (For Programming Languages): Allows Node.js, Python, etc., to connect.




7️⃣ What are Database Drivers and Connectors?

      A driver or connector is software that helps programming languages talk to a database.

      ✅ Examples:

      Database	         Name for Drivers/Connectors
      MongoDB        	Drivers (Node.js Driver, Python Driver)
      MySQL	            Connectors (MySQL Connector for Java, Python, etc.)



8️⃣ Is a Server Also a Client?

      Yes! A server can also be a client.

      ✅ Example:

      Node.js acts as a client when connecting to MongoDB:

      import { MongoClient } from 'mongodb';
      const client = new MongoClient('mongodb://localhost:27017');


      Node.js acts as a server when handling React requests:

      app.get('/api/users', (req, res) => {
         res.json({ name: 'John Doe' });
      });

      🚀 So, a server can also be a client when connecting to another server.




9️⃣ What is the WiredTiger Storage Engine in MongoDB?

      The WiredTiger Storage Engine is MongoDB's default storage system.

      🛠 Features of WiredTiger
         Uses B-Trees & Write-Ahead Logging for performance.
         Supports compression (saves storage).
         Better concurrency (multiple users can read/write data faster).
         
      🚀 It replaced the older MMAPv1 storage engine.

