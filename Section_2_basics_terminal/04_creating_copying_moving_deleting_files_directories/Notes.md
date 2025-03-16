=>   Creating Files :

         (1)  touch: Create an empty file or update the timestamp of an existing file.

                       touch filename.txt

         (2)  echo: Create a file with initial content.

                       echo "Hello, World!" > hello.txt

         (3)  cat: Create a file with content input from the terminal.

                       cat > file.txt
                       Type your content and press Ctrl + D to save and exit.

=>   Creating Directories :

         (1)  mkdir: Create a new directory.

                        mkdir my_directory

         (2)  To create nested directories:

                        mkdir -p dir1/dir2/dir3




=>   Copying Files :

       (1)  cp: Copy a file from one location to another.

                  cp source.txt destination.txt

       (2)  To copy a file to a directory:

                  cp source.txt /path/to/directory/



=>   Copying Directories :

        cp -r: Recursively copy an entire directory and its contents.

                 cp -r /path/to/source_directory /path/to/destination_directory




=>   Moving Files :

        (1)  mv: Move a file to a new location or rename it.

                 mv oldname.txt new_location_path/newname.txt

        (2)  To move a file to a different directory:

                 mv filename.txt /path/to/destination/



=>   Moving Directories :

             mv: Move a directory to a new location or rename it.

                   mv /path/to/old_directory /path/to/new_directory


=>   Renaming Files :

             To rename a file, use the mv command with the syntax:

                   mv old_filename new_filename


=>   Renaming Directories :

             Renaming directories works the same way as renaming files:

                   mv old_directory_name new_directory_name


=>   Deleting Files :

       (1)  rm: Remove a file.

                rm filename.txt

       (2)  To delete multiple files:

                rm file1.txt file2.txt file3.txt


=>   Deleting Directories :

       (1)  rmdir: Remove an empty directory.

                  rmdir directory_name

       (2)  rm -r: Recursively remove a directory and its contents.

                  rm -r directory_name

       (3)  To force delete without prompting for confirmation:

                  rm -rf directory_name



=>   How to create multiple files with the help of loop:
  
        Make a file with.sh extension:

          for i in {1..100}; do touch "app$i.js"; done



=>   How to resolve 'Permission denied' error?

           Run the following code in terminal :

                sudo chmod +x fileName