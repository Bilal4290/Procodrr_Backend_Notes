
=>   Prompt in terminal :

        A "prompt" in the Linux terminal is the text that appears before your cursor, indicating that the shell is ready to accept commands. The appearance of the prompt is usually defined by the PS1 environment variable. Here's a basic explanation and some examples:

     Default Prompt:

          In many Linux distributions, the default prompt looks like this:

              user@hostname:~/current-directory$

                  user: Your username.
                  hostname: The name of the machine.
                  ~/current-directory: The current working directory.
                  $: Indicates a regular user. (It would be # for the root user.)


=>  Customizing the Prompt and bashrc file:

           You can customize your prompt by modifying the PS1 variable. This can be done temporarily (just for the current session) or permanently by adding the changes to your ~/.bashrc or ~/.bash_profile file.

           Example 1: Basic Customization :

             To change your prompt to display the time and the current directory, you can set PS1 like this:

                   PS1="\t \w$ "

                         \t: Current time.
                         \w: Current working directory.

           Example 2: Adding Colors :

              You can also add colors to your prompt using escape sequences. For example:

                   PS1="\[\e[32m\]\u@\h \[\e[34m\]\w\[\e[0m\]$ "

                         \[\e[32m\]: Sets the text color to green.
                         \[\e[34m\]: Sets the text color to blue.
                         \[\e[0m\]: Resets the text color to default.

            Applying Changes :

                To apply your changes to the current terminal session, you can either source your .bashrc file:

                     source ~/.bashrc
                          Or 
                     simply open a new terminal session.



            Example of a Fancy Prompt :

                Here's an example of a more complex prompt that includes the username, hostname, current directory, and time, all color-coded:

                    PS1="\[\e[1;32m\]\u@\h \[\e[1;34m\]\w \[\e[1;33m\]\A\[\e[0m\]$ "

                This would show a prompt like:

                    user@hostname /current/directory 14:55$

                      Common PS1 Symbols:

                        \u: Username.
                        \h: Hostname.
                        \w: Current working directory.
                        \t: Current time (HH:MM
                        ).
                        \A: Current time (HH
                        ).
                        \d: Date.
                        \n: Newline.

            You can experiment with different configurations until you find one that you like!




=>    Command to open file explorer from terminal :

         'explorer .'


=>    Note :

         .bashrc file runs every time when you open a new bash terminal.
         .bash_profile also runs but before .bashrc file.
         First .bash_profile runs then .bashrc file runs.



=>   PS1 PS2 PS3 PS4 ALL ARE SHELL VARIABLES.