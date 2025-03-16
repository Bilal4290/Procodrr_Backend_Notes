function product(...nums){
    return nums.reduce((acc,cur) => {
        return acc * cur
    })
}

module.exports = product