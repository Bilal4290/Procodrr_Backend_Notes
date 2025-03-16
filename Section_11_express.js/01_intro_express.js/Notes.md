=>  Express JS:

         Web framework for NodeJS


=>  Express JS  =>  Unopinionated

=>  Nest Js     =>  Opinionated

=>  Both Express.js and Nest.js made on Node.js


=>  How to install express?

       First, we have to create package.json file:
             npm init -y

       Now, we can install express by the following command:
             npm i express

       After running npm i express, two things happens:
             1. package-lock.json file created
             2. node_modules folder created

=>  How to create a server using express:

       First, create a js file  e.g: app.js

       app.js file
          
           import express from express

           const app = express()

           app.listen(port)



=>  What is express behind the scenes?

        import express from 'express';
        console.log(express);

        You will see a function named createApplication logged to the console. This function is the core of the Express framework.


=>   What is createApplication?

        The createApplication function is the main function of Express. When you call it, it creates an instance of an Express application.

        const app = express();


        What does createApplication return?

            When you call express(), it internally invokes createApplication, which returns an object representing an Express application. This object contains properties and methods that are essential for building your web server.


       What properties and methods does the Express app object have?

        Core Methods

          
          1. app.get(route, callback)
          2. app.post(route, callback)
          3. app.put(route, callback)
          4. app.patch(route, callback)
          5. app.delete(route, callback)
          6. app.use()
          7. app.listen(port,callback)
          8. app.disable(header which you want to disable)



=>   Difference between res.send and res.end?

       1. res.send():
              ⭐ It is a higher-level method provided by Express.
              ⭐ Automatically sets headers, such as:
                        Content-Type based on the data you send (e.g., text/html, application/json, etc.).
                        Content-Length based on the size of the response.
              ⭐ It writes the response and ends it automatically.
              ⭐ By default, browsers render the response in a "properly formatted" way, e.g., white background with black text if it's plain text. 


             Headers Automatically Set by res.send():

                  All headers from res.end() (i.e., Connection, Content-Length, Date, Keep-Alive).
                  Content-Type: Specifies the type of content in the response body. For example:
                        If you send a string, the Content-Type is set to text/plain; charset=utf-8.
                        If you send an object or array, it sets application/json.
                  X-Powered-By: Indicates the technology used to build the application (Express). This header can be disabled for security reasons (explained below).



       2. res.end():
        
             ⭐ It is a lower-level method provided by Node.js (http.ServerResponse).
             ⭐ It doesn’t automatically set headers, nor does it automatically assume the content type.
             ⭐ It simply ends the response without additional processing.
             ⭐ Since no headers are set, the browser often interprets it as raw data or unknown content, rendering it differently (e.g., with a black background and white text in some browsers).

             How to Fix the Issue with res.end()?
                  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                  res.end('Hello, World!');


             Headers Automatically Set by res.end():

                  ⭐ Connection: Specifies whether the connection to the client should remain open (keep-alive) or close.
                  ⭐ Content-Length: Specifies the length of the response body in bytes. This is required for the client to know when the response ends.
                  ⭐ Date: The current date and time when the response is sent.
                  ⭐ Keep-Alive: If Connection: keep-alive is set, this header specifies how long the connection should remain open.



            Why Should You Disable the X-Powered-By Header?

                  The X-Powered-By: Express header reveals that your application is built using Express. This information can be helpful for attackers because:

                  They can use known vulnerabilities or exploits targeting Express applications.
                  It gives them a clue about the stack you're using, allowing them to focus their attacks.

            
            How to Disable the X-Powered-By Header:

                  app.disable('x-powered-by');