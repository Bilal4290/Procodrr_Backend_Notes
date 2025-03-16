=>   Environment Variables :

       Key value pair of strings means k keys aur values dono string mai hn gay.


       User Variables
       System Variables
       Process specific variables

=>   path and semi-colon(;) :


=>   How to create environment variables in bash terminal :

       export num=58

       But in new terminal it is not available.


=>   How to create environment variables permanently?

        Create environment variables in .bashrc file.

        export num=58


=>   How to open .bashrc file in vs code :

          code ~/.bashrc


=>   Command to see environment variables in terminal :

            env or printenv


=>   How path overwrite ?

           path += newPath
           

 =>   Files :

         code ~/.bashrc
         code ~/.bash_profile
         code /etc/bash.bashrc
         code /etc/profile


=>  How to delete environment variables :

         unset env_variable_name