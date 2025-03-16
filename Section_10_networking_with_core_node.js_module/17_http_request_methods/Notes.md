🔥 What is Idempotent and Safe in HTTP Methods?

    1️⃣ Idempotent 🔁
    
        👉 Idempotent means:

            If a client sends the same request multiple times to the server, the final state of the server will always be the same.

            ✅ Example: If you transfer ₹1000 to your friend using online banking,

                If you click the Pay Now button 10 times, only ₹1000 will be transferred once 💰.


    2️⃣ Safe 🔐

        👉 Safe means:

            If a request does not modify any data on the server, then it is called Safe.


    🔥🚀 How to Understand This with Examples 🔥🚀

        HTTP Method	    Idempotent 🔁	     Safe 🔐	      Example
        GET	            ✅ Yes	            ✅ Yes	        Google search 🔍
        POST	        ❌ No	            ❌ No	        Creating an account 🧑‍💻
        PUT	            ✅ Yes	            ❌ No	        Update profile picture 🖼️
        PATCH	        ❌ No (Maybe)	    ❌ No	        Update username
        DELETE	        ✅ Yes	            ❌ No	        Delete user account
        HEAD	        ✅ Yes	            ✅ Yes	        Check if a file exists
        OPTIONS	        ✅ Yes	            ✅ Yes	        Ask server which methods are allowed


    🔥 Diagram Explanation:
        
        Client                 Server
        |                      |
        | ---- GET ----->      | 🔍 Just Fetch Data (Safe + Idempotent ✅✅)
        |                      |
        | ---- POST ---->      | 🧑‍💻 Create New User (Not Idempotent ❌❌)
        |                      |
        | ---- PUT ----->      | 🔄 Update User (Idempotent ✅ but Not Safe ❌)
        |                      |
        | ---- PATCH ---->     | 🔥 Update Username (Not Idempotent ❌❌)
        |                      |
        | ---- DELETE ---->    | 💀 Delete User (Idempotent ✅ but Not Safe ❌)
        |                      |



🔑 Now Let's Break Down Each Method:

    1. GET Method 🔍
     
        👉 It is Idempotent ✅ and Safe ✅.

        Example:

            GET /user/123
            This only retrieves user data.
            Server state will not change.


    2. POST Method 🧑‍💻
     
        👉 It is Not Idempotent ❌ and Not Safe ❌.

        Example:

            POST /user
            Body: { "name": "Ali", "age": 20 }
            If you send this request 10 times, the server will create 10 users.


    3. PUT Method 🔄
     
        👉 It is Idempotent ✅ but Not Safe ❌.

        Example:

            PUT /user/123
            Body: { "name": "Ali", "age": 22 }
            If you send this request 10 times, the user will update once.


    4. PATCH Method 🔥
     
        👉 It is Not Idempotent ❌ and Not Safe ❌.

        Example:

            PATCH /user/123
            Body: { "age": 23 }
            If you send this request multiple times, the age will keep changing.


    5. DELETE Method 💀
     
        👉 It is Idempotent ✅ but Not Safe ❌.

        Example:

            DELETE /user/123
            If you delete the user once, sending the request again will not delete anything.


    6. HEAD Method 🤔
     
        👉 It is Idempotent ✅ and Safe ✅.

        Example:

            HEAD /user/123
            It just checks if the user exists and does not modify any data.


    7.  OPTIONS Method ❓
     
        👉 It is Idempotent ✅ and Safe ✅.

        Example:

            OPTIONS /user/123
            It asks the server: 👉 What methods are allowed?
            (GET, POST, PUT, DELETE)


    🔥 Now Important Point:

        HTTP Method	    Idempotent 🔁	     Safe 🔐	          Data in Request
        GET	            ✅ Yes	            ✅ Yes	            ❌ No
        POST	        ❌ No	            ❌ No	            ✅ Yes
        PUT	            ✅ Yes	            ❌ No	            ✅ Yes
        PATCH	        ❌ No	            ❌ No	            ✅ Yes
        DELETE	        ✅ Yes	            ❌ No	            ❌ No
        HEAD	        ✅ Yes	            ✅ Yes	            ❌ No
        OPTIONS	        ✅ Yes	            ✅ Yes	            ❌ No


    🔥 Final Brain Map:
   
        Safe ✅    -> No Change 🔐
        Not Safe ❌ -> Change 🔥
        Idempotent ✅ -> Same Result on Multiple Requests 🔁
        Not Idempotent ❌ -> Different Result on Multiple Requests 🔄


    🔥 Now Your Answer:

        Question	                Answer
        What is Idempotent?	        If the final state of server does not change on multiple requests
        What is Safe?	            If the request does not modify any data
        Is PATCH Idempotent?	    ❌ No (It depends on the case)
        Is GET Safe?	            ✅ Yes
        Is POST Idempotent?	        ❌ No


    💪 Conclusion:

    Method	    Idempotent	     Safe
    GET	        ✅	            ✅
    POST	    ❌	            ❌
    PUT	        ✅	            ❌
    PATCH	    ❌	            ❌
    DELETE	    ✅	            ❌


