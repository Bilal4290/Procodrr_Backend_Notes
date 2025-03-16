📌 Why Set a Global Error Middleware in Express?

    Global error-handling middleware is essential in Express because:

        ⭐ Centralized Error Handling: Instead of handling errors in every route separately, all errors are caught in one place.
        ⭐ Improved Code Maintainability: Reduces redundant error-handling logic in routes.
        ⭐ Better Debugging: Can log errors properly before sending responses.
        ⭐ Consistent Error Responses: Ensures that error responses follow a consistent format.

✅ Example: Global Error Middleware

    app.use((err, req, res, next) => {
        console.error(err.stack); // Log the error
        res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
    });

    This catches any unhandled errors from your routes and prevents the app from crashing.

📌 Error Handling in Different Scenarios:

    ✅ Handling File Not Found in a GET Request

        if (!fileData) {
            return res.status(404).json({ message: 'File not found!' });
        }

    👉 Why?

        404 Not Found is used when the requested resource does not exist.


    ✅ Handling Errors in Async Operations (Using try-catch):

        Always wrap async operations in a try-catch block to catch errors and pass them to the error handler.

        app.get('/data', async (req, res, next) => {
            try {
                const data = await fetchData();
                return res.json({ data });
            } catch (error) {
                next(error); // Pass error to global error handler
            }
        });

        👉 Why?

            Async functions don’t automatically propagate errors to Express, so you need try-catch with next(error).


    ✅ Handling File Not Found in a DELETE Request

        if (fileIndex === -1) {
            return res.status(404).json({ message: 'File not found!' });
        }

        👉 Why?

            A 404 is used when the resource to be deleted doesn’t exist.


📌 Common HTTP Status Codes Used in Day-to-Day Development:

    Status Code	                        Meaning	                    When to Use?

    200 OK	                            Success	                    When a request is successfully processed and returns data.

    201 Created	                        Resource Created	        When a file, user, or data entry is created successfully.

    204 No Content	                    Success, No Response	    When an operation (like DELETE) is successful, but no data is returned.

    400 Bad Request	                    Client Error	            When the request is malformed or has invalid data.

    401 Unauthorized	                Authentication Needed	    When the user is not logged in.

    403 Forbidden	                    No Permission	            When the user is authenticated but doesn’t have the right permissions.

    404 Not Found	                    Resource Not Found	        When the requested file, user, or page doesn’t exist.

    500 Internal Server Error	        Server Crash	            When an unexpected error happens on the server.


✅ When to Use 201, 200, or 204?

    201 Created → When a file, directory, or user is successfully created.
    200 OK → When a request is successful and data is returned (GET, PUT, PATCH).
    204 No Content → When a DELETE request succeeds but there’s no response body needed.


🔥 Final Tip: Always Use return Before res.json():

    Always use return res.json({...}) to prevent multiple responses from being sent.

    ❌ Wrong way:

        if (!fileData) {
            res.status(404).json({ message: 'File not found!' }); // No return statement
        }
        res.json({ fileData });


    ✔ Correct way:

        if (!fileData) {
            return res.status(404).json({ message: 'File not found!' });
        }
        return res.json({ fileData });


    👉 Why?

        Without return, the next res.json() might run, causing an error: "Cannot set headers after they are sent."

🚀 Final Thoughts:

    Always use global error middleware.
    Use try-catch in async functions.
    Use return res.json() to prevent multiple responses.
    Use the correct HTTP status codes for better API communication.