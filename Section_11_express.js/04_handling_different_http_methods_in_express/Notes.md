🔥 What are HTTP Methods?

    HTTP methods are actions that the client (browser, app, Postman, etc.) performs on the server.

Express.js provides methods like:

    app.get() 🧐
    app.post() ✍️
    app.put() 🔄
    app.patch() 🔧
    app.delete() ❌


1. app.get(route, callback) 🧐
 
    👉 Used to READ Data (Retrieve Information)

    📌 Example:

        app.get('/users', (req, res) => {
        res.send("Get All Users");
        });

    💪 What happens?

        Client asks 👉 "Hey server, give me the list of users!"
        Server responds 🔥 Here is your list of users!


2. app.post(route, callback) ✍️
 
    👉 Used to CREATE Data (Submit Information)

    📌 Example:

        app.post('/users', (req, res) => {
        res.send("User Created");
        });

    💪 What happens?

        Client asks 👉 "Hey server, create a new user!"
        Server responds ✅ User Created!


3. app.put(route, callback) 🔄
 
    👉 Used to UPDATE Entire Data (Replace Whole Data)

    📌 Example:

        app.put('/users/:id', (req, res) => {
        res.send(`User ${req.params.id} Updated`);
        });

    💪 What happens?

        Client asks 👉 "Hey server, update user 123 with this new data!"
        Server responds 🔄 User 123 updated completely!


4. app.patch(route, callback) 🔧
 
    👉 Used to UPDATE Partial Data (Modify Some Fields)

    📌 Example:

        app.patch('/users/:id', (req, res) => {
        res.send(`User ${req.params.id} Partially Updated`);
        });

    💪 What happens?

        Client asks 👉 "Hey server, only update the email of user 123!"
        Server responds 🔧 User 123's email updated!


5. app.delete(route, callback) ❌
6. 
    👉 Used to DELETE Data

    📌 Example:

        app.delete('/users/:id', (req, res) => {
        res.send(`User ${req.params.id} Deleted`);
        });

    💪 What happens?

        Client asks 👉 "Hey server, delete user 123!"
        Server responds 🚫 User 123 deleted!


🔥 DIAGRAM 📊 (With Emojis)

                Client Request 🔥
                    🔽
    ----------------------------------------
    |   HTTP Method    |    Action       |
    ----------------------------------------
    | GET     🧐      | Read Data       |
    | POST    ✍️      | Create Data     |
    | PUT     🔄      | Update (Whole)  |
    | PATCH   🔧      | Update (Partial)|
    | DELETE  ❌      | Delete Data     |
    ----------------------------------------
                    🔼
                Server Response 🎯


🎯 How They Work Together in CRUD Operations:

    Method	    Action	            Example URL
    GET	        Read	            /users
    POST	    Create	            /users
    PUT	        Update (Full)	    /users/123
    PATCH	    Update (Part)	    /users/123
    DELETE	    Delete	            /users/123


🔥 BONUS 🔥

    ✅ Easy Rule to Remember:

        Method	    Purpose	            Body Required?
        GET	        Read	            ❌ No
        POST	    Create	            ✅ Yes
        PUT	        Update (Full)	    ✅ Yes
        PATCH	    Update (Part)	    ✅ Yes
        DELETE	    Delete	            ❌ No


💡 Final Visual MindMap 🧠

    CRUD Operations 🌐
    ----------------------------------
    | CREATE  | POST    | ✍️        |
    | READ    | GET     | 🧐        |
    | UPDATE  | PUT     | 🔄        |
    | UPDATE  | PATCH   | 🔧        |
    | DELETE  | DELETE  | ❌        |
    ----------------------------------
