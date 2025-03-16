=>   Priority level of checking commands.txt :

        (1)  alias 
        (2)  functions
        (3)  built-ins
        (4)  hash tables
        (5)  executable files   //  Find executable files in paths of environment variables.


=>    'which' and 'type'  pwd :

          'which' command shows the absolute path of executable file.
          'type' command shows the type of command and if it is binary executable then it shows the path.

          If pwd is a binary on your system, which pwd will show the location (e.g., /usr/bin/pwd).
          If pwd is a built-in shell command, which pwd may show no output or require using type pwd to indicate it's a built-in command.


=>   IF ALIAS AND FUNCTIONS ARE OF SAME NAME THEN ALWAYS WRITE ALIAS AFTER THE FUNCTION, OTHERWISE IT GIVE ERRORS.


=>    IF I RUN NODE FROM POWERSHELL THEN NO WINPTY.EXE FILE SEEN, BUT IF I RUN NODE FORM BASH SHELL THEN WINPTY.EXE FILE SEEN WHICH MEANS PROVIDES A UNIX LIKE ENVIRONMENT.BUT IF I RUN THE COMMAND NODE.EXE FROM BASH THEN NO WINPTY.EXE RUNS.