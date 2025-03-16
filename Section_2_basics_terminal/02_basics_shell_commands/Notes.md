=>  Basics shells commands:

     (1)  echo:

            echo is like a console.log() in JS.

            suppose we create a variable.
               num=5

            In shell I can print the value of num variable with the help of echo command.
               echo $num    =>   output : 5

            I can also sum of this variable.
               echo $((num+num))

               =>  Why Use (( )) for Arithmetic?

                      The (( )) syntax is a powerful and convenient way to perform arithmetic in shell scripts, making calculations and expressions much simpler and easier to read.

            I can also make the file with .sh extension.
                test.sh


            =>  test.sh:

                While creating variables in file, not give space.
                  num1 = 6    =>  Not correct way
                  num1=6      =>  Correct Way


     (2)  pwd :  print working directory
                 Displays the current directory you are in.

     (3)  whoami : print the user name