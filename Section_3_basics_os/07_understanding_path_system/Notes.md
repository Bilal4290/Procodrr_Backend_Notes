=>   Folder  : 

          A container which holds files and also folders.

          Representation : d


=>   Files :

          A container which holds data.

          Representation : -


=>   Symbolic link :

          Symbolic links provide references to other files or directories, helping to manage and access data more flexibly.

          Representation : l

          Purpose: Symbolic links allow for easier access to files and directories from multiple locations without duplicating data.It essentially provides a shortcut to another location in the filesystem.



=>    Absolute path :
 
           In Windows :   Path from C directory. Looks like   =>   C:

           In windows, when we store path in a string, we use double blackslash(\\), otherwise it creates problems.


           In linux :  Path from home directory. Looks like   =>  /home/


=>    Relative path :

           In Windows :  Path from the relative folder or file.


=>   BASH TERMINAL PROVIDES PATH IN UNIX IF WE USE PWD COMMAND.


=>    cygpath :

            cygpath means Cygwin path.
            This tool is primarily used to convert paths between Windows format.

            cygpath -w  '/cygdrive/c/path/to/file'         output :  'C:\path\to\file'   

            cygpath -u window_path      output : linux_path


=>   cygpath command not uses in unix.

=>    WINDOW PATH USES BACKWARD SLASH AND UNIX PATH USES FORWARD SLASH TO SEPRATE PATHS.


        . means current directory
        .. means parent dirctory



=>  How to install wsl :

          wsl --install
          
          sudo apt update    // su means super user




          
