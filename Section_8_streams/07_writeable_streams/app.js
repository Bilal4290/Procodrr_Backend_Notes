import fs from 'node:fs'

// console.time()

// File Size: 1.84GB
// Time: 27s
// Memory: 44MB
// CPU: 20%

// const readStream = fs.createReadStream("D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4")

// readStream.on('data',(chunkBuffer) => {
//     fs.appendFileSync('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\07_writeable_streams\\video.mp4', chunkBuffer)
// })

// readStream.on('end',() => {
//     console.timeEnd()
// })






console.time()

// File Size: 1.84GB
// Time: 11s
// Memory: 44MB
// CPU: 18%
const readStream = fs.createReadStream("D:\\Telegram Desktop\\Namaste React\\Episode 02 - Igniting our App.mp4",{highWaterMark:1*1024*1024})

const writeStream = fs.createWriteStream('D:\\Sigma\\ASP\\Backend_ASP\\Section_8_streams\\07_writeable_streams\\video.mp4',{highWaterMark:1*1024*1024})

readStream.on('data',(chunkBuffer) => {
    const isEmpty = writeStream.write(chunkBuffer)
    if(!isEmpty){
        readStream.pause()
    }
})

writeStream.on('drain',()=>{
    readStream.resume()
})

readStream.on('end',() => {
    console.timeEnd()
})