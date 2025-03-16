
console.time('worker2')
console.log('Worker 2 Started...')

for (let i = 0; i < 10000000000 ; i++) {
    if (i%5000000000==0){
            console.log(i)
    }    
}

console.log('Worker 2 Ended...')
console.timeEnd('worker2')


