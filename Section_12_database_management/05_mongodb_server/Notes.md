1️⃣ What is Mongo Shell (mongosh)?

    ✅ Mongo Shell is a client-side tool used to connect to the MongoDB server (backend/database server) and execute commands.
    ✅ It is written in 90% TypeScript and 5% JavaScript.
    ✅ It allows developers to query, insert, update, delete data, and manage MongoDB databases.

    📌 Example: Connecting to MongoDB Server using Mongo Shell

            mongosh

    💡 This starts Mongo Shell and connects to the MongoDB server running on localhost:27017.



2️⃣ What is MongoDB Server (mongod)?

    ✅ MongoDB Server (mongod) is the backend service that stores and manages the data.
    ✅ It is written in 70% C++ and 23% JavaScript.
    ✅ It runs as a TCP server, listening for client connections on port 27017 (by default).

    📌 To start the MongoDB server, run:

            mongod

    💡 This command starts the MongoDB server process.



3️⃣ What is mongod Command and Why Does It Require a db Folder in data folder which should be in root?

    ✅ mongod is the MongoDB server executable that starts the database.
    ✅ By default, MongoDB stores its data in the /data/db directory.

    📌 If the /data/db folder is missing, mongod will fail to start.


4️⃣ How Does Mongo Shell (mongosh) Connect to MongoDB Server (mongod)?

    ✅ MongoDB Shell (mongosh) connects to MongoDB Server (mongod) over TCP (default port: 27017).
    ✅ When you run mongod, it creates a server and starts listening for client connections on localhost:27017.
    ✅ When you run mongosh, it connects as a client to the running server.

    📌 Connection Process:

    Start the MongoDB server (mongod).
    Run mongosh to connect to the server.
    Now, you can interact with the MongoDB database.

    🛑 db

    db => an object named Database, you can see this as object by console.dir.

    db.constructor  =>  [class Database extends ShellApiWithMongoClass]
    
    db.constructor.name => Database



5️⃣ Understanding show Commands in Mongo Shell:

    ✅ 1. What is show('databases') or show('dbs')?

        Both commands are the same:

        show databases
        # or
        show dbs

    ✅ Returns a list of all available databases on the MongoDB server.

    📌 Example Output:

        admin      0.000GB
        config     0.000GB
        local      0.000GB
        myDB       0.001GB


    ✅ 2. What Values Can We Pass to show()?

        MongoDB Shell allows:

            show dbs         # Show all databases
            show collections # Show collections in the current database
            show users       # Show all users
            show roles       # Show all roles
            show profiles    # Show database profiling information

    💡 You CANNOT pass custom values to show()—only predefined ones work.


6️⃣ What are admin, config, and local Databases?

    Database	   Purpose
     admin	        Stores administrative commands, user roles, and authentication settings.
     config	        Stores sharding-related metadata (used in distributed setups).
     local	        Stores internal replication and operational data.

    💡 These databases are automatically created by MongoDB and should not be deleted.



7️⃣ What is MongoDB Compass?

    ✅ MongoDB Compass is a GUI tool for MongoDB that helps developers interact with the database without using a command-line shell.
    ✅ You can visualize data, run queries, and manage collections easily.
    ✅ It is an alternative to Mongo Shell but with a graphical interface.

    📌 How to Connect with a Database in MongoDB Compass?

    Open MongoDB Compass.
    Enter the connection string (e.g., mongodb://localhost:27017).
    Click "Connect" to access the database.


8️⃣ What is MongoDB Extension for VS Code?

    ✅ The MongoDB VS Code extension allows you to:

        Connect to a MongoDB database directly from VS Code.
        Run MongoDB queries inside VS Code (like Mongo Shell).
        View and modify collections easily.

    📌 To install:

        Open VS Code.
        Go to Extensions (Ctrl+Shift+X).
        Search for MongoDB and install it.
        Connect to your MongoDB database.
    💡 This helps developers manage their databases without switching to MongoDB Compass or Mongo Shell.








Small talk is first purest object oriented language.
Alan Kay coined the term OOP.



Does JS support classes? YES and NO
Before ES6 JS had no concept of classes. JS is prototype based language which primarily focus on functional style of programming.
What is meant by syntactic sugar?
Classes which add in JS are JS are under the hood syntactic sugar on functions, means if we make class in JS then behind the scenes it converts into functions.
Syntactic sugar is 60% and 40% new features added from OOP. What are the 40% features added? 



Procedural vs OOP 
In procedural programming we do tasks or work with the help of functions.
Advantages and Disadvantages
What problems we face in procedural programming and how OOP solve these problems?
(1) Security  (2) Reuseability  (3) Addition of new functionalities
What are the problems of OOP?



Classes and Objects
Classes donot exit in real and that a y77abstract concept and objects are the real entities and objects communicate with each other.
A class is a factory of objects.
Classes describe data structure(objects) and algorithms(methods) and external links means communicating by another class by extending it.
Class is the definition of the object means it tells us how object is made and provide complete compatability to solve a problem.

Types of classes
(1) Data classes  (2) Behavioural classes

Creating class and object:

class superHero{
    // Creating a variable 
    superHeroName = 'Spider Man'

   // Creating functions
    getSuperHeroName(){
       return superHeroName
     }
} 
Scope of this class 
How can we access the variables and functions of the class. We cannot access these directly. For this we have to create an instance of the object.
const hero = new superHero()
console.log(hero) 
console.log(hero.superHeroName)     //  Spider Name
console.log(hero.getSuperHeroName)  // Error: superHeroName is not defined  why??
because in the superhero class there is a method getSuperHeroName in this method if you have to use variable of this class you have to use it like this.superHeroName So correct syntax is 
     getSuperHeroName(){
          return this.superHeroName
      }



Constructor 
Constructor helps us in setting initial values 
constructor automatically calls when i create an instance of the object 


Difference between function call and message passing if i call a function in class like this.functionCall() then it is a function call and if i call a function by creating instance of object like obj.functionCall then it is a message passing 

Inheritance and extends keyword 

Super keyword:  Way to pass information in a parent class constructor 
Super keyword is used to access parent class
If i want to call methods of parent class which is also same in child class then i use super keyword
Method overriding and Method overloading 


Encapsulation // collecting all at one place and Informtion hiding

Abstraction // Implementation hiding 

Difference betwenencapsultion and abstraction

By default JS has no abstraction

Polymorphism: Ability to do multiple things

Public and Private and # and there is also a third access modifier protected but in JS it is not used

Interface and implements keywords but JS has no built in interface but we can acces it by a feature JS doc

static keyword: Information is only limited to the class not to the instance of the object and what is this in static class