🚀 Creating a Custom EventEmitter in Node.js:

    In Node.js, we usually use the built-in EventEmitter from the events module. But what if you want to create your own custom EventEmitter? Let's build it from scratch!

📌 What is a Custom EventEmitter?

    A Custom EventEmitter is a user-defined class that mimics the behavior of Node.js' built-in EventEmitter. It allows you to: ✔ Register event listeners 👂
        ✔ Emit events 🎤
        ✔ Remove listeners ❌
        ✔ Handle multiple listeners 🔄

🌟 Steps to Build a Custom EventEmitter:

    1️⃣ Create a class MyEventEmitter
    2️⃣ Implement on(), emit(), off(), and once() methods
    3️⃣ Store event listeners in an object
    4️⃣ Execute event listeners when the event is emitted

🔥 Step-by-Step Implementation:


        class MyEventEmitter {
                constructor() {
                    this.events = {};  // Store event listeners
                }

                // 1️⃣ Add Event Listener
                on(eventName, listener) {
                    if (!this.events[eventName]) {
                    this.events[eventName] = [];
                    }
                    this.events[eventName].push(listener);
                }

                // 2️⃣ Emit Event
                emit(eventName, ...args) {
                    if (this.events[eventName]) {
                    this.events[eventName].forEach((listener) => listener(...args));
                    }
                }

                // 3️⃣ Remove Specific Listener
                off(eventName, listenerToRemove) {
                    if (this.events[eventName]) {
                    this.events[eventName] = this.events[eventName].filter(
                        (listener) => listener !== listenerToRemove
                    );
                    }
                }

                // 4️⃣ Add a One-Time Listener
                once(eventName, listener) {
                    const wrapper = (...args) => {
                    listener(...args);
                    this.off(eventName, wrapper); // Remove after execution
                    };
                    this.on(eventName, wrapper);
                }

                // 5️⃣ Remove All Listeners
                removeAllListeners(eventName) {
                    if (this.events[eventName]) {
                    delete this.events[eventName];
                    }
                }
        }


🔥 Using the Custom EventEmitter:

    const myEmitter = new MyEventEmitter();

    🌟 Define event listener:
        
        const greetUser = (name) => console.log(`Hello, ${name}!`);
        myEmitter.on("greet", greetUser);

    🌟 Emit event:

        myEmitter.emit("greet", "Alice");  // Output: Hello, Alice!

    🌟 Remove listener:

        myEmitter.off("greet", greetUser);
        myEmitter.emit("greet", "Bob");    // ❌ No Output (Listener Removed)

    🌟 One-time listener:

        myEmitter.once("welcome", (user) => console.log(`Welcome, ${user}!`));
        myEmitter.emit("welcome", "Charlie");  // Output: Welcome, Charlie!
        myEmitter.emit("welcome", "Dave");     // ❌ No Output (Listener Removed)


📊 Visualizing the Custom EventEmitter:

    User Registers Listener 👂  --->  Stored in `events` Object 📂  
                                        
    User Emits Event 🎤  --->  Matching Listeners Run 🔄  

    User Removes Listener ❌  --->  No Response on Next Emit 🚫


🛠️ Breakdown of Methods:

    Method	                            Description
    .on(eventName, callback)	        Attach a listener to an event
    .emit(eventName, ...args)	        Trigger an event and execute all listeners
    .off(eventName, callback)	        Remove a specific listener
    .once(eventName, callback)	        Listener runs only once, then removed
    .removeAllListeners(eventName)	    Remove all listeners for an event


🚀 Why Build a Custom EventEmitter?

    ✔ Understand how event-driven systems work
    ✔ Can customize behavior to fit your needs
    ✔ Useful for frameworks, custom APIs, and microservices

🔥 Final Thoughts:

    You just built a fully functional EventEmitter from scratch! 🎉
