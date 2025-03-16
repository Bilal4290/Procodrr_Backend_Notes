=>   How to create package.json file :

          npm init

            or

          npm init -y


=>    Commands which run without 'run' means you don't have to use 'npm run command', these can be run with
      'npm command' :

      (1)  "start"
      (2)  "stop"
      (3)  "restart"
      (4)  "test"


=>   --watch   =>   node --watch app.js


=>    scripts in package.json file :

          In a package.json file, the "scripts" section defines command-line scripts that can be run using npm run <script-name>. These scripts automate tasks such as building, testing, or running the app.

{
  "scripts": {
    "start": "node index.js",        // Runs `node index.js`
    "test": "jest",                  // Runs tests with Jest
    "build": "webpack --config webpack.config.js",  // Builds the project
    "dev": "nodemon index.js"         // Runs the app with nodemon in dev mode
  }
}


=>   dependencies in package.json file :



In a package.json file, dependencies are the packages required for your project to run properly. These are installed using npm install and stored in the "dependencies" section.

Example:

{
  "dependencies": {
    "axios": "^1.5.6"  // Axios is required for the project
  }
}



Semantic Versioning (SemVer)
Dependencies follow semantic versioning: MAJOR.MINOR.PATCH.

MAJOR: Breaking changes.
MINOR: New features, backward-compatible.
PATCH: Bug fixes, backward-compatible.

^ Symbol in Dependencies:
    The caret (^) allows automatic updates for:

    PATCH versions (last digit)
    MINOR versions (middle digit) But not MAJOR (first digit), as this may break compatibility.
Example:

"^1.5.6" means any version >=1.5.6 but <2.0.0 can be installed.
Without ^, only the specified version (e.g., 1.5.6) is installed.



=>   ~ (Tilde) in Dependencies :

~1.5.6 allows updates to the PATCH version, but not the MINOR or MAJOR versions.
It installs versions >=1.5.6 but <1.6.0.


=>   * (Wildcard) in Dependencies :

"*" allows any version, including MAJOR, MINOR, and PATCH updates. It installs the latest available version.


=>    devDependencies in package.json :

devDependencies are packages used only during development (e.g., testing, building, etc.).
They are defined under "devDependencies" and not required in production.

Example:

json
Copy code
{
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
Install with:

bash
Copy code
npm install --save-dev <package-name>
nodemon
nodemon is a development tool that automatically restarts your Node.js application when file changes are detected.
It is typically used during development for a better workflow.
Run with:

bash
Copy code
npx nodemon <app.js>