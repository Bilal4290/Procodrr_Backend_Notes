import fs from 'node:fs/promises'
import path from 'path'
import http from 'node:http'


const uint8Array = new Uint8Array(8)  // Created 8 bits


uint8Array[0] = 0x50  //P
uint8Array[1] = 0x72  //r
uint8Array[2] = 0x6F  //o
uint8Array[3] = 0x63  //c
uint8Array[4] = 0x6F  //o
uint8Array[5] = 0x64  //d
uint8Array[6] = 0x65  //e
uint8Array[7] = 0x72  //r

// Creating a server

const server = http.createServer((req,res) => {
    res.write(uint8Array)
    res.end()
})

server.listen(3000,() => {
    console.log('Server running...');
})





// Transferring array buffer data to disk memory

// const filePath = path.resolve(import.meta.dirname,'text.txt')
// await fs.writeFile(filePath,uint8Array)

// const decoder = new TextDecoder('utf-8')
// const decodedValue = decoder.decode(uint8Array)
// console.log(decodedValue);


