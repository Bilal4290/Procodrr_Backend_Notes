
console.time('worker4')
console.log('Worker 4 Started...')

for (let i = 0; i < 10000000000 ; i++) {
    if (i%5000000000==0){
        console.log(i)
    }    
}

console.log('Worker 4 Ended...')
console.timeEnd('worker4')