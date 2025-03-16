// const {exec} = require('child_process')

// exec(`powershell.exe -Command "setx myVar_2 'Node JS' /M"`)



// const env_var = process.env 
// console.log(env_var)



const fs = require('fs')

const envFileData = fs.readFileSync('./.env').toString()

envFileData.split('/\r?\n/').forEach((elem) => {
    const [key,value] = elem.split('=')
    process.env[key] = value
    
})

console.log(process.env)