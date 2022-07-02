const ExpressError = require("./errors")

function mean(numsArr) {
    const len = numsArr.length
    let temp = 0
    for (let char of numsArr) {
        temp += char
    }
    return (temp / len)
}

function checkArr(numsParam) {
    arr = numsParam.split(',')
    for (let char of arr) {
        if (!parseInt(char)) {
            return new ExpressError(`${char} is not a number!`, 400)
        }
    }
    return true
}

function toArr(nums) {
    let n = nums.split(',').map(x => parseInt(x))
    return n.sort((a, b) => a - b)
}

function median(numsArr) {
    const arrLen = numsArr.length
    if (arrLen % 2 != 0) {
        return numsArr[(arrLen - 1) / 2]
    } else {
        return numsArr[(arrLen) / 2]
    }
}

function mode(numsArr) {
    const hashmap = numsArr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    console.log(hashmap)
    result = 0

    for (let char in hashmap) {
        
        console.log(`Current char is ${char}`)
        console.log(`How many times does char appear? ${hashmap[char]}`)
        if (hashmap[char] > result) {
            result = char
            console.log(`result is ${result}, at char ${char}`)
        }
    }

    return result
}


module.exports = {
    mean: mean,
    median: median,
    mode: mode,
    checkArr: checkArr,
    toArr: toArr,

}

