What is a Cookie? 🍪

    A cookie is a small piece of data (up to 4KB) stored in the browser. It is saved as a key-value pair in a string format.

    📌 Example:

        document.cookie = "name=Bilal";
        
    🔹 By default, cookies are session cookies (deleted when you close the browser).


How to Set a Cookie? 🎯

    1️⃣ Basic Cookie:

        document.cookie = "name=Bilal";

    2️⃣ Set Expiry (expires/max-age):

        document.cookie = "name=Bilal; max-age=3600"; // Cookie expires in 1 hour ⏳
        document.cookie = "name=Bilal; expires=" + new Date().toUTCString(); // Set expiry date 🗓️

    ⚡ Priority: If both max-age and expires are set, max-age wins 🏆.


Why are Cookies Used? 🤔

    ✔ Authentication & Authorization 🔑 (e.g., storing login tokens)
    ✔ User Preferences 🎨 (e.g., dark mode)
    ✔ Tracking & Analytics 📊 (e.g., ad targeting)


Why Do Websites Ask to Accept Cookies? 🛑

    ✅ GDPR (privacy law in Europe) requires websites to get user consent before storing cookies.
    ✅ Some cookies track your activity, so websites must ask permission.
    ✅ Is it safe to accept?
        ⭐ Yes for trusted websites
        ⭐ No if you don’t want tracking


Third-Party Cookies 🎭

    🚀 These are cookies set by another website (not the one you're visiting).
        ✔ Used for ads & tracking
        ✔ Can be blocked by browsers for privacy


How Cookies Work? (Behind the Scenes) 🏗️

    📥 Getter (Reading Cookies):

        console.log(document.cookie); // Calls the getter method

    📤 Setter (Writing Cookies):

        document.cookie = "name=Bilal"; // Calls the setter method
        
    ⚠️ Cookies don’t overwrite, they append!


Attributes of a Cookie 🔍

    1️⃣ Domain 🌍

        document.cookie = "name=Bilal; domain=example.com";
        🔸 Only the specified domain can access this cookie.

    2️⃣ Path 📁

        document.cookie = "name=Bilal; path=/about";
        🔸 The cookie is only available on the /about page.

    3️⃣ Secure 🔒

        document.cookie = "name=Bilal; secure";
        🔸 Works only on HTTPS (except localhost).

    4️⃣ HttpOnly 🚫

        🔹 Cookies with HttpOnly cannot be accessed via JavaScript (only by the server).


Encoding & Decoding Cookies 🔡

    ✅ Store special characters (;)

        document.cookie = `name=${encodeURIComponent(';')}`;
        
    ✅ Retrieve the value

        decodeURIComponent(document.cookie);


How to Extract Key-Value Pairs? 🔍

    document.cookie.split("; ").map(cookie => cookie.split("="));

    📌 Converts 'name=Bilal; age=30' into:

        [["name", "Bilal"], ["age", "30"]]


Cookie Lifecycle (Flowchart) 🔄

    1️⃣ User visits the website 👨‍💻
    2️⃣ Website sends Set-Cookie in response 📨
    3️⃣ Browser stores it 📂
    4️⃣ On every request, the cookie is sent back 🔄

Final Thoughts 💡

    ✔ Cookies help store data but can also be used for tracking 👀
    ✔ Always check what you accept on websites ⚠️
    ✔ Use Secure, HttpOnly, and SameSite for better privacy 🔐

