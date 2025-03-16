=>   Shebang :

        Also called hashbang.
        A concept of terminal/CLI

        Works for unix based operating systems  =>   Eg : Bash
        Not works for powershell and CMD
        npx and npm behind the scenes use shebang

        node app.js   =>   Runs 

        ./app.js      =>   Not runs

        Put shebang and executable at top in app.js file.

        #!node

        ./app.js     =>  Runs

                 Space and double quotes in path are not allowed


=>  Method which runs in both windows and unix :

        Note :   In linux and mac you have to use env to start node.

        which env    =>   /usr/bin/env

          #!/usr/bin/env node



=>   Note :   env can also start a node   =>  env node




