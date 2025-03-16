import fs from "node:fs"

// Using normal buffer
// console.time()
// File Size: 1.84GB
// Time Taken: 17s
// Memory: 1905MB
// CPU: 6%
// const bufferContent = await fs.readFile("D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4")
// await fs.writeFile('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\03_readable_streams\\video.mp4',bufferContent)
// console.timeEnd()





// Using readable stream
console.time()
// File Size: 1.84GB
// Time Taken: 21s
// Memory: 305MB
// CPU: 8%
const readStream = fs.createReadStream('D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4',{highWaterMark: 100*1024*1024})
// readStream is like a event emitter and on this we can apply events.

readStream.on('data',(chunkBuffer)=>{
    fs.appendFileSync('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\03_readable_streams\\video.mp4',chunkBuffer)
})

// By default, chunk size 64kb (65536 bytes)

readStream.on('end',()=>{
    console.timeEnd()
})
