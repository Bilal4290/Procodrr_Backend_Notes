const path = require('path')
const { Worker } = require('worker_threads')

const path_1 = path.resolve(__dirname,'worker_1.js')
const path_2 = path.resolve(__dirname,'worker_2.js')
const path_3 = path.resolve(__dirname,'worker_3.js')
const path_4 = path.resolve(__dirname,'worker_4.js')
const path_5 = path.resolve(__dirname,'worker_5.js')

new Worker(path_1)
new Worker(path_2)
new Worker(path_3)
new Worker(path_4)
new Worker(path_5)

