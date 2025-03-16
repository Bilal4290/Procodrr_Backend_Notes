🌟 EventEmitter Class in Node.js

📌 What is EventEmitter in Node.js?

    In Node.js, the EventEmitter class from the 'events' module is used to create and manage events. It allows you to:
    ✔ Emit events 🎤
    ✔ Listen to events 👂
    ✔ Handle events 🎯

    Since Node.js is event-driven, many built-in modules (like Streams, HTTP, and File System) rely on EventEmitter.


🔹 How to Use EventEmitter in Node.js:

    1️⃣ Importing EventEmitter & Creating an Instance:

        import EventEmitter from 'events';
        const emitter = new EventEmitter();  // Creating an EventEmitter object

        📌 Now, emitter can emit and listen for events.

    🚀 Key Methods of EventEmitter:
        
    2️⃣ Attaching an Event Listener: emitter.on('eventName', callback) 👂

        ✅ This method registers an event listener for a specific event.

                emitter.on('greet', (name) => {
                    console.log(`Hello, ${name}!`);
                });

            🖼 Diagram:

                User Emits Event 🎤  --->  Event Listener 👂  --->  Event Handler 🎯



    3️⃣ Emitting an Event: emitter.emit('eventName', data) 🎤

        ✅ This triggers an event, calling all the attached listeners.

            emitter.emit('greet', 'Alice');

            📌 Output:

                Hello, Alice!

            🖼 Diagram:

                 Emitter.emit('greet', 'Alice')  --->  Listener Catches It 👂  --->  Function Runs 🎯


    4️⃣ Handling a One-Time Event: emitter.once('eventName', callback) ⏳

        ✅ The once method ensures that the event listener runs only once.

            emitter.once('login', (user) => {
                console.log(`${user} logged in!`);
            });

            emitter.emit('login', 'John');  // Runs
            emitter.emit('login', 'Jane');  // Ignored

            📌 Output:

                John logged in!

            🖼 Diagram:

                 Event First Time 🔄  --->  Handler Runs 🎯  --->  Next Time Ignored ❌


    5️⃣ Removing Event Listeners: emitter.off() & emitter.removeListener() ❌

        ✅ Remove a specific event listener.

            const sayHello = (name) => console.log(`Hello, ${name}!`);
            emitter.on('greet', sayHello);

            emitter.removeListener('greet', sayHello);
            emitter.emit('greet', 'Alice');  // ❌ No output

            📌 No output because the listener was removed.


    6️⃣ Removing All Listeners: emitter.removeAllListeners('eventName') 🚫

        ✅ Removes all listeners attached to an event.

            emitter.on('greet', (name) => console.log(`Hi, ${name}!`));
            emitter.on('greet', (name) => console.log(`Hello, ${name}!`));

            emitter.removeAllListeners('greet');
            emitter.emit('greet', 'Alice');  // ❌ No output

            📌 All event listeners for 'greet' are removed.


    7️⃣ Setting Max Listeners: emitter.setMaxListeners(count) 🚀
            
        ✅ By default, Node.js allows 10 listeners per event. You can increase or decrease this.

            emitter.setMaxListeners(20);  // Now, up to 20 listeners can be added per event.

            📌 This prevents memory leaks when adding too many listeners.



    🌊 Streams in Node.js are Based on EventEmitter:

        Streams (fs.createReadStream, http.ServerRequest, etc.) use EventEmitter to handle data flow.

        Example: Readable Stream using EventEmitter

            import fs from 'fs';

            const stream = fs.createReadStream('file.txt');

            stream.on('data', (chunk) => {
                console.log(`Received Data: ${chunk}`);
            });

            stream.on('end', () => {
                console.log('File reading finished.');
            });

        📌 Here,

            ✔ data event fires when new data is available.
            ✔ end event fires when reading is done.



📊 Summary of EventEmitter Methods:

    Method	                                    Description
    emitter.on('event', cb)	                    Listens to an event
    emitter.emit('event', data)	                Emits an event
    emitter.once('event', cb)	                Listens to an event only once
    emitter.off('event', cb)	                Removes a specific listener
    emitter.removeListener('event', cb)	        Another way to remove a listener
    emitter.removeAllListeners('event')	        Removes all listeners for an event
    emitter.setMaxListeners(count)	            Sets max number of listeners


    🚀 Final Thoughts:

        EventEmitter makes event-driven programming easy in Node.js.
        Streams, HTTP requests, and File System modules rely on it.
        Helps build real-time apps, chat apps, notifications, and more!





🎯 EventTarget in Node.js

📌 What is EventTarget?

    EventTarget is a built-in class in Node.js (since v14) that provides a standardized event mechanism similar to the DOM EventTarget API used in browsers.

🔹 Difference Between EventTarget and EventEmitter

    Feature	          EventTarget 🌍	                                             EventEmitter 🎤
    API Similarity	  Works like browser's EventTarget (DOM events)	                 Custom event-based system in Node.js
    Methods	          .addEventListener(), .removeEventListener(), .dispatchEvent()	 .on(), .off(), .emit()
    Compatibility	  Standardized Web API	                                         Node.js-specific API
    Use Cases	      Web APIs, Standardized Event Handling	                         Streams, HTTP, File System



⚡ How to Use EventTarget in Node.js:

    Unlike EventEmitter, which is more common in Node.js, EventTarget is used for standardized event handling.

    1️⃣ Creating an EventTarget Instance
   
         const { EventTarget, Event } = require('events');
         const target = new EventTarget();

    2️⃣ Adding an Event Listener: .addEventListener(event, callback) 👂

        target.addEventListener('hello', (event) => {
        console.log(`Hello event received with data: ${event.detail}`);
        });

        📌 Here:
            ✔ addEventListener() listens for "hello" events.
            ✔ event.detail contains extra event data.

    3️⃣ Dispatching an Event: .dispatchEvent(event) 🎤

        const event = new Event('hello', { detail: 'Welcome to Node.js!' });
        target.dispatchEvent(event);

        📌 Output:

            Hello event received with data: Welcome to Node.js!

        📌 Here:
            ✔ dispatchEvent() triggers the "hello" event.
            ✔ The event listener catches it and executes the callback.

    4️⃣ Removing an Event Listener: .removeEventListener(event, callback) ❌
    
        const callback = (event) => {
            console.log(`Hello again, ${event.detail}`);
        };

        target.addEventListener('hello', callback);
        target.removeEventListener('hello', callback);

        target.dispatchEvent(new Event('hello', { detail: 'Alice' })); // ❌ No output

        📌 Here:
            ✔ We add a listener and then remove it before emitting the event.
            ✔ The event doesn't trigger any response.



📊 EventTarget vs. EventEmitter: When to Use?

    Scenario	                    Use EventEmitter 🎤	        Use EventTarget 🌍
    Custom Events in Node.js	    ✅ Yes	                   ❌ No
    Streams, File System, HTTP	    ✅ Yes	                   ❌ No
    Web-like Standard Events	    ❌ No	                   ✅ Yes
    Browser/DOM Compatibility	    ❌ No	                   ✅ Yes

    🚀 EventEmitter is preferred in Node.js, but EventTarget is useful for standardized web-like event handling.

🔥 Final Thoughts:

    EventTarget in Node.js follows browser-like event handling.
    It's useful for Web APIs, WebAssembly, and standard event handling.
    EventEmitter is still the default for event-driven apps in Node.js.







