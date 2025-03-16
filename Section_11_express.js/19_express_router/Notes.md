📌 Understanding Express.Router()

    In Express.js, express.Router() is a mini version of the main Express app, specifically designed for handling routes in a modular way.


1️⃣ What is express.Router()?

    ✅ It allows us to define routes separately and organize them better.
    ✅ It helps in keeping our codebase clean and modular.
    ✅ It acts like a mini Express app but only for handling routes.


2️⃣ Why Do We Need express.Router()?

    Without Router, all routes are written in one file (server.js), which makes it messy and hard to maintain.

    Using express.Router(), we can split routes into separate files, making them more manageable.

    🔴 Without Router (Messy Approach)

        import express from 'express';
        const app = express();

        app.get('/files', (req, res) => res.send('📂 File List'));
        app.post('/files', (req, res) => res.send('📁 File Uploaded'));
        app.get('/directory', (req, res) => res.send('📂 Directory List'));

        app.listen(4000, () => console.log('Server running'));

    🚨 Issue:

        All routes are in one place → Hard to maintain.
        Not reusable → Can't separate logic for files & directories.


3️⃣ Using Router (Better Approach):

    ✅ We create separate route files like fileRoutes.js and directoryRoutes.js.
    ✅ Import them into server.js to keep things modular.


📂 Folder Structure:
   
    📁 project-folder
    ├── 📁 routes
    │   ├── fileRoutes.js
    │   ├── directoryRoutes.js
    ├── server.js


📝 fileRoutes.js (Handles File Routes)

    import express from 'express';
    const router = express.Router(); // Creating a Router instance

    router.get('/', (req, res) => res.send('📂 File List'));
    router.post('/', (req, res) => res.send('📁 File Uploaded'));

    export default router; // Exporting the router


📝 directoryRoutes.js (Handles Directory Routes)

    import express from 'express';
    const router = express.Router();

    router.get('/', (req, res) => res.send('📂 Directory List'));
    router.post('/', (req, res) => res.send('📁 Directory Created'));

    export default router;


📝 server.js (Main Server File)

    import express from 'express';
    import cors from 'cors';
    import fileRoutes from './routes/fileRoutes.js';
    import directoryRoutes from './routes/directoryRoutes.js';

    const app = express();
    const PORT = 4000;

    app.use(cors());
    app.use(express.json());

    // Mounting the route files
    app.use('/files', fileRoutes);  // All /files routes handled in fileRoutes.js
    app.use('/directory', directoryRoutes);  // All /directory routes handled in directoryRoutes.js

    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });


    ✅ Now, when we visit:

        GET /files → "📂 File List"
        POST /files → "📁 File Uploaded"
        GET /directory → "📂 Directory List"
        POST /directory → "📁 Directory Created"

    🚀 Now our server.js is clean and easy to manage!



4️⃣ What is console.log(router)?

    If you console.log(router), it returns an object with routing-related functions.

    Example:

        const router = express.Router();
        console.log(router);

    🔹 Output (Simplified Version):


        {
        "stack": [],
        "params": {},
        "methods": {}
        }


🚀 What is Inside router?

    stack → Stores middleware and route handlers.
    params → Stores route parameters.
    methods → Defines which HTTP methods are supported.

    Is router a function?

        NO, it is an object with multiple functions inside it.
        It acts as a mini Express app for handling routes.


5️⃣ When Should We Use express.Router()?

    ✅ When we have many routes, and we want modular organization.
    ✅ When we want to separate different functionalities (e.g., fileRoutes.js & directoryRoutes.js).
    ✅ When we want to reuse routers across different parts of the app.

🚀 Conclusion:

    Feature	                Without Router	         With Router
    Code Organization	    ❌ Messy	                ✅ Clean & Modular
    Reusability	            ❌ No	                ✅ Yes
    Scalability	            ❌ Hard to scale	        ✅ Easy to scale
    Maintainability	        ❌ Difficult	            ✅ Easy

💡 Best Practice: Always use express.Router() for better structure and scalability! 🚀