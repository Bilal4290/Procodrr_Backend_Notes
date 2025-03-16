=>   Viewing Files :

      (1)  cat (Concatenate):

             Displays the entire content of a file.

                cat filename.txt


      (2)  less & more:

              Allows you to view large files one screen at a time.

                  less filename.txt

              Navigate with the arrow keys and press q to quit.

                  more filename.txt

              Navigate with the space bar to move forward and q to quit.


            
      (3)  head & tail:

               Displays the first or last few lines of a file.

                   head filename.txt

               Shows the first 10 lines by default.

                   tail filename.txt

               Shows the last 10 lines by default.

            To view a specific number of lines:

               head -n 20 filename.txt  # First 20 lines
               tail -n 20 filename.txt  # Last 20 lines


       (4)  grep:

              Searches for specific patterns within files.

                grep "search_term" filename.txt

                Shows lines containing "search_term". 




=>   Editing Files :

            (1)  nano:

                    A simple text editor in the terminal.

                       nano filename.txt

                    Use Ctrl + X to exit, Y to save changes, and N to discard.


            (2)  vi or vim:

                    A powerful, modal text editor.

                       vi filename.txt

                    Insert Mode: Press i to start editing.
                    Command Mode: Press Esc to exit insert mode.
                    Save and Exit: Type :wq in command mode.
                    Exit without Saving: Type :q!.



    Note :  'nautilus .' command in terminal open file explorer.
