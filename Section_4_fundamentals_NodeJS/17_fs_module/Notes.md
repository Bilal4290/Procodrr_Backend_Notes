=>   fs :

    Native core module that allows you to interact with the file system on your computer.
    fs is an object.
    Not only read text files, also read and write binaries.

    import fs from 'node:fs';

=>   Read file :

      (1)  fs.readFileSync(filePath,characterEncoding)   =>  Not recommended to use because it blocks the main thread.
      (2)  fs.readFile(filePath,characterEncoding,callBackFunction)  =>  Better but not recommended to use with 'node:fs'

      =>  Best approach to read file :

          import fs from 'node:fs/promises';

          const fileContent = await fs.readFile(filePath,characterEncoding) =>  Like Sync but not blocks the main thread.

        Note: Use try catch with async await 

=>    Write file : 

        import fs from 'node:fs/promises'

        (1)  fs.writeFile(fileName, 'Write here data')         //  overwrite the data
        (2)  fs.appendFile(fileName, 'Write here data')

        Note: For error messages create a error.log file (./error.log => Redirect to error.log file)


=>    Create file:

        import fs from 'node:fs/promises'
        fs.writeFile('fileName','')

                 OR

        import fs from 'node:fs/promises'
        fs.appendFile('fileName','')           // Update


=>    Create folder :

        import fs from 'node:fs/promises'
        fs.mkdir(folderName)


=>     Delete file :

        import fs from 'node:fs/promises'

        fs.unlink(filePath)


=>     Delete folder :

        import fs from 'node:fs/promises'

        fs.rmdir(folderPath)

        fs.rm(folderPath,{recursive : true})


=>     Rename file :

        import fs from 'node:fs/promises'

        await fs.rename(oldPath,newPath)


=>     Move file :

        import fs from 'node:fs/promises'

        await fs.rename(src,destPath)


=>     Copy file :

        import fs from 'node:fs/promises'

        await fs.copyFile(srcPath,destPath)


=>     Copy folder :

        import fs from 'node:fs/promises'

        await fs.cp(src,dest,{recursive : true})



=>    fs.stats


=>    fs.watch(fileName,(eventType,fileName) => ())