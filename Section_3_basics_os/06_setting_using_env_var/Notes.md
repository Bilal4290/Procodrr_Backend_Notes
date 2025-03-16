=>   How to see environment variables in terminal :

          env or printenv


=>    How to set user environment variables using bash terminal :
 
          setx variableName 'variableValue'

          Note :  You can also set the empty value using terminal.


=>    How to delete user environment variables using bash terminal :

         Basically, bash terminal has no such a command, powershell has this command but in bash terminal we can also run the powershell command.

         powershell.exe -Command 'REG delete HKCU\Environment /F /V variableName'




=>    How to set system environment variables using powershell ?

           Run powershell as administrator

           "setx variableName 'variableValue' /M"


=>   How to delete system environment variables using powershell :

         REG delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /F /V variableName


=>   How to set user environment using Node Js ?

         const {exec} = require('child_process)
         exec(setx variable_name variable_value)


=>   How to delete user environment variables using Node JS ?

         const {exec} = require('child_process')
         exec("REG delete HKCU\\Environment /F /V variableName")


=>    How to set system environment variables using Node JS ?

        const {exec} = require('child_process')
        exec("setx variable_Name 'variable_Value' /M")


=>   How to delete user environment variables using Node JS ?

        const exec = require('child_process')
        exec('REG delete "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment" /F /V VariableName')



=>    How to set environment variables without export keyword :

             var_1=45 var_2=89 node index.js


=>   How to stop an environment variable to not pass to its child process.

             env -u PS1 node index.js


=>   PARENT PROCESS HAS THE ABILITY TO CONTROL THE ENVIRONMENT VARIABLES OF CHILD PROCESS.


=>   WHEN A PROCESS STARTS A CHILD PROCESS THEN THIS CHILD PROCESS INHERITS THE ALL ENVIRONMENT VARIABLES OF PARENT PROCESS.


=>   CHILD PROCESS CANNOT CHANGE THE ENVIRONMENT VARIABLES OF PARENT PROCESS BUT IT CAN CHANGE BY THE SOME COMMANDS.


=>   .env file :

        A .env file is a simple text file used to store environment variables in key-value pairs.

        In this file, we kept API keys and database password.

        We cannot push this file on Github.

        We set this in .gitignore file.



=>    How to set the .env files variables in a process ?

          const fs = require('fs')

          const fileData = fs.readFileSync('.env').toString("")

          fileData.split('/\n?\r/').forEach((elem) => {
            const [key,value] = elem.split('=')
            process.env[key] = value
          })



=>   LF or CRLF




=>   Understanding Parent and Child Processes :
      
      Parent Process:

           This is a process that initiates or starts another process. Think of it as the "boss" or "creator" of another process.

      Child Process:

           This is the process that is started by the parent process. The child process is like a "worker" that is created by the boss (parent process).

        
      Environment Variables in Processes :

           Environment Variables are key-value pairs that are used to store configuration settings and other information that processes can use. For example, an environment variable might store the path to a database, the location of files, or other important data that a program needs to run.


=>   Key Concepts :

         1. Parent Process Controls Environment Variables :

               Control: The parent process has full control over its environment variables. When it starts a child process, it can decide what environment variables the child process will inherit.
               
               Example: Suppose a parent process has an environment variable API_KEY=abc123. When it starts a child process, it can choose to pass this API_KEY to the child process.


         2. Child Process Inherits Environment Variables :

               Inheritance: When a child process is started, it automatically receives a copy of all the environment variables from the parent process. This means it can use the same variables and values that the parent process was using.

               Example: If the parent process has DB_HOST=localhost, the child process will also have DB_HOST=localhost unless the parent decides to modify this value before starting the child process.


         3. Child Process Can Change Its Own Environment Variables :

               Child Process: Once the child process is running, it can change its own environment variables, but these changes are only local to the child process. The parent process is not affected by these changes.

               Example: If the child process changes DB_HOST=localhost to DB_HOST=remotehost, this change is only visible to the child process. The parent process still has DB_HOST=localhost.

               Cannot Affect Parent: The child process cannot change the environment variables of the parent process directly. This separation ensures that the parent process remains in control of its environment and isn't unintentionally affected by changes made by the child process.

         4. Commands That Allow Changing Environment Variables :

               Within the Child Process: A child process can use commands or code to modify its own environment variables. For instance:

                  In a Bash shell, you can set an environment variable like this: export VAR_NAME=value.
                  In Python, you can modify environment variables using os.environ['VAR_NAME'] = 'value'.

                Impact: These commands only change the environment for the child process and any processes it may start (which would then be the "grandchild" processes).

                Example to Illustrate These Concepts:
                    Let’s say you have a parent process that is a script or a program:

            Parent Process:

                  Has an environment variable PATH=/usr/bin.
                  Starts a child process, for example, another script or program.

            Child Process:

                  Inherits PATH=/usr/bin from the parent process.
                  Decides it needs to change its PATH to include a different directory, so it changes PATH=/usr/local/bin.
                  This change to PATH only affects the child process and any processes it starts. The parent process still has PATH=/usr/bin.

=>   Summary :

           Parent Process: Has full control over its environment variables and passes them to child processes.

           Child Process: Inherits environment variables from the parent process but can only change its own copy of these variables. It cannot affect the parent’s environment directly.

           Separation: This separation ensures that changes made in a child process do not inadvertently affect the parent process, maintaining stability and control.
           
By understanding these concepts, you can manage environment variables more effectively, especially when dealing with multiple processes in a complex application.
