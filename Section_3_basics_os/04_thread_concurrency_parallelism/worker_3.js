
console.time('worker3')
console.log('Worker 3 Started...')

for (let i = 0; i < 10000000000 ; i++) {
    if (i%5000000000==0){
        console.log(i)
    }    
}

console.log('Worker 3 Ended...')
console.timeEnd('worker3')