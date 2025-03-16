=>   npx searching steps :

      Step_1 :

          (1)  Search for package.json file in the current working directory.
          (2)  Search for name key in the package.json file.    // name should be same you are using with npx.
          (3)  Search for bin key in package.json file.        //  value of bin key is a file.[binary]
          (4)  If finds then executes the file.

        
      Step_2 :

          (1)  Search for node_modules in the current working directory.
          (2)  Search for .bin folder in node_modules.
          (3)  Search for the file name you provided with npx in .bin folder.
          (4)  If finds then executes the file.


      Step_3 :

          (1)  Search for the file name you provided with npx in global node_modules folder.
          (2)  If finds then executes the file.

      Step_4 :

          (1)  Search for package in npm_cache.


      Step_5 :

          (1)  Search for the package in npm registry.
          (2)  If finds then asks the permissions to download.




=>   Command to check the path where global packages are installed :

         npm root -g


=>   What npx does ?

        Searches for a file and executes it.


=>  Error: 

        npx hello 

        'hello' is not recognized as internal or external command


=>  Command to check which shell our os is using:

        npm config get script-shell

        If you are using window os, and after running command null is coming, it means it is using default shell, which is cmd.

=>  Command to set bash as default shell in window os:
  
         npm config set script-shell 'bash_shell_path'
        
