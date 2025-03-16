🔑 What is Preflight Request?

    A Preflight Request is an automatic request sent by the browser before the actual request to check if the server allows:

        Methods like PUT, PATCH, DELETE
        Custom Headers
        Non-Simple Content Types

📌 When Does Preflight Request Happen?

    Preflight request automatically happens when:

        Request Method is PUT, PATCH, DELETE.
        Custom Headers like filename, Authorization are added.
        Content-Type is not application/x-www-form-urlencoded, multipart/form-data, or text/plain.

    ✅ Simple Requests (No Preflight):

        GET
        POST
        HEAD

    Only allowed headers:

        Content-Type (Allowed: application/x-www-form-urlencoded, multipart/form-data, text/plain)
        Accept
        Referer
        User-Agent


📌 1. Why GET, POST, and HEAD are Simple Requests (Due to HTML Forms Before Fetch API)?

    👉 Before Fetch API was introduced, web browsers used HTML forms to send data to the server.

    Example:

        <form action="http://192.168.100.89:3000" method="GET">
            <input type="text" name="username">
            <button>Submit</button>
        </form>

    HTML forms only support three request methods:

    That's why browsers automatically allowed these requests without CORS preflight — because HTML forms existed before CORS and Fetch API.

📌 2. Why GET and POST are Not Dangerous?

    ✅ GET — It only retrieves data from the server, without making any changes.

    ✅ POST — It only adds new data on the server without modifying or deleting existing data.

    Example:

        GET request:

            fetch('http://192.168.100.89:3000/users')

        POST request:

            fetch('http://192.168.100.89:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: 'John' })
            })
            
        👉 These requests are not harmful because they only read or add data.

📌 3. Why PUT, PATCH, DELETE Are Dangerous?

    🔥 These methods can modify or delete data on the server, which can be harmful.

    Example:

        PUT — Update entire data:

            fetch('http://192.168.100.89:3000/users/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: 'John Updated' })
            })

        PATCH — Update partial data:

            fetch('http://192.168.100.89:3000/users/1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: 'John Updated' })
            })

        DELETE — Delete data:

            fetch('http://192.168.100.89:3000/users/1', {
                method: 'DELETE'
            })

    🔥 Why Preflight Request Here?
        
        These methods can change or delete data, so the browser automatically sends a preflight OPTIONS request to ask the server:

        "Hey Server! Do you allow this request method?"

📌 4. How Allow Header Tells Browser Which Methods Are Allowed?

    In CORS, the server sends a special response header:

    Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE

    ✅ This header tells the browser:

        Which HTTP methods are allowed.
        If the method is not listed here, browser blocks the request.

📌 5. What is HEAD Request?

    👉 The HEAD request is just like GET request but without a response body.

    Example:

        fetch('http://192.168.100.89:3000', { method: 'HEAD' })

    ❓ Why Browser Ignores Data in HEAD Request?

    If you try to send data like this:

        fetch('http://192.168.100.89:3000', {
        method: 'HEAD',
        headers: { 'filename': 'file.txt' },
        body: JSON.stringify({ name: 'John' })
        })

    👉 The body will be automatically ignored by the browser.

📌 6. Why Custom Headers Like filename Trigger Preflight Request?

    Browsers only allow some headers in Simple Requests:

        Allowed Headers	        Disallowed Headers
        Accept	                filename
        Content-Type	        Authorization
        User-Agent	            X-Custom-Header

    Example:

        fetch('http://192.168.100.89:3000', {
            method: 'GET',
            headers: { 'filename': 'file.txt' }
        })

    👉 This request will automatically trigger Preflight Request because the filename header is not allowed in simple requests.

🎯 Final Summary:

    Request Type	                Preflight Request
    GET	                            ❌ No
    POST	                        ❌ No
    HEAD	                        ❌ No
    GET with Custom Header	        ✅ Yes
    POST with Custom Header	        ✅ Yes
    PUT	                            ✅ Yes
    PATCH	                        ✅ Yes
    DELETE	                        ✅ Yes

Which Headers Allow Simple Requests?

    Allowed Headers	                        Preflight Needed
    Accept	                                ❌ No
    Content-Type (text/plain)	            ❌ No
    Content-Type (application/json)	        ✅ Yes
    filename	                            ✅ Yes


🔥 CORS Best Practice:

    Always use cors package instead of setting headers manually:

        const cors = require('cors')
        app.use(cors())