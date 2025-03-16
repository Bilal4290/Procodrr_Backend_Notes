📌 What is Status Code?

    Status codes tell the client what happened with their request.

        ✅ 200 OK → Everything is fine
        ❌ 404 Not Found → The resource is not available
        🚫 403 Forbidden → Access is not allowed


🎯 How to Set Status Code in Node.js:

    res.statusCode = 200; // ✅ Setting status code


💪 Important HTTP Status Code Categories:

    Status Code	    Meaning	                Description
    1xx	            Informational 🔵	    Request is received, keep going
    2xx	            Success ✅	           Everything is OK
    3xx	            Redirection 🔀	        Go somewhere else
    4xx	            Client Error ❌	       Client made a mistake
    5xx	            Server Error 🔥	        Server is broken





| **Status Code** | **Reason Phrase**                     | **Description**                                                                 |
|------------------|--------------------------------|---------------------------------------------------------------------------------|
| **1xx: Informational** |                              |                                                                                 |
| 100              | Continue                      | The server has received the request headers and is waiting for the body.       |
| 101              | Switching Protocols           | The server is switching protocols as requested by the client.                  |
| **2xx: Success**      |                              |                                                                                 |
| 200              | OK                            | The request was successful.                                                    |
| 201              | Created                       | The request was successful, and a resource was created.                        |
| 204              | No Content                   | The server successfully processed the request, but no content is returned.     |
| **3xx: Redirection**  |                              |                                                                                 |
| 301              | Moved Permanently             | The resource has been permanently moved to a new location.                     |
| 302              | Found                         | The resource is temporarily located at a different URL.                        |
| 304              | Not Modified                 | The cached version of the requested resource is still valid.                   |
| **4xx: Client Error**   |                              |                                                                                 |
| 400              | Bad Request                   | The server could not understand the request due to invalid syntax.             |
| 401              | Unauthorized                  | Authentication is required to access the resource.                             |
| 403              | Forbidden                     | The client does not have permission to access the resource.                    |
| 404              | Not Found                    | The requested resource could not be found.                                     |
| 405              | Method Not Allowed            | The HTTP method used is not allowed for the resource.                          |
| 429              | Too Many Requests             | The client has sent too many requests in a given time frame.                   |
| **5xx: Server Error**   |                              |                                                                                 |
| 500              | Internal Server Error         | The server encountered an unexpected condition.                                |
| 501              | Not Implemented              | The server does not recognize or cannot fulfill the request method.            |
| 502              | Bad Gateway                  | The server received an invalid response from an upstream server.               |
| 503              | Service Unavailable           | The server is temporarily unable to handle the request.                        |
| 504              | Gateway Timeout              | The server did not receive a timely response from an upstream server.          |
