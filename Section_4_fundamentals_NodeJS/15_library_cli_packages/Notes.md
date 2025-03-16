1. Difference Between a Library and a CLI Package
   Library Package: A library package contains functions, modules, or utilities that developers use within their code. It is intended to be imported or required in other projects or scripts. Libraries usually export functions, classes, or objects so they can be used programmatically. For example, lodash is a library package that exports utility functions.

   CLI (Command Line Interface) Package: A CLI package is designed to be run directly from the command line, providing some functionality through commands. These packages usually provide a CLI tool, often installed globally or locally, that can be executed via the terminal. For example, npm, vite, or eslint are CLI packages.

2. Why .bin Folder is Installed for CLI Packages and Not for Library Packages
   When you install a CLI package, it often needs to be executed from the command line. CLI packages typically define an executable file in their package.json under the bin field. This executable file is linked in the node_modules/.bin directory. This allows you to run the CLI tool by typing commands in the terminal.

In contrast, a library package does not usually need a command-line interface (unless it's a hybrid package). Therefore, no executable is created, and thus no .bin folder is needed.

Example:

Installing vite (a CLI tool): This package defines its CLI in the bin field, and therefore, a symlink to the executable file is created in node_modules/.bin.
Installing lodash (a library): This does not have any CLI functionality, so no .bin folder is created.

3. Cases When .bin Folder is Installed for Library Packages
A .bin folder might be created even for library packages if the library also exposes CLI commands. These hybrid packages serve dual purposes: they can be used programmatically in code and also provide command-line tools.

Hybrid Package Example: jest can be used both as a library (imported into code for writing tests) and as a CLI tool (jest command in the terminal). Therefore, it provides an entry in node_modules/.bin. 


4. What is a Hybrid Package (CLI + Library)?
A hybrid package can function both as a CLI tool and a library. For example, webpack can be used via its CLI (webpack command in the terminal) and as a library (importing webpack in JavaScript code to configure builds programmatically).
Other Examples: eslint, jest, babel. 


5. Does a CLI Package Export Nothing?
CLI packages may or may not export anything depending on how they are designed. However, many CLI packages do not export anything in the traditional sense (i.e., for programmatic use) because their primary function is to run commands from the terminal. But some CLI tools can also export functions for programmatic use (e.g., webpack).

6. Is npx Used to Run CLI Packages?
   Yes, npx is used to run CLI tools that are either installed locally or available in the npm registry. It can run CLI commands without the need to globally install the package. For instance, npx vite will run the Vite CLI tool without requiring it to be installed globally.


7. Do We Install CLI Packages as Dev Dependencies?
   CLI packages are typically installed as dev dependencies when they are used during development (e.g., webpack, eslint, vite). They don't end up in the production bundle, so they are marked under devDependencies in package.json.
   Library packages that are needed for production (e.g., react, express) are installed as dependencies because they are required at runtime in the deployed application.


8. Why Do We Use npm to Install Vite and npx to Run Vite?
   npm is used to install Vite as a package (either globally or locally).
   npx is used to run Vite directly from the command line without needing to reference the path to node_modules/.bin or install it globally. It allows you to execute the CLI tool without polluting the global environment.

9. What Are Local and Global Packages?
   Local Packages: These are installed within the current project’s node_modules folder. They are typically specified in package.json and are project-specific. Local installations can be run using npx or scripts defined in package.json.

   Global Packages: These are installed globally on your system using the -g flag (e.g., npm install -g vite). Global packages can be run from any directory in your system since they are added to your system’s PATH.

10. What is Get-ExecutionPolicy in PowerShell?
    Get-ExecutionPolicy is a PowerShell command used to check the current execution policy, which dictates the conditions under which PowerShell scripts are allowed to run.
    PowerShell has several execution policies, including:

      Restricted: No scripts are allowed to run.
      AllSigned: Only scripts signed by a trusted publisher can be run.
      RemoteSigned: Scripts downloaded from the internet must be signed by a trusted publisher.
      Unrestricted: All scripts can be run, but with a warning for scripts downloaded from the internet.

11. How to Set Restricted Execution Policy
To set the execution policy to Restricted, you can run the following command in PowerShell as an administrator:

powershell
Copy code
Set-ExecutionPolicy unrestricted -Scope CurrentUser
This command ensures that no PowerShell scripts can be run on your system, which is the most secure setting.
