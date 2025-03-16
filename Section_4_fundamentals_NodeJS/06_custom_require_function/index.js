const path = require('path')

const ma = path.resolve(__dirname,'./math.js')

const a = loadModule(ma)

console.log(a)

function loadModule(path){
    const vm = require('vm')
    const fs = require('fs')
    const fileContent = fs.readFileSync(path).toString()

    return (function(exports){
        vm.runInNewContext(fileContent,{exports,console})
        return exports
    })({})
}


