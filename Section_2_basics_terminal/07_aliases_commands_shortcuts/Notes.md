=>   Aliases for command shortcuts :

         Aliases in the Bash shell allow you to create shortcuts for commonly used commands. This can save you time and make your command line experience more efficient. You can define these aliases in your ~/.bashrc file so that they are available every time you open a new terminal session.


=>   How to Create Aliases :

        An alias is defined with the following syntax:

            alias shortcut='command to be run'


=>   Viewing Current Aliases :

        To see all the aliases currently defined in your shell, use the alias command:

            alias


=>   Removing an Alias :

        If you want to remove an alias during a session (without editing .bashrc), you can use the unalias command:

               unalias shortcut

=>  To remove all aliases:

                unalias -a