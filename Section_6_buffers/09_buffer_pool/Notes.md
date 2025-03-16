=>  Buffer Pool:

        import { Buffer } from 'buffer'

        console.log(Buffer.poolSize)   // 8192 === 8kb 


        const a = Buffer.alloc(5)
        const b = Buffer.allocUnsafe(5)

        console.log(a.byteLength)   // 5    
        console.log(b.byteLength)   // 5

        console.log(a.buffer.byteLength)  // 5
        console.log(a.buffer.byteLength)  // 8192


=>  When buffer pool created for allocUnsafe:

       When a node js program runs, buffer pool is created for allocUnsafe, but there is a condition:
           BufferSize < Buffer.poolSize >>> 1

        Note: Right shift means divided by 2 and takes its Math.floor()

        const nodeBuffer1 = Buffer.allocUnsafe(4095)   // Use Buffer Pool
        const nodeBuffer2 = Buffer.allocUnsafe(4095)  //  Also use buffer pool but different


=>  How to change buffer size?
 
         Buffer.poolSize = 10000

         We cannot change the size of buffer pool which is created first.


=>  Buffer.from()

     Buffer.from() behinds the scenes use Buffer.alloc and Buffer.alloc behind the scenes use Buffer pool.
     It means Buffer.from() also uses buffer pool.


=>  Buffer.concat([a,b])

=>  constants in Buffer:

         import {constants} from 'buffer'
        
        console.log(constants.MAX_LENGTH)  // 4GiB

        In NodeJS, maximum 4 GiB buffer we can create, and it depends on the system.
        Some systems have high, some have low.


=>  Buffer.allocUnsafeSlow()

        Why it is slow because it does not use the buffer pool.