=>  Install NodeJS

=>  How to debug JS code in VS Code?

     (1)  Run and Debug   => Output => Debug Console

=>  Ways to run Node Js:
       (1)  In terminal
             (a) Using Node Repl  => node + Enter
             (b) By this command: node filePath(./Practice_folder/app.js)
     
=>  How to debug Node JS code:
       Run and Debug  => Output => Debug Console



=> When i debug Node JS code, then i noticed that the variables of my file goes in local scope but in the file i create them globally?

    -Local
      -__fileName
      -__dirName
       a = 30
       b = undefined
      -exports = {}
      -require = f require()
      -module = Module {}
      -this = object


=>  There is no document and window in node.
    